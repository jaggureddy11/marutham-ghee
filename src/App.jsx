import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import SearchModal from './components/SearchModal';
import UserModal from './components/UserModal';

// Pages
import Home from './pages/Home';
import PurityGuide from './pages/PurityGuide';
import VedicProcess from './pages/VedicProcess';
import PregnancyBenefits from './pages/PregnancyBenefits';
import BeautyBenefits from './pages/BeautyBenefits';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState(() => {
        try {
            const saved = localStorage.getItem('marutham_cart');
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    // Save cart state to local storage
    useEffect(() => {
        localStorage.setItem('marutham_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (productId, qty = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === productId);
            if (existing) {
                return prev.map(item => 
                    item.id === productId ? { ...item, qty: item.qty + qty } : item
                );
            }
            return [...prev, { id: productId, qty }];
        });
        setIsCartOpen(true);
    };

    const updateCartQty = (productId, qty) => {
        setCart(prev => {
            if (qty <= 0) {
                return prev.filter(item => item.id !== productId);
            }
            return prev.map(item => 
                item.id === productId ? { ...item, qty } : item
            );
        });
    };

    const cartCount = cart.reduce((total, item) => total + item.qty, 0);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home addToCart={addToCart} setCurrentPage={setCurrentPage} />;
            case 'purity-guide':
                return <PurityGuide setCurrentPage={setCurrentPage} />;
            case 'vedic-process':
                return <VedicProcess setCurrentPage={setCurrentPage} />;
            case 'pregnancy-benefits':
                return <PregnancyBenefits setCurrentPage={setCurrentPage} />;
            case 'beauty-benefits':
                return <BeautyBenefits setCurrentPage={setCurrentPage} />;
            case 'admin-dashboard':
                return <AdminDashboard setCurrentPage={setCurrentPage} />;
            case 'user-dashboard':
                return <UserDashboard setCurrentPage={setCurrentPage} />;
            default:
                return <Home addToCart={addToCart} setCurrentPage={setCurrentPage} />;
        }
    };

    const handleUserClick = () => {
        const token = localStorage.getItem('marutham_jwt');
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                if (payload.role === 'admin') {
                    setCurrentPage('admin-dashboard');
                } else {
                    setCurrentPage('user-dashboard');
                }
            } catch (e) {
                // If token is invalid, open the modal to login again
                setIsUserOpen(true);
            }
        } else {
            setIsUserOpen(true);
        }
    };

    return (
        <div className="min-h-screen bg-warm-cream flex flex-col justify-between selection:bg-ghee-gold/30">
            {/* Header */}
            <Header 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                toggleCart={() => setIsCartOpen(!isCartOpen)}
                toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
                toggleUser={handleUserClick}
                cartCount={cartCount}
            />

            {/* Main view with smooth transitions and sliding curtains */}
            <div className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {renderPage()}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer */}
            <Footer setCurrentPage={setCurrentPage} />

            {/* Overlays with AnimatePresence */}
            <AnimatePresence>
                {isCartOpen && (
                    <CartDrawer 
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)}
                        cart={cart}
                        updateCartQty={updateCartQty}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSearchOpen && (
                    <SearchModal 
                        isOpen={isSearchOpen}
                        onClose={() => setIsSearchOpen(false)}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isUserOpen && (
                    <UserModal 
                        isOpen={isUserOpen}
                        onClose={() => setIsUserOpen(false)}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
