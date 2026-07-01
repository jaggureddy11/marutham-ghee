import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function InteractiveLab() {
    const [selectedGhee, setSelectedGhee] = useState('marutham'); // 'marutham' or 'market'
    const [activeTest, setActiveTest] = useState('iodine'); // 'iodine' or 'heat'
    const [isTestRun, setIsTestRun] = useState(false);
    const [heatLevel, setHeatLevel] = useState(0); // 0 to 100 for heat test
    const [dropletsCount, setDropletsCount] = useState([]); // Array of droplet trigger timestamps

    const resetTest = () => {
        setIsTestRun(false);
        setHeatLevel(0);
        setDropletsCount([]);
    };

    const runIodineDrop = () => {
        if (isTestRun) return;
        setDropletsCount(prev => [...prev, Date.now()]);
        setTimeout(() => {
            setIsTestRun(true);
        }, 1200);
    };

    // Color definitions based on states
    const getGheeColor = () => {
        if (activeTest === 'iodine') {
            if (isTestRun) {
                return selectedGhee === 'marutham' ? '#D4AF37' : '#2A1B4E'; // Stays golden vs turns dark blue/purple
            }
            return '#E6C657'; // Base golden yellow
        } else {
            // Heat test colors
            if (heatLevel > 20) {
                if (selectedGhee === 'marutham') {
                    // Deep rich brownish-gold (caramelized)
                    return `rgba(115, 63, 20, ${Math.min(1, 0.4 + heatLevel / 150)})`;
                } else {
                    // Stays synthetic pale yellow
                    return `rgba(230, 218, 87, ${Math.min(1, 0.6 + heatLevel / 200)})`;
                }
            }
            return '#E6C657';
        }
    };

    return (
        <div className="bg-white border border-earth-brown/10 rounded-xl p-6 md:p-10 ambient-shadow max-w-4xl mx-auto my-16">
            <div className="text-center mb-8">
                <span className="font-label-sm text-xs text-ghee-gold font-bold uppercase tracking-widest block mb-2">Interactive Experience</span>
                <h3 className="font-display-lg text-2xl md:text-3xl text-earth-brown font-bold mb-4">Vedic Purity Lab</h3>
                <p className="font-body-md text-sm text-earth-brown/70 max-w-xl mx-auto">
                    Select a Ghee sample and perform traditional kitchen tests virtually to verify its composition.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* 1. Control Panel */}
                <div className="space-y-6">
                    <div>
                        <label className="block font-label-sm text-xs text-earth-brown/80 mb-3 font-bold uppercase tracking-wider">1. Select Sample</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => { setSelectedGhee('marutham'); resetTest(); }}
                                className={`py-3 px-4 text-xs font-label-lg font-bold transition-all border ${selectedGhee === 'marutham' ? 'bg-earth-brown text-warm-cream border-earth-brown' : 'bg-transparent text-earth-brown border-earth-brown/20 hover:border-earth-brown'} cursor-pointer`}
                            >
                                Marutham Pure A2
                            </button>
                            <button
                                onClick={() => { setSelectedGhee('market'); resetTest(); }}
                                className={`py-3 px-4 text-xs font-label-lg font-bold transition-all border ${selectedGhee === 'market' ? 'bg-earth-brown text-warm-cream border-earth-brown' : 'bg-transparent text-earth-brown border-earth-brown/20 hover:border-earth-brown'} cursor-pointer`}
                            >
                                Market Ghee
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block font-label-sm text-xs text-earth-brown/80 mb-3 font-bold uppercase tracking-wider">2. Choose Test</label>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => { setActiveTest('iodine'); resetTest(); }}
                                className={`py-3 px-4 text-xs text-left font-label-lg font-bold border flex items-center gap-3 transition-all ${activeTest === 'iodine' ? 'bg-ghee-gold/10 text-earth-brown border-ghee-gold' : 'bg-transparent text-earth-brown border-earth-brown/10 hover:border-earth-brown/40'} cursor-pointer`}
                            >
                                <span className="material-symbols-outlined text-sm">science</span>
                                Iodine Test (Starch Check)
                            </button>
                            <button
                                onClick={() => { setActiveTest('heat'); resetTest(); }}
                                className={`py-3 px-4 text-xs text-left font-label-lg font-bold border flex items-center gap-3 transition-all ${activeTest === 'heat' ? 'bg-ghee-gold/10 text-earth-brown border-ghee-gold' : 'bg-transparent text-earth-brown border-earth-brown/10 hover:border-earth-brown/40'} cursor-pointer`}
                            >
                                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                                Heat Test (Melting & Caramel)
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={resetTest}
                        className="w-full border border-earth-brown/10 py-3 text-xs font-label-lg uppercase tracking-wider text-earth-brown hover:bg-earth-brown hover:text-white transition-all cursor-pointer font-bold"
                    >
                        Reset Workspace
                    </button>
                </div>

                {/* 2. Interactive Animation Area */}
                <div className="md:col-span-2 bg-warm-cream border border-earth-brown/10 rounded-lg p-6 min-h-[320px] flex flex-col justify-between items-center relative overflow-hidden">
                    
                    {/* Active Test Component renders here */}
                    <div className="w-full flex-grow flex flex-col items-center justify-center relative">
                        {activeTest === 'iodine' ? (
                            <div className="flex flex-col items-center">
                                {/* Dropper Tool */}
                                <motion.div 
                                    whileHover={{ y: 5 }}
                                    onClick={runIodineDrop}
                                    className={`relative z-20 flex flex-col items-center cursor-pointer mb-12 ${isTestRun ? 'opacity-50 pointer-events-none' : ''}`}
                                >
                                    <span className="material-symbols-outlined text-4xl text-purple-700">colorize</span>
                                    <span className="text-[10px] font-label-sm uppercase bg-purple-700 text-white px-2 py-0.5 rounded-full mt-2 font-bold animate-pulse">
                                        Click to Drop Iodine
                                    </span>
                                </motion.div>

                                {/* Droplets animations */}
                                {dropletsCount.map(timestamp => (
                                    <motion.div
                                        key={timestamp}
                                        initial={{ y: -60, opacity: 1, scale: 1 }}
                                        animate={{ y: 40, opacity: 0.8, scale: 0.8 }}
                                        transition={{ duration: 1, ease: "easeIn" }}
                                        className="w-2.5 h-2.5 bg-purple-800 rounded-full absolute top-[40px] z-10"
                                    />
                                ))}

                                {/* Test Spoon */}
                                <div className="relative mt-4">
                                    {/* Spoon handle */}
                                    <div className="w-24 h-2 bg-earth-brown/20 rounded-full absolute left-[-80px] top-[14px] rotate-[15deg] pointer-events-none" />
                                    {/* Spoon base bowl */}
                                    <motion.div 
                                        animate={{ 
                                            backgroundColor: getGheeColor(),
                                        }}
                                        transition={{ duration: 1.5 }}
                                        className="w-24 h-12 bg-ghee-gold rounded-full shadow-inner relative flex items-center justify-center border border-earth-brown/10"
                                    >
                                        {/* Rippling liquid effect */}
                                        <motion.div 
                                            animate={isTestRun ? { scale: [1, 1.2, 1] } : {}}
                                            className="w-20 h-8 rounded-full opacity-35 bg-white/20 filter blur-xs"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col items-center">
                                {/* Pan / Spoon above flame */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-2 bg-earth-brown/20 rounded-full absolute left-[-80px] top-[14px] rotate-[15deg] pointer-events-none" />
                                    <motion.div 
                                        animate={{ 
                                            backgroundColor: getGheeColor(),
                                            scale: 1 + (heatLevel / 400)
                                        }}
                                        className="w-24 h-12 bg-ghee-gold rounded-full shadow-inner relative flex items-center justify-center border border-earth-brown/10"
                                    >
                                        {/* Melting butter graphic */}
                                        {heatLevel < 30 && (
                                            <div className="w-8 h-4 bg-yellow-100 rounded rotate-12 absolute filter blur-[1px]" />
                                        )}
                                    </motion.div>
                                </div>

                                {/* Flame Graphics below */}
                                <div className="h-16 flex items-end gap-1.5 mb-6">
                                    {[1, 2, 3, 4, 5].map((flame) => (
                                        <motion.div
                                            key={flame}
                                            animate={heatLevel > 10 ? {
                                                height: [12, 40 + Math.random() * 20, 12],
                                                backgroundColor: ["#E6C657", "#EA580C", "#EF4444", "#E6C657"]
                                            } : { height: 4, backgroundColor: "#ccc" }}
                                            transition={{ repeat: Infinity, duration: 0.6 + flame * 0.1 }}
                                            className="w-2.5 rounded-t-full"
                                        />
                                    ))}
                                </div>

                                {/* Slider for heat control */}
                                <div className="w-full max-w-xs space-y-2">
                                    <div className="flex justify-between font-label-sm text-[10px] uppercase font-bold text-earth-brown/60">
                                        <span>Flame OFF</span>
                                        <span>High Heat</span>
                                    </div>
                                    <input 
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={heatLevel}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value);
                                            setHeatLevel(val);
                                            if (val > 80) setIsTestRun(true);
                                        }}
                                        className="w-full h-1 bg-earth-brown/10 rounded-lg appearance-none cursor-pointer accent-earth-brown focus:outline-none"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 3. Output Feedback Panel */}
                    <div className="w-full border-t border-earth-brown/10 pt-4 mt-6">
                        <AnimatePresence mode="wait">
                            {!isTestRun ? (
                                <motion.p 
                                    key="instruction"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="font-label-sm text-center text-xs text-earth-brown/50"
                                >
                                    {activeTest === 'iodine' 
                                        ? "Click the dropper tool above to drop 2 drops of Iodine solution."
                                        : "Drag the slider to apply heat under the pan and observe melting rate."}
                                </motion.p>
                            ) : (
                                <motion.div 
                                    key="feedback"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-white rounded border border-earth-brown/5 text-center flex flex-col items-center"
                                >
                                    {selectedGhee === 'marutham' ? (
                                        <>
                                            <span className="material-symbols-outlined text-leaf-green text-3xl mb-2">verified</span>
                                            <h5 className="font-label-lg text-xs text-leaf-green font-bold uppercase mb-1">
                                                Verification SUCCESS - 100% PURE A2 GHEE
                                            </h5>
                                            <p className="font-body-md text-xs text-earth-brown/85 max-w-md">
                                                {activeTest === 'iodine'
                                                    ? "Pure ghee contains 0% starch, leaving the golden beta-carotene color untouched by iodine."
                                                    : "Clarified A2 butter caramelized immediately on heat, turning a rich brown with a deep nutty aroma."}
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-error text-3xl mb-2">warning</span>
                                            <h5 className="font-label-lg text-xs text-error font-bold uppercase mb-1">
                                                Adulteration Detected!
                                            </h5>
                                            <p className="font-body-md text-xs text-earth-brown/85 max-w-md">
                                                {activeTest === 'iodine'
                                                    ? "The sample turned deep purple-blue, showing a reaction with bulking starch or mashed potatoes."
                                                    : "The sample melted slowly into a synthetic yellow sludge, indicating hydrogenated vegetable oils (Vanaspati)."}
                                            </p>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
