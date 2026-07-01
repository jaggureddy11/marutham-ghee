import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import TiltCard from '../components/TiltCard';

export default function VedicProcess({ setCurrentPage }) {
    const containerRef = useRef(null);

    // Track scroll position of the pillars of purity section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end center"]
    });

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 18 }
        }
    };

    return (
        <main className="pt-24">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-linear hover:scale-110" 
                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiXqSVshZP02rGd3HA_aTNrt8Jnk-0EbIgC5XEPRrd1cz2mlAtPMTRzCO7GdwZQ8tLVHc8X0QWUjtRrowIAGO2PSX7wW0jpOHhPVJIAVjAaRcIVNPUOfI4FaK9lktDw1tWj-nqIXQjWSMu-gg7Njm2cr0whZxMN6SLgnstcsNlUtTYIdY48A3sPJxen58XxX7OI_XzpiJLZzdqHcd4dxriHEbSR-UpaJLl2x1DmVYqk3A_RoU3GzCcFOwEwcrNPp_15rfZrc8F2_uq')` }}
                    />
                    <div className="absolute inset-0 bg-black/45" />
                </div>
                
                <div className="relative z-10 text-center max-w-4xl px-margin-mobile">
                    <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.2em] mb-6 block font-bold"
                    >
                        Heritage Craftsmanship
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-display-lg text-4xl md:text-5xl text-white drop-shadow-lg mb-8 font-bold"
                    >
                        The Art of Bilona: A Sacred Journey from Milk to Liquid Gold
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <button 
                            onClick={() => {
                                const el = document.getElementById('process');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-ghee-gold text-earth-brown px-10 py-5 font-label-lg text-label-lg font-bold hover:bg-white hover:scale-105 transition-all duration-500 uppercase tracking-widest cursor-pointer rounded btn-shimmer"
                        >
                            Explore the Method
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-[1000px] mx-auto text-center">
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="material-symbols-outlined text-ghee-gold text-5xl mb-4">spa</span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-headline-lg text-3xl mb-8 text-earth-brown font-bold"
                >
                    Ancient Wisdom, Bottled with Integrity
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-body-lg text-body-lg text-earth-brown/85 leading-relaxed"
                >
                    In the Ayurvedic tradition, Ghee is more than just a culinary staple; it is <span className="italic text-earth-brown font-semibold">Tejas</span>—the fire that sustains life. The Bilona method is the ancient, hand-crafted process of creating Ghee that preserves its medicinal and nutritional properties. Unlike industrial extraction, Bilona respects the rhythm of nature, using slow churning to unlock the deep, nutty essence of pure A2 milk.
                </motion.p>
            </section>

            {/* Step-by-step Process Section */}
            <section className="py-24 bg-surface-container-low relative" id="process" ref={containerRef}>
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 relative z-10">
                        <div className="max-w-2xl">
                            <h2 className="font-headline-lg text-3xl text-earth-brown mb-4 font-bold">The Four Pillars of Purity</h2>
                            <p className="font-body-md text-sm text-earth-brown/70">A labor-intensive process that takes over 72 hours for a single batch of Vedic Ghee.</p>
                        </div>
                        <div className="text-ghee-gold font-display-lg text-3xl opacity-20 hidden md:block">01—04</div>
                    </div>
                    
                    {/* Horizontal scroll timeline connector */}
                    <div className="absolute top-[60%] left-8 right-8 h-[2px] bg-earth-brown/15 z-0 hidden lg:block pointer-events-none">
                        <motion.div 
                            style={{ scaleX, originX: 0 }}
                            className="h-full bg-ghee-gold"
                        />
                    </div>

                    <motion.div 
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10"
                    >
                        {/* Step 1 */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow cursor-pointer h-full"
                        >
                            <TiltCard className="p-8 h-full">
                                <span className="font-label-lg text-xs text-ghee-gold mb-6 font-bold uppercase tracking-wider block">Step 01</span>
                                <div 
                                    className="h-48 w-full mb-8 bg-cover bg-center rounded select-none" 
                                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0HNFAC1qvTydlt3MR70SHmzQWRizg4PB87ovbo_YvD8CXtiJCCjzy2xot41SYsL-DAzT6VfTuKiVgYZkFf6cmLW7ZLjC9YF33hOOkIglKw8kYMmIgA942ONuKx5hq3CMLLG6U_HmsMFjmyc7S_kHt9TRrpf1cQnIayjB5_3yIqNI4nmGiQcfvKOZ9hCwie1BlPj31dJG73I_WBaoIup5-4d8A_6YOYtYM5RPt5kmp58K7FSUqUsj-wNa-76F9Psqpw-cyMZaWGol4')` }}
                                />
                                <h3 className="font-headline-md text-lg mb-4 font-bold">Grass-fed Milk</h3>
                                <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                    We source only pure A2 milk from free-grazing Gir and Hallikar cows, raised on organic pastures under the warm Indian sun.
                                </p>
                            </TiltCard>
                        </motion.div>
                        {/* Step 2 */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow cursor-pointer h-full"
                        >
                            <TiltCard className="p-8 h-full">
                                <span className="font-label-lg text-xs text-ghee-gold mb-6 font-bold uppercase tracking-wider block">Step 02</span>
                                <div 
                                    className="h-48 w-full mb-8 bg-cover bg-center rounded select-none" 
                                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYapaaKa4PtPNisp2sshAnjGk48hpu1sV2Go8fzJK70-ubF8FXgHKtOhRdVTs0oHaGU5xK43QJ49R4-vzxzSd4o7nF2b-dJpBWZMpxIhEe8cp4aRL10V7a1-whmZkD0WrKVlN3UqKXODjFxaclup0wk95Dv7Kcj7roNDAFfYXjWDPln_OxrLdawdeqpbWDEn9-OrLDuHsqsPVNyjA_EftN5Q2tpLyJzIeR_7jhfBtl4It3q2dQllE3qvJsVd2VGs2K3_iNqX8DEnD3')` }}
                                />
                                <h3 className="font-headline-md text-lg mb-4 font-bold">Whole Curd Culturing</h3>
                                <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                    Unlike cream-based ghee, our milk is first boiled and set to curd overnight using natural cultures to develop a rich probiotic profile.
                                </p>
                            </TiltCard>
                        </motion.div>
                        {/* Step 3 */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow cursor-pointer h-full"
                        >
                            <TiltCard className="p-8 h-full">
                                <span className="font-label-lg text-xs text-ghee-gold mb-6 font-bold uppercase tracking-wider block">Step 03</span>
                                <div 
                                    className="h-48 w-full mb-8 bg-cover bg-center rounded select-none" 
                                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJytdUTKPiVoRCMdcH58v_jRIAphYGKVSxsQrAzxQUa6-Wiy53f0Y3SjFkswinaAIeLnb5HAXPMX2NumNQDIwARAj9n_Z-TwFNDiK6QeyYp7GJG0h92-5JUip-IJogwj1LCY8l6Uei0Lb8tG2Bp6zy1-tosR4O0Ahq9Zhk_57hoKPnrCofjo_OqjpTERjwnAiOjsymcUPwXiwYSU1k3cnChUGcLl6pRPDcDd3RZfJNCx_YYdZFbTkIFbmR9t_-DG9gXocMuFrxKDJ2')` }}
                                />
                                <h3 className="font-headline-md text-lg mb-4 font-bold">Bi-directional Churning</h3>
                                <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                    The curd is hand-churned in two directions using a wooden Bilona, gently separating the butter (Makkhan) without heating it.
                                </p>
                            </TiltCard>
                        </motion.div>
                        {/* Step 4 */}
                        <motion.div 
                            variants={itemVariants}
                            className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow cursor-pointer h-full"
                        >
                            <TiltCard className="p-8 h-full">
                                <span className="font-label-lg text-xs text-ghee-gold mb-6 font-bold uppercase tracking-wider block">Step 04</span>
                                <div 
                                    className="h-48 w-full mb-8 bg-cover bg-center rounded select-none" 
                                    style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsv_D42Zwh-LxGy5VKp_bmtLgrmYkqAgsAxM_ps1x_MwKW7JrXPaU-VCtYQrGz8XMeaICRe8YgbDsSgrGx2oyXLAVjtisXucn4ZURye8gN2ah_PIq02-TQnOpZD3tXAytEKo-3NhY7q9wbCbtuBuYm2e32t-rsjW6dUsZzAvHtJLVTf5jz7NNmGio9zG3Pe9e4UTKptWOflfghYLMfhyMkWG6dPrgQlCGOgqGKIpPOX56IqAAakeUBnmUXpxCOCTq59VCj5WmLGTJt')` }}
                                />
                                <h3 className="font-headline-md text-lg mb-4 font-bold">Slow Fire Clarifying</h3>
                                <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                    The butter is slowly heated on a low wood fire (Chulha) until the water evaporates, leaving behind pure, golden, nutty-scented Ghee.
                                </p>
                            </TiltCard>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Scientific vs. Traditional Comparison */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-headline-lg text-3xl text-earth-brown mb-4 font-bold"
                    >
                        The Purity Standard
                    </motion.h2>
                    <p className="font-body-md text-sm text-earth-brown/70">Why the traditional Bilona method transcends modern industrial processing.</p>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="overflow-x-auto rounded-lg border border-earth-brown/10 shadow-lg bg-white"
                >
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-ghee-gold bg-earth-brown/5">
                                <th className="p-6 text-left font-headline-md text-sm text-earth-brown w-1/3 font-bold">Feature</th>
                                <th className="p-6 text-left font-headline-md text-sm text-earth-brown/70">Industrial Cream Ghee</th>
                                <th className="p-6 text-left font-headline-md text-sm text-ghee-gold font-bold">Marutham Bilona Ghee</th>
                            </tr>
                        </thead>
                        <tbody className="font-body-md text-xs text-earth-brown">
                            {[
                                { feat: "Raw Material", ind: "Milk Cream (Malai)", mar: "Whole A2 Curd (Makkhan)" },
                                { feat: "Production Time", ind: "Minutes", mar: "72+ Hours" },
                                { feat: "Digestibility", ind: "Heavy on stomach", mar: "Extremely light, Ayurvedic Grade" },
                                { feat: "Nutrient Profile", ind: "Moderate vitamins", mar: "High Omega-3, K2 & Butyric Acid" }
                            ].map((row, idx) => (
                                <tr key={idx} className="border-b border-earth-brown/5 hover:bg-earth-brown/5 transition-colors">
                                    <td className="p-6 font-bold">{row.feat}</td>
                                    <td className="p-6 text-earth-brown/70">{row.ind}</td>
                                    <td className="p-6 font-bold text-ghee-gold">{row.mar}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </section>
        </main>
    );
}
