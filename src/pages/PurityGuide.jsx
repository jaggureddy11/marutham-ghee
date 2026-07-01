import React from 'react';
import { motion } from 'motion/react';
import TiltCard from '../components/TiltCard';
import InteractiveLab from '../components/InteractiveLab';

export default function PurityGuide({ setCurrentPage }) {
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
            <section className="relative h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div 
                        className="w-full h-full bg-cover bg-center" 
                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcquNR0GOdDAT4LfFejQTzrFVYLvEBmyaaITO8K4aq-EOMUs0F64Z1UDOui2yYFKCAHewnxIpWWGtLHmBk9UMSxlKV-lw0QdGezoxcPZDoLrJH-WOSbRjbNgHVZBtcTZhLYVqRERPlKOQPUPMhTtiuXsFPBxK8lmQMJSCnw3TXUli8ETUXQS5BmuqgZR6xIl5AlFgZUweeO_srZWkzKlN9x05AWgFuoAezwb9dVVxm25eLjZqZ2EsQWKjFHCoMH45-C5ni06fB9yWP')` }}
                    />
                    <div className="absolute inset-0 bg-earth-brown/30 backdrop-brightness-75" />
                </div>
                
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-white">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-label-lg text-label-lg uppercase tracking-[0.2em] mb-4 block text-ghee-gold font-bold"
                    >
                        Vedic Wisdom
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="font-display-lg text-4xl md:text-5xl leading-tight mb-6 max-w-3xl font-bold"
                    >
                        Kitchen Hacks: How to Check Ghee Purity
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="font-body-lg text-body-lg max-w-xl opacity-90 leading-relaxed"
                    >
                        In an age of industrial processing, authentic A2 Desi Cow Ghee is a rarity. Learn the traditional methods to identify the liquid gold in your kitchen.
                    </motion.p>
                </div>
            </section>

            {/* Purity Hacks Bento Grid */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-3xl text-earth-brown mb-4 font-bold">6 Traditional Tests</h2>
                    <div className="w-16 h-0.5 bg-ghee-gold mx-auto" />
                </div>
                
                <motion.div 
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-24"
                >
                    {/* Method 1: Palm */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-8 bg-white border border-earth-brown/5 rounded-lg ambient-shadow transition-all duration-300 group cursor-pointer"
                    >
                        <TiltCard className="p-8 md:p-12 h-full">
                            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                                <div className="flex-1">
                                    <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 01</span>
                                    <h3 className="font-headline-md text-2xl mb-4 group-hover:text-ghee-gold transition-colors font-bold">The Palm Method</h3>
                                    <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                        Take a small teaspoon of ghee in your palm. Pure ghee will naturally melt within seconds purely from your body heat.
                                    </p>
                                    <div className="bg-ghee-gold/5 p-4 border-l-2 border-ghee-gold">
                                        <span className="font-label-sm text-xs italic text-earth-brown">Vedic Note: Pure A2 ghee has a melting point slightly below human body temperature.</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 aspect-square overflow-hidden bg-warm-cream rounded">
                                    <img 
                                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 select-none" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcquNR0GOdDAT4LfFejQTzrFVYLvEBmyaaITO8K4aq-EOMUs0F64Z1UDOui2yYFKCAHewnxIpWWGtLHmBk9UMSxlKV-lw0QdGezoxcPZDoLrJH-WOSbRjbNgHVZBtcTZhLYVqRERPlKOQPUPMhTtiuXsFPBxK8lmQMJSCnw3TXUli8ETUXQS5BmuqgZR6xIl5AlFgZUweeO_srZWkzKlN9x05AWgFuoAezwb9dVVxm25eLjZqZ2EsQWKjFHCoMH45-C5ni06fB9yWP"
                                        alt="Palm test"
                                    />
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Method 2: Heat */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-white border border-earth-brown/5 rounded-lg ambient-shadow cursor-pointer transition-all duration-300"
                    >
                        <TiltCard className="p-8 h-full">
                            <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 02</span>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">The Heat Test</h3>
                            <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                Heat a spoonful of ghee in a pan. If it melts immediately and turns dark brownish, it is pure. If it takes time and turns yellow, it may be adulterated.
                            </p>
                            <div className="bg-ghee-gold/5 p-4 border-l-2 border-ghee-gold">
                                <span className="font-label-sm text-xs italic text-earth-brown">Verification: Pure ghee browns due to natural caramelization.</span>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Method 3: Coconut Oil */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-white border border-earth-brown/5 rounded-lg ambient-shadow cursor-pointer transition-all duration-300"
                    >
                        <TiltCard className="p-8 h-full">
                            <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 03</span>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Coconut Oil Test</h3>
                            <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                Place a jar of ghee in a double boiler to melt it, then put it in the fridge. If the ghee stays in one solid layer, it's pure. If layers appear, it contains coconut oil.
                            </p>
                            <div className="bg-ghee-gold/5 p-4 border-l-2 border-ghee-gold">
                                <span className="font-label-sm text-xs italic text-earth-brown">Insight: Different fats have different freezing rates.</span>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Method 4: Vegetable Oil */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-white border border-earth-brown/5 rounded-lg ambient-shadow cursor-pointer transition-all duration-300"
                    >
                        <TiltCard className="p-8 h-full">
                            <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 04</span>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">Vegetable Oil Test</h3>
                            <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                Mix a spoonful of ghee with a pinch of sugar in a glass. Close it and let it sit for 5 minutes. If a red color appears, it contains vegetable oil.
                            </p>
                            <div className="bg-ghee-gold/5 p-4 border-l-2 border-ghee-gold">
                                <span className="font-label-sm text-xs italic text-earth-brown">Chemistry: Adulterants like Vanaspati react with sugar.</span>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Method 5: Iodine */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-4 bg-white border border-earth-brown/5 rounded-lg ambient-shadow cursor-pointer transition-all duration-300"
                    >
                        <TiltCard className="p-8 h-full">
                            <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 05</span>
                            <h3 className="font-headline-md text-xl mb-4 font-bold">The Iodine Test</h3>
                            <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                Add two drops of iodine to a small amount of melted ghee. If the ghee turns purple or blue, it contains mashed potatoes or starch.
                            </p>
                            <div className="bg-ghee-gold/5 p-4 border-l-2 border-ghee-gold text-error bg-error/5">
                                <span className="font-label-sm text-xs italic font-bold">Warning: Starch is commonly used for bulking low-quality ghee.</span>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Method 6: Smell */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-12 bg-white border border-earth-brown/5 rounded-lg ambient-shadow cursor-pointer transition-all duration-300"
                    >
                        <TiltCard className="p-8 md:p-12 h-full">
                            <div className="flex flex-col md:flex-row items-center gap-12 h-full">
                                <div className="w-full md:w-1/3 aspect-video relative overflow-hidden bg-warm-cream rounded">
                                    <img 
                                        className="w-full h-full object-cover select-none" 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyKxb_TJY13uvhg9bI21GD3awK-J6zUjcH5nSQ9BDpjroD_3h_vImxSJiRRIx_w7feJiGK5lTMcg6uSvfpWMrE1BuH8memarPaok7kI-eQJPNFJJv4bzrpoAzLIRJLWiyMHPfSk75xk33ff85okY64t_NYQNoUCfZxdbJBIG94nAKHQ9IlQn_kJbFBwII9Q7yjteLf4gtc6pzz9tP5YxTPwyvuV6rTV5I0piBq_Hl2pnyINkwWCM-_ESdftpgIPOH6V6dzS381o1YS"
                                        alt="Smell test"
                                    />
                                </div>
                                <div className="flex-1">
                                    <span className="font-label-sm text-xs text-ghee-gold mb-2 block font-bold">Method 06</span>
                                    <h3 className="font-headline-md text-xl mb-4 font-bold">The Sensory Smell Test</h3>
                                    <p className="font-body-md text-sm text-earth-brown/80 mb-6 leading-relaxed">
                                        Pure A2 Ghee has a distinct, nutty, and slightly sweet aroma that fills the room when heated. Adulterated ghee will either have no smell or a chemical/rancid odor.
                                    </p>
                                    <div className="bg-ghee-gold/5 p-6 border-l-2 border-ghee-gold">
                                        <span className="font-label-sm text-xs italic block mb-2 font-bold text-ghee-gold uppercase tracking-wider">The Marutham Standard:</span>
                                        <p className="text-sm font-label-lg text-earth-brown leading-relaxed">
                                            Our ghee is bilona-churned from Curd, not cream, ensuring that specific lactic-acid aroma that defines authentic purity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                </motion.div>

                {/* Interactive Purity Laboratory */}
                <InteractiveLab />
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-earth-brown text-warm-cream text-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="w-full h-full scale-150 rotate-12 bg-[radial-gradient(circle,#D4AF37_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <h2 className="font-display-lg text-3xl md:text-4xl mb-8 font-bold">Why Marutham?</h2>
                    <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-12 opacity-80 leading-relaxed">
                        Traditionally prepared for decades of shelf life using the ancient Vedic Bilona method. We source from grass-fed cows to provide you with the medicine your ancestors trusted.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button 
                            onClick={() => setCurrentPage('home')}
                            className="bg-ghee-gold text-earth-brown px-12 py-4 font-label-lg text-label-lg font-bold hover:scale-105 transition-all duration-300 cursor-pointer rounded btn-shimmer"
                        >
                            Explore Our Collection
                        </button>
                        <button 
                            onClick={() => setCurrentPage('vedic-process')}
                            className="border border-warm-cream/30 text-warm-cream px-12 py-4 font-label-lg text-label-lg font-bold hover:bg-warm-cream hover:text-earth-brown transition-all duration-300 cursor-pointer rounded"
                        >
                            The Vedic Process
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
