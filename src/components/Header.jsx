import React, { useState, useEffect } from 'react';

export default function Header({ currentPage, setCurrentPage, toggleCart, toggleSearch, toggleUser, cartCount }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Shop' },
        { id: 'vedic-process', label: 'Vedic Process' },
        { id: 'purity-guide', label: 'Purity Guide' },
        { id: 'pregnancy-benefits', label: 'Pregnancy Care' },
        { id: 'beauty-benefits', label: 'Beauty & Wellness' }
    ];

    const handleLinkClick = (e, pageId) => {
        e.preventDefault();
        setCurrentPage(pageId);
        setMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-warm-cream/98 shadow-lg border-b border-earth-brown/10 h-16' 
                : 'bg-warm-cream/95 backdrop-blur-sm h-20'
        }`}>
            <nav className="flex items-center justify-between h-full px-6 md:px-10 max-w-[1400px] mx-auto">

                {/* ── LEFT: Logo ── */}
                <a
                    href="#"
                    onClick={(e) => handleLinkClick(e, 'home')}
                    className="flex items-center gap-3 flex-shrink-0 hover:opacity-85 transition-opacity group"
                >
                    <img
                        src="/logo.png"
                        alt="Marutham Ghee Logo"
                        className={`object-contain transition-all duration-300 ${scrolled ? 'h-9 w-9' : 'h-12 w-12'}`}
                    />
                    <div className="flex flex-col leading-none">
                        <span className={`font-display-lg text-ghee-gold font-bold tracking-tight transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                            Marutham
                        </span>
                        <span className="text-[10px] text-earth-brown/50 tracking-[0.15em] uppercase font-medium hidden sm:block">
                            A2 Desi Cow Ghee
                        </span>
                    </div>
                </a>

                {/* ── CENTER: Nav Links (desktop) ── */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href="#"
                            onClick={(e) => handleLinkClick(e, link.id)}
                            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md group ${
                                currentPage === link.id
                                    ? 'text-ghee-gold'
                                    : 'text-earth-brown hover:text-ghee-gold'
                            }`}
                        >
                            {link.label}
                            {/* Animated underline */}
                            <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-ghee-gold transition-all duration-300 rounded-full ${
                                currentPage === link.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                            }`} />
                        </a>
                    ))}
                </div>

                {/* ── RIGHT: Action Icons ── */}
                <div className="flex items-center gap-1">
                    <button
                        id="search-trigger-btn"
                        onClick={toggleSearch}
                        className="p-2.5 rounded-full hover:bg-earth-brown/8 transition-colors text-earth-brown hover:text-ghee-gold cursor-pointer"
                        aria-label="Search site"
                    >
                        <span className="material-symbols-outlined text-[22px]">search</span>
                    </button>
                    <button
                        id="user-trigger-btn"
                        onClick={toggleUser}
                        className="p-2.5 rounded-full hover:bg-earth-brown/8 transition-colors text-earth-brown hover:text-ghee-gold cursor-pointer"
                        aria-label="User Account"
                    >
                        <span className="material-symbols-outlined text-[22px]">person</span>
                    </button>
                    <button
                        id="cart-trigger-btn"
                        onClick={toggleCart}
                        className="p-2.5 rounded-full hover:bg-earth-brown/8 transition-colors text-earth-brown hover:text-ghee-gold relative cursor-pointer"
                        aria-label="Shopping bag"
                    >
                        <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
                        {cartCount > 0 && (
                            <span className="absolute top-1 right-1 w-4 h-4 bg-ghee-gold text-white text-[9px] rounded-full flex items-center justify-center font-bold leading-none">
                                {cartCount}
                            </span>
                        )}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-full hover:bg-earth-brown/8 transition-colors text-earth-brown cursor-pointer ml-1"
                        aria-label="Toggle Menu"
                    >
                        <span className="material-symbols-outlined text-[22px]">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="bg-warm-cream border-t border-earth-brown/10 px-6 py-4 flex flex-col gap-1 shadow-lg">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href="#"
                            onClick={(e) => handleLinkClick(e, link.id)}
                            className={`px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                                currentPage === link.id
                                    ? 'text-ghee-gold bg-ghee-gold/8 font-bold'
                                    : 'text-earth-brown hover:text-ghee-gold hover:bg-earth-brown/5'
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}
