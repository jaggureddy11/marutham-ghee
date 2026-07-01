import React from 'react';
import { motion } from 'motion/react';
import TiltCard from '../components/TiltCard';

export default function BeautyBenefits({ setCurrentPage }) {
    const listVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
            <section className="relative min-h-[85vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        alt="Marutham Ghee Beauty" 
                        className="w-full h-full object-cover opacity-90 select-none" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2hzYTIn3K-WLzF64ANOslwL-dM-sdL_GokgSqBxotHt1FLZX4nh00bH1yxGc2LAN7cgzbocd_8H-NtU2sQha_ACNJcN1LfTbCJMkDarfgDb1oZkdosaNX6-m4pBV8Jn4s3e8QxKh1Cx6W0dN6OC8ChWdETl7PmoQjA4zuwYjmigJJ4bcnaLvzvOmFAv-u36CFIr9nou4MDq7nT9Qzo4XXXBc7SSd8ghnrM4koxeqQZ_N_Rh29YUUeH1sI-h0-9WmkZz7w0nqz15KL"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-warm-cream via-warm-cream/50 to-transparent" />
                </div>
                
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <span className="font-label-lg text-label-lg text-ghee-gold mb-4 block tracking-[0.2em] uppercase font-bold">Vedic Rituals</span>
                        <h1 className="font-display-lg text-4xl md:text-5xl text-earth-brown mb-6 leading-[1.1] font-bold">Ghee for Radiant <br/>Skin &amp; Hair</h1>
                        <p className="font-body-lg text-body-lg text-earth-brown/80 mb-10 max-w-lg leading-relaxed">
                            Discover the ancient secret of Shata Dhauta Ghrita—ghee washed a hundred times—and other timeless Ayurvedic rituals for a natural, luminous glow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setCurrentPage('home')}
                                className="bg-ghee-gold text-white px-8 py-4 font-label-lg text-label-lg font-bold hover:bg-earth-brown transition-colors duration-500 shadow-lg cursor-pointer"
                            >
                                EXPLORE BEAUTY RANGE
                            </button>
                            <button 
                                onClick={() => {
                                    const el = document.getElementById('skin');
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="border border-earth-brown text-earth-brown px-8 py-4 font-label-lg text-label-lg font-bold hover:bg-earth-brown hover:text-white transition-colors duration-500 cursor-pointer"
                            >
                                LEARN THE RITUALS
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: Benefits for Skin */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="skin">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-3xl text-earth-brown mb-4 font-bold">The Nectar for Skin</h2>
                    <div className="w-20 h-0.5 bg-ghee-gold mx-auto" />
                </div>
                
                <motion.div 
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
                >
                    {/* Card 1 */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-10 h-full">
                            <div className="mb-6">
                                <span className="material-symbols-outlined text-[40px] text-ghee-gold">spa</span>
                            </div>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Natural Moisturizer</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed mb-6">
                                Rich in Omega-3 fatty acids, Ghee penetrates deep into skin layers, providing hydration that lasts longer than commercial lotions.
                            </p>
                            <span className="font-label-sm text-xs text-ghee-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Discover More</span>
                        </TiltCard>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-10 h-full">
                            <div className="mb-6">
                                <span className="material-symbols-outlined text-[40px] text-ghee-gold">face_6</span>
                            </div>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Lip Care Ritual</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed mb-6">
                                Apply a drop of pure A2 ghee before bed to heal chapped lips and restore their natural pink hue overnight.
                            </p>
                            <span className="font-label-sm text-xs text-ghee-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Discover More</span>
                        </TiltCard>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-10 h-full">
                            <div className="mb-6">
                                <span className="material-symbols-outlined text-[40px] text-ghee-gold">auto_awesome</span>
                            </div>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Timeless Vitality</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed mb-6">
                                The antioxidants in Vedic ghee combat oxidative stress, helping to reduce the appearance of fine lines and early wrinkles.
                            </p>
                            <span className="font-label-sm text-xs text-ghee-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Discover More</span>
                        </TiltCard>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-10 h-full">
                            <div className="mb-6">
                                <span className="material-symbols-outlined text-[40px] text-ghee-gold">visibility</span>
                            </div>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Under-Eye Rescue</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed mb-6">
                                Gently massage under the eyes to stimulate circulation and lighten stubborn dark circles and fatigue.
                            </p>
                            <span className="font-label-sm text-xs text-ghee-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Discover More</span>
                        </TiltCard>
                    </motion.div>

                    {/* Card 5 */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-white rounded-lg border border-earth-brown/5 ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-10 h-full">
                            <div className="mb-6">
                                <span className="material-symbols-outlined text-[40px] text-ghee-gold">flare</span>
                            </div>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Glow Elixir</h3>
                            <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed mb-6">
                                Ghee works as a carrier, helping botanical actives reach deeper into the dermis for an inner-lit complexion.
                            </p>
                            <span className="font-label-sm text-xs text-ghee-gold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Discover More</span>
                        </TiltCard>
                    </motion.div>

                    {/* Mask Recipe */}
                    <motion.div 
                        variants={itemVariants}
                        className="bg-earth-brown rounded-lg flex flex-col justify-between text-warm-cream cursor-pointer border border-earth-brown/5"
                    >
                        <TiltCard className="p-10 h-full bg-earth-brown flex flex-col justify-between">
                            <div>
                                <span className="font-label-lg text-xs text-ghee-gold mb-2 block tracking-widest font-bold">RITUAL OF THE MONTH</span>
                                <h3 className="font-headline-md text-xl mb-6 font-bold">The Ubtan Mask</h3>
                                <p className="font-body-md text-sm opacity-85 italic mb-8 leading-relaxed">
                                    "Mix 1 tbsp Besan, 1 tsp Marutham Ghee, and 1 tbsp raw milk. Apply for 15 mins for instant radiance."
                                </p>
                            </div>
                            <button 
                                onClick={() => setCurrentPage('home')}
                                className="text-ghee-gold font-label-lg text-xs font-bold border-b border-ghee-gold w-fit pb-1 hover:text-white transition-colors cursor-pointer text-left"
                            >
                                GET INGREDIENTS
                            </button>
                        </TiltCard>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 2: Benefits for Hair */}
            <section className="bg-surface-container-low py-24">
                <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="aspect-[4/5] relative overflow-hidden rounded-xl border border-earth-brown/5 subtle-shadow"
                            >
                                <img 
                                    className="w-full h-full object-cover select-none" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuApS7e1GSgPh7KY8vJ9B4gBv4O6JZyHcRQ3YiEHyDpINemXflrP-O16TatX8cc7qsryibcynWB2KkBwtWsAeW5iW8v4928vTTe44GgCmQp3o5_Tt2iqxiw5aypPgi8bHA71lKs6oq18eyY-uEhnncx5ylCFdhsVCL-QSg6yNEyN0_W24ytRB49aiMX5ibJm0ZEbD9o2UwQgkWKAsR0rR0EmDMppMU8rrPi7SoMZZFGzuRq4_2D4_8nBkG3hIM4HGxlXTVL4HHBSPIwL"
                                    alt="Cascading healthy hair"
                                />
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-10 -right-10 bg-white p-8 hidden md:block max-w-[280px] rounded-lg border border-earth-brown/10 shadow-lg pointer-events-none"
                            >
                                <p className="font-body-md text-xs italic text-earth-brown/70 leading-relaxed">"My hair has never felt softer. The transition to natural ghee masks changed everything."</p>
                                <p className="font-label-lg text-sm mt-4 text-ghee-gold font-bold">— Amala V.</p>
                            </motion.div>
                        </div>
                        
                        <div className="w-full lg:w-1/2">
                            <span className="font-label-lg text-label-lg text-ghee-gold mb-4 block tracking-[0.2em] uppercase font-bold">Hair Alchemy</span>
                            <h2 className="font-headline-lg text-3xl text-earth-brown mb-8 font-bold">Lustrous Crowns with Vedic Wisdom</h2>
                            
                            <motion.div 
                                variants={listVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <span className="font-display-lg text-3xl text-ghee-gold/30 shrink-0 font-bold">01</span>
                                    <div>
                                        <h4 className="font-headline-md text-lg mb-2 font-bold">Accelerated Growth</h4>
                                        <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                            Massaging warm ghee into the scalp stimulates follicles and improves blood circulation, encouraging faster and healthier hair growth.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="flex gap-6">
                                    <span className="font-display-lg text-3xl text-ghee-gold/30 shrink-0 font-bold">02</span>
                                    <div>
                                        <h4 className="font-headline-md text-lg mb-2 font-bold">Deep Conditioning</h4>
                                        <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                            Acts as a powerful conditioning agent that hydrates dry, frizzy shafts, restoring natural elasticity and preventing split ends.
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
