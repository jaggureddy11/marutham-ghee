import React, { useState } from 'react';

export default function Footer({ setCurrentPage }) {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! ${email} has been added to our newsletter.`);
        setEmail('');
    };

    const handleLink = (e, pageId) => {
        e.preventDefault();
        setCurrentPage(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-warm-cream dark:bg-deep-brown border-t border-earth-brown/10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="col-span-1">
                    <h4 className="font-display-lg text-headline-lg text-ghee-gold mb-6">Marutham</h4>
                    <p className="font-body-md text-body-md text-earth-brown dark:text-warm-cream/70 mb-8 leading-relaxed">
                        Honoring the ancient traditions of Vedic India through pure, artisanal dairy and lifestyle essentials.
                    </p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center text-earth-brown dark:text-warm-cream/70 hover:text-ghee-gold transition-colors" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center text-earth-brown dark:text-warm-cream/70 hover:text-ghee-gold transition-colors" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="font-label-lg text-label-lg text-earth-brown dark:text-warm-cream mb-6 uppercase tracking-widest">Shop</h5>
                    <ul className="space-y-4">
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#" onClick={(e) => handleLink(e, 'home')}>A2 Desi Ghee</a></li>
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#" onClick={(e) => handleLink(e, 'purity-guide')}>Purity Guide</a></li>
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#" onClick={(e) => handleLink(e, 'vedic-process')}>Bilona Churning</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-label-lg text-label-lg text-earth-brown dark:text-warm-cream mb-6 uppercase tracking-widest">Quick Links</h5>
                    <ul className="space-y-4">
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#" onClick={(e) => handleLink(e, 'pregnancy-benefits')}>Pregnancy Care</a></li>
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#" onClick={(e) => handleLink(e, 'beauty-benefits')}>Skincare Benefits</a></li>
                        <li><a className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold underline underline-offset-4 transition-all" href="#">Shipping & Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-label-lg text-label-lg text-earth-brown dark:text-warm-cream mb-6 uppercase tracking-widest">Newsletter</h5>
                    <p className="font-label-sm text-label-sm text-earth-brown/70 dark:text-warm-cream/70 mb-6">Receive wisdom and offers directly to your inbox.</p>
                    <form className="flex flex-col gap-2 mb-8" onSubmit={handleSubscribe}>
                        <input 
                            className="bg-transparent border-b border-earth-brown/20 py-2 font-label-sm focus:border-ghee-gold outline-none text-earth-brown transition-colors" 
                            placeholder="Email Address" 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="text-left font-label-lg text-ghee-gold mt-2 flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer" type="submit">
                            Subscribe <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </form>
                    <div className="mt-4 pt-4 border-t border-earth-brown/10">
                        <h5 className="font-label-lg text-label-lg text-earth-brown dark:text-warm-cream mb-3 uppercase tracking-widest">Need Help?</h5>
                        <a href="https://wa.me/918088148096" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-earth-brown/70 dark:text-warm-cream/70 hover:text-ghee-gold transition-colors font-label-sm">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="font-bold">+91 8088148096</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-20 border-t border-earth-brown/5 pt-8 text-center px-margin-mobile">
                <p className="font-label-sm text-label-sm text-earth-brown/50">© 2026 Marutham Vedic Essentials. Pure A2 Desi Cow Ghee.</p>
            </div>
        </footer>
    );
}
