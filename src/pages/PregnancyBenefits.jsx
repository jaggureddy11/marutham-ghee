import React from 'react';
import { motion } from 'motion/react';
import TiltCard from '../components/TiltCard';

export default function PregnancyBenefits({ setCurrentPage }) {
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
            <header className="relative min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover select-none" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTT6pmhQV8rrIPVTzmGyptz8UA_7BNMFkClDSPG7fdm9O2QYTCsl9XoVsrp79Zvoes8EpdMxop4S7CJvm6k7_2YaXBSznCqjd5rtPNW0D5kfsSRAOvI_RPHJtIxh_YdIvoqXorA44_5LouznJoq1vpE8ni5bEgl5gP5aef4YSUxRtyaSVVT5DvEeNfPsn5HndAV53-umMoodRJt28gRSASnWf9sOqXzfeWTZalOAdclrxep6kmHfdb2u5UurhU2AhyFjGEm4X6q4Lf"
                        alt="Pregnancy and maternal health"
                    />
                    <div className="absolute inset-0 bg-white/20 backdrop-brightness-75 hero-gradient-pregnancy" />
                </div>
                
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="font-label-sm text-xs text-ghee-gold block mb-4 font-bold uppercase tracking-wider">Ayurvedic Prenatal Wisdom</span>
                        <h1 className="font-display-lg text-4xl md:text-5xl text-earth-brown mb-6 leading-tight font-bold">
                            Nurturing Motherhood <br/>with Marutham
                        </h1>
                        <p className="font-body-lg text-body-lg text-earth-brown/80 mb-8 max-w-lg leading-relaxed">
                            Embrace the ancient tradition of Vedic nourishment. Discover how pure A2 Desi Cow Ghee serves as a vital companion for a healthy, radiant pregnancy journey.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() => setCurrentPage('home')}
                                className="bg-ghee-gold text-earth-brown px-10 py-4 font-label-lg text-label-lg rounded-full hover:bg-opacity-95 hover:scale-105 active:scale-100 transition-all subtle-shadow uppercase tracking-widest cursor-pointer font-bold"
                            >
                                Explore Ghee Shop
                            </button>
                            <button 
                                onClick={() => {
                                    const el = document.getElementById('benefits');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="border border-earth-brown text-earth-brown px-10 py-4 font-label-lg text-label-lg rounded-full hover:bg-earth-brown hover:text-warm-cream hover:scale-105 active:scale-100 transition-all uppercase tracking-widest cursor-pointer font-bold"
                            >
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Core Benefits - Bento Grid Style */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="benefits">
                <div className="text-center mb-16">
                    <h2 className="font-display-lg text-3xl text-earth-brown mb-4 font-bold">Benefits of Marutham Ghee During Pregnancy</h2>
                    <div className="w-24 h-1 bg-ghee-gold mx-auto opacity-50" />
                </div>
                
                <motion.div 
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
                >
                    {/* Large Focus Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-8 bg-white rounded-xl border border-earth-brown/5 subtle-shadow group transition-all duration-300 cursor-pointer"
                    >
                        <TiltCard className="p-12 h-full">
                            <div className="flex items-start gap-8 flex-col lg:flex-row h-full justify-center">
                                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                                    <span className="material-symbols-outlined text-earth-brown text-3xl">vital_signs</span>
                                </div>
                                <div>
                                    <h3 className="font-headline-md text-2xl text-earth-brown mb-4 font-bold">Healthy Weight &amp; Vital Energy</h3>
                                    <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                        Marutham ghee provides high-quality essential fats that aid in healthy weight gain for the mother while ensuring a consistent supply of metabolic energy throughout the three trimesters.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Tall Side Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-leaf-green/5 rounded-xl border border-leaf-green/10 subtle-shadow group transition-all duration-300 cursor-pointer"
                    >
                        <TiltCard className="p-12 h-full bg-leaf-green/5">
                            <span className="material-symbols-outlined text-leaf-green text-4xl mb-6">eco</span>
                            <h3 className="font-headline-md text-xl text-earth-brown mb-4 font-bold">Antioxidant Rich</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                Natural antioxidants protect the body's cellular integrity, boosting immunity for both mother and developing child during critical stages.
                            </p>
                        </TiltCard>
                    </motion.div>

                    {/* Vitamins Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-white rounded-xl border border-earth-brown/5 subtle-shadow group transition-all duration-300 cursor-pointer"
                    >
                        <TiltCard className="p-12 h-full">
                            <span className="material-symbols-outlined text-ghee-gold text-4xl mb-6">medication</span>
                            <h3 className="font-headline-md text-xl text-earth-brown mb-2 font-bold">Vital Nutrients</h3>
                            <p className="font-body-md text-xs text-earth-brown/70 mb-4">A complete source of fat-soluble vitamins and Omega-3.</p>
                            <div className="flex flex-wrap gap-2">
                                {["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K", "Omega-3"].map((vit, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-warm-cream border border-earth-brown/10 text-[10px] rounded-full uppercase font-bold text-earth-brown">
                                        {vit}
                                    </span>
                                ))}
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Detox & Delivery Card */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-8 bg-secondary-container/30 rounded-xl border border-earth-brown/5 subtle-shadow group transition-all duration-300 cursor-pointer"
                    >
                        <TiltCard className="p-12 h-full bg-secondary-container/30">
                            <div className="grid md:grid-cols-2 gap-8 h-full items-center">
                                <div>
                                    <h3 className="font-headline-md text-lg text-earth-brown mb-4 flex items-center gap-2 font-bold">
                                        <span className="material-symbols-outlined text-earth-brown">sanitizer</span>
                                        Detoxification
                                    </h3>
                                    <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                        Assists the digestive system in flushing out toxins, preventing bloating and ensuring optimal nutrient absorption.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-headline-md text-lg text-earth-brown mb-4 flex items-center gap-2 font-bold">
                                        <span className="material-symbols-outlined text-earth-brown">child_care</span>
                                        Smooth Delivery
                                    </h3>
                                    <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                        Traditional wisdom suggests ghee provides lubrication that may assist in a more natural and fluid labor process.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </motion.div>
            </section>

            {/* Baby's Development Section */}
            <section className="bg-earth-brown py-24 relative overflow-hidden text-warm-cream">
                <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <div className="w-full h-full bg-[radial-gradient(circle,rgba(212,175,55,1)_0%,rgba(0,0,0,0)_70%)]" />
                </div>
                
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 0.8 }}
                                className="relative rounded-2xl overflow-hidden subtle-shadow group cursor-pointer"
                            >
                                <img 
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-[2000ms] group-hover:scale-105 select-none" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjJYicd5V3pdFPmZJc6_gtrqKbGOo-uH3PilP9PJbAu0KVcsemGiNtzyDbp8tvStCxsKtSWLPF3h7E4q8kRDKWXH2bS8b11cqrjnfgfLfrSjZ0mVhd-VQH_wQZmKB4nOQ72zyv1Yc3WpUEIxQDiv_Xrqp0XnaJReNQl2morbEQ1OaRlc5RELi3Y_VzH0bix5pEyfUFTDLHixp_r9cfKmIxTfnsqxYXRCDAi7D5gxR2OZl6gvJ8ydIB3IH4r4A7QxOXXhVMb0FFFlhg"
                                    alt="Baby hand holding mother's finger"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-earth-brown/60 to-transparent" />
                                <div className="absolute bottom-8 left-8">
                                    <p className="font-display-lg text-2xl text-white font-bold">Nurturing the Future</p>
                                </div>
                            </motion.div>
                        </div>
                        
                        <div className="order-1 md:order-2">
                            <span className="font-label-sm text-xs text-ghee-gold block mb-4 font-bold uppercase tracking-wider">Prenatal Care</span>
                            <h2 className="font-display-lg text-3xl md:text-4xl mb-8 font-bold">Fueling Your Baby's Foundation</h2>
                            
                            <motion.div 
                                variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-ghee-gold/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-ghee-gold">psychology</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-lg mb-2 font-bold">Brain Development</h4>
                                        <p className="font-body-md text-sm text-warm-cream/70 leading-relaxed">
                                            Rich in Docosahexaenoic acid (DHA), our Vedic ghee supports the cognitive growth and neural pathways of your developing baby.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-ghee-gold/30 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-ghee-gold">fitness_center</span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-lg mb-2 font-bold">Bone Strength</h4>
                                        <p className="font-body-md text-sm text-warm-cream/70 leading-relaxed">
                                            Vitamin D and Vitamin K2 work synergistically to direct calcium to the bones, forming a solid, healthy skeletal foundation.
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
