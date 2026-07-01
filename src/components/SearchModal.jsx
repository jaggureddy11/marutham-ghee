import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const SEARCH_INDEX = [
    { title: "Gold Label Reserve A2 Desi Cow Ghee", type: "Product", desc: "Our signature slow-clarified Bilona Ghee.", link: "home" },
    { title: "Traditional Bilona Churning Process", type: "Process", desc: "Rigveda-guided wood-fire curd churning process.", link: "vedic-process" },
    { title: "Ghee Purity Checks & Traditional Tests", type: "Purity", desc: "How to run the Palm, Heat, Smell and Iodine tests in your kitchen.", link: "purity-guide" },
    { title: "Maternal Health & Pregnancy Care Benefits", type: "Benefits", desc: "Ghee benefits for health, vitality, and pregnancy trimesters.", link: "pregnancy-benefits" },
    { title: "Ayurvedic Skincare & Natural Beauty", type: "Benefits", desc: "How to use ghee for glowing skin, soft lips, and hair rejuvenation.", link: "beauty-benefits" }
];

export default function SearchModal({ isOpen, onClose, setCurrentPage }) {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 150);
        } else {
            setQuery('');
        }
    }, [isOpen]);

    const matches = query.trim() ? SEARCH_INDEX.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
    ) : [];

    const handleResultClick = (e, linkId) => {
        e.preventDefault();
        setCurrentPage(linkId);
        onClose();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            {/* Backdrop */}
            {isOpen && (
                <motion.div 
                    id="search-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-earth-brown/60 backdrop-blur-md z-[100] cursor-pointer"
                />
            )}

            {/* Modal Body */}
            {isOpen && (
                <div className="fixed inset-0 z-[101] flex items-start justify-center pt-24 px-4 pointer-events-none">
                    <motion.div 
                        initial={{ scale: 0.95, opacity: 0, y: -20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: -20 }}
                        transition={{ type: "spring", duration: 0.4 }}
                        className="w-full max-w-2xl bg-warm-cream p-6 md:p-8 border border-earth-brown/10 rounded-lg shadow-2xl pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-headline-md text-headline-md text-earth-brown font-bold">Search Marutham</h4>
                            <button 
                                id="search-close-btn"
                                onClick={onClose}
                                className="p-2 hover:opacity-70 transition-opacity cursor-pointer flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined text-2xl">close</span>
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative mb-6">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-earth-brown/40">search</span>
                            <input 
                                id="search-input-field"
                                ref={inputRef}
                                type="text" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-white border border-earth-brown/10 rounded-md py-4 pl-12 pr-4 font-body-md text-earth-brown focus:border-ghee-gold focus:ring-1 focus:ring-ghee-gold outline-none" 
                                placeholder="Search articles, guides, benefits..." 
                            />
                        </div>

                        {/* Search Results */}
                        <div className="max-h-60 overflow-y-auto space-y-3">
                            {!query.trim() ? (
                                <p className="font-label-sm text-center text-earth-brown/40 py-6">Type to search...</p>
                            ) : matches.length === 0 ? (
                                <p className="font-label-sm text-center text-earth-brown/50 py-6">No matching results found.</p>
                            ) : (
                                matches.map((item, idx) => (
                                    <motion.a 
                                        key={idx}
                                        href="#" 
                                        onClick={(e) => handleResultClick(e, item.link)}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="block bg-white hover:bg-ghee-gold/10 p-4 border border-earth-brown/5 rounded-md transition-colors"
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <h6 className="font-label-lg text-sm text-earth-brown font-bold">{item.title}</h6>
                                            <span className="bg-ghee-gold/20 text-earth-brown font-label-sm text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">{item.type}</span>
                                        </div>
                                        <p className="font-body-md text-xs text-earth-brown/70">{item.desc}</p>
                                    </motion.a>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
