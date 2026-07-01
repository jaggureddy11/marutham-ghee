import React from 'react';
import { motion } from 'motion/react';

export default function UserDashboard({ setCurrentPage }) {
    // Parse the JWT to get the user's name
    let userName = "User";
    try {
        const token = localStorage.getItem('marutham_jwt');
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.name) {
                userName = payload.name;
            } else if (payload.email) {
                userName = payload.email.split('@')[0];
            }
        }
    } catch (e) {
        console.error("Error parsing JWT for dashboard:", e);
    }

    const handleLogout = () => {
        localStorage.removeItem('marutham_jwt');
        alert("Logged out successfully");
        setCurrentPage('home');
    };

    return (
        <div className="pt-24 min-h-screen px-6 max-w-7xl mx-auto mb-20">
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-display-lg text-earth-brown font-bold tracking-tight">Welcome, {userName}</h1>
                <button 
                    onClick={handleLogout}
                    className="text-sm font-label-md bg-earth-brown/10 text-earth-brown hover:bg-earth-brown hover:text-warm-cream transition-colors px-6 py-2 rounded-md"
                >
                    Log Out
                </button>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10 flex flex-col items-start h-full">
                    <h3 className="font-bold text-xl mb-2 text-earth-brown font-display-md">Recent Orders</h3>
                    <p className="text-sm text-earth-brown/70 font-body-md mb-6 flex-grow">You have no recent orders. Discover the pure taste of our Vedic A2 Desi Cow Ghee today.</p>
                    <button 
                        onClick={() => setCurrentPage('home')} 
                        className="bg-earth-brown text-warm-cream px-6 py-3 rounded-md hover:bg-earth-brown/90 transition-colors font-label-lg uppercase tracking-wider text-sm font-bold btn-shimmer relative overflow-hidden"
                    >
                        Start Shopping
                    </button>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-earth-brown/10">
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="font-bold text-xl text-earth-brown font-display-md">Profile Details</h3>
                        <button className="p-2 hover:bg-warm-cream rounded-full text-earth-brown/60 hover:text-ghee-gold transition-colors">
                            <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                    </div>
                    
                    <div className="space-y-4">
                        <div>
                            <p className="text-xs font-label-lg uppercase tracking-wider text-earth-brown/50">Name</p>
                            <p className="text-md font-bold text-earth-brown">{userName}</p>
                        </div>
                        <div className="pt-2 border-t border-earth-brown/10">
                            <p className="text-xs font-label-lg uppercase tracking-wider text-earth-brown/50 mt-2">Saved Addresses</p>
                            <p className="text-sm text-earth-brown/70 italic mt-1">No addresses saved yet.</p>
                            <button className="text-ghee-gold text-sm font-bold hover:underline mt-2 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[16px]">add</span>
                                Add Address
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
