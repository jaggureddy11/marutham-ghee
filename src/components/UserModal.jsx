import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function UserModal({ isOpen, onClose }) {
    const [isRegisterMode, setIsRegisterMode] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isRegisterMode ? "Registration Successful! Welcome to Marutham." : "Logged In Successfully!");
        onClose();
        setEmail('');
        setPassword('');
    };

    return (
        <div className="relative">
            {/* Backdrop */}
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-earth-brown/50 backdrop-blur-sm z-[100] cursor-pointer"
                />
            )}

            {/* Modal Body */}
            {isOpen && (
                <div className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none">
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className="w-full max-w-md bg-warm-cream p-6 md:p-8 border border-earth-brown/10 rounded-lg shadow-2xl pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-headline-md text-headline-md text-earth-brown font-bold" id="user-modal-title">
                                {isRegisterMode ? "Create Account" : "Sign In"}
                            </h4>
                            <button 
                                onClick={onClose}
                                className="p-2 hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>
                        
                        {/* Auth Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-label-sm text-xs text-earth-brown/80 mb-2 font-bold">Email Address</label>
                                <input 
                                    type="email" 
                                    required 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white border border-earth-brown/10 rounded-md p-3 font-body-md text-earth-brown focus:border-ghee-gold focus:ring-1 focus:ring-ghee-gold outline-none" 
                                    placeholder="name@domain.com" 
                                />
                            </div>
                            <div>
                                <label className="block font-label-sm text-xs text-earth-brown/80 mb-2 font-bold">Password</label>
                                <input 
                                    type="password" 
                                    required 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white border border-earth-brown/10 rounded-md p-3 font-body-md text-earth-brown focus:border-ghee-gold focus:ring-1 focus:ring-ghee-gold outline-none" 
                                    placeholder="••••••••" 
                                />
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-earth-brown text-warm-cream py-4 font-label-lg text-sm uppercase tracking-wider hover:bg-earth-brown/90 hover:scale-[1.01] active:scale-100 transition-all duration-300 cursor-pointer font-bold"
                            >
                                {isRegisterMode ? "Register" : "Sign In"}
                            </button>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <button 
                                onClick={() => setIsRegisterMode(!isRegisterMode)}
                                className="font-label-sm text-xs text-ghee-gold underline underline-offset-4 cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                {isRegisterMode ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
