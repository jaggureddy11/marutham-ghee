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
                        <a className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center text-earth-brown dark:text-warm-cream/70 hover:text-ghee-gold transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg">public</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center text-earth-brown dark:text-warm-cream/70 hover:text-ghee-gold transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg">chat_bubble</span>
                        </a>
                        <a className="w-10 h-10 rounded-full border border-earth-brown/20 flex items-center justify-center text-earth-brown dark:text-warm-cream/70 hover:text-ghee-gold transition-colors" href="#">
                            <span className="material-symbols-outlined text-lg">linked_camera</span>
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
                    <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
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
                </div>
            </div>
            <div className="mt-20 border-t border-earth-brown/5 pt-8 text-center px-margin-mobile">
                <p className="font-label-sm text-label-sm text-earth-brown/50">© 2026 Marutham Vedic Essentials. Pure A2 Desi Cow Ghee.</p>
            </div>
        </footer>
    );
}
