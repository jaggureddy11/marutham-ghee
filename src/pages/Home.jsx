import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, AnimatePresence, useScroll, useTransform } from 'motion/react';
import TiltCard from '../components/TiltCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const HERO_SLIDES = [

    {
        url: "/background_pot.jpg",
        tag: "Vedic Bilona Churning"
    },
    {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAunGURIBGF2OZ0A6AwFrbDdM6PjZDKEqb9Vi06Wmu6yWfaj7wjNwFNm5HytMR_R6i38pkdk4ZdC1D5ipBExGfFQYtI3ziqK5xjVBrSWD_hQi8QGCDSt7R5_SQ8oUQHU9jSkYw2rSrS_SbOsdee7XwmwT-ltsmLZ2qtxDj23WT64kUsI4BoMCUYK31wihlTwWnYN1zlblniscEGruDJE4JLGGKhiIvGTsAD8xQE07WjTfIiu_xf145m5VgyL_lcZTUePQMLGGVpc3V_",
        tag: "Artisanal & Ancestral"
    },
    {
        url: "/background_churning.png",
        tag: "Traditional Churning"
    }
];

const PRODUCT_IMAGES = [
    {
        url: "/product_jar_front.jpg",
        alt: "Marutham A2 Desi Cow Ghee Front Label"
    },
    {
        url: "/product_jar_back.jpg",
        alt: "Marutham A2 Desi Cow Ghee Back Label & Nutrition Facts"
    },
    {
        url: "/product_infographic.jpg",
        alt: "Marutham A2 Desi Cow Ghee Nutritional Goodness & Bilona Benefits"
    }
];

export default function Home({ addToCart, setCurrentPage }) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [selectedVolume, setSelectedVolume] = useState('500ml');
    const [activeAccordion, setActiveAccordion] = useState('nutrition');
    const [quantity, setQuantity] = useState(1);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Mouse coordinates for ambient background glow
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Scroll progress for the loop transition video section
    const videoSectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: videoSectionRef,
        offset: ["start end", "end start"]
    });

    const videoY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
    const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    // Luxury Pinned Hero Section Refs & State
    const luxuryHeroRef = useRef(null);
    const scrubVideoRef = useRef(null);
    const scrubCanvasRef = useRef(null);
    const hasInitializedRef = useRef(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    useEffect(() => {
        const initScrollTrigger = () => {
            if (hasInitializedRef.current) return;
            hasInitializedRef.current = true;

            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Desktop animations (pinning, fading)
                gsap.fromTo(".luxury-intro-text",
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out" }
                );
                gsap.fromTo(".luxury-canvas-container",
                    { scale: 0.92, opacity: 0 },
                    { scale: 1.0, opacity: 1, duration: 1.1, delay: 0.05, ease: "power3.out" }
                );

                gsap.set(".scroll-panel", { opacity: 0, y: 40, x: 0 });

                gsap.set(".progress-dot-0", { backgroundColor: "#8B5A2B", scale: 1.2 });
                gsap.set(".progress-dot-1, .progress-dot-2, .progress-dot-3", { backgroundColor: "rgba(139,90,43,0.2)", scale: 1.0 });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: luxuryHeroRef.current,
                        start: "top top",
                        end: "+=320%",  
                        scrub: 1.5,    
                        pin: true,
                        anticipatePin: 1
                    }
                });

                tl.addLabel("intro", 0)
                    .to(".luxury-canvas-scroll-wrapper", {
                        scale: 1.0, x: 0, rotate: 0,
                        duration: 3, ease: "power1.inOut"
                    }, "intro")
                    .to(luxuryHeroRef.current, {
                        backgroundColor: "#FAF7F0",
                        duration: 3, ease: "power1.inOut"
                    }, "intro")
                    .addLabel("panel1-transition", 3)
                    .to(".luxury-intro-scroll-wrapper", {
                        opacity: 0, y: -20,
                        duration: 2, ease: "power2.inOut"
                    }, "panel1-transition")
                    .to(".progress-dot-0", { backgroundColor: "rgba(139,90,43,0.2)", scale: 1.0, duration: 1.5 }, "panel1-transition")
                    .to(".progress-dot-1", { backgroundColor: "#8B5A2B", scale: 1.2, duration: 1.5 }, "panel1-transition")
                    .to(luxuryHeroRef.current, {
                        backgroundColor: "#E6EBE0",
                        duration: 3, ease: "power2.inOut"
                    }, "panel1-transition")
                    .fromTo(".scroll-panel-1",
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" },
                        "panel1-transition+=1"
                    )
                    .to(".luxury-canvas-scroll-wrapper", {
                        scale: 1.04, x: 12, rotate: 2,
                        duration: 3, ease: "power2.inOut"
                    }, "panel1-transition+=0.5")
                    .addLabel("panel1-hold", "panel1-transition+=4")
                    .addLabel("panel2-transition", "panel1-hold+=2")
                    .to(".scroll-panel-1", {
                        opacity: 0, y: -20,
                        duration: 2, ease: "power2.inOut"
                    }, "panel2-transition")
                    .to(".progress-dot-1", { backgroundColor: "rgba(139,90,43,0.2)", scale: 1.0, duration: 1.5 }, "panel2-transition")
                    .to(".progress-dot-2", { backgroundColor: "#8B5A2B", scale: 1.2, duration: 1.5 }, "panel2-transition")
                    .to(luxuryHeroRef.current, {
                        backgroundColor: "#F5EBE6",
                        duration: 3, ease: "power2.inOut"
                    }, "panel2-transition")
                    .fromTo(".scroll-panel-2",
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" },
                        "panel2-transition+=1"
                    )
                    .to(".luxury-canvas-scroll-wrapper", {
                        scale: 1.06, x: -8, rotate: -2,
                        duration: 3, ease: "power2.inOut"
                    }, "panel2-transition+=0.5")
                    .addLabel("panel2-hold", "panel2-transition+=4")
                    .addLabel("panel3-transition", "panel2-hold+=2")
                    .to(".scroll-panel-2", {
                        opacity: 0, y: -20,
                        duration: 2, ease: "power2.inOut"
                    }, "panel3-transition")
                    .to(".progress-dot-2", { backgroundColor: "rgba(139,90,43,0.2)", scale: 1.0, duration: 1.5 }, "panel3-transition")
                    .to(".progress-dot-3", { backgroundColor: "#8B5A2B", scale: 1.2, duration: 1.5 }, "panel3-transition")
                    .to(luxuryHeroRef.current, {
                        backgroundColor: "#FAF0D7",
                        duration: 3, ease: "power2.inOut"
                    }, "panel3-transition")
                    .fromTo(".scroll-panel-3",
                        { opacity: 0, y: 40 },
                        { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" },
                        "panel3-transition+=1"
                    )
                    .to(".luxury-canvas-scroll-wrapper", {
                        scale: 1.03, x: 0, rotate: 0,
                        filter: "drop-shadow(0 20px 50px rgba(212,175,55,0.15))",
                        duration: 3, ease: "power2.inOut"
                    }, "panel3-transition+=0.5")
                    .addLabel("panel3-hold", "panel3-transition+=4")
                    .addLabel("exit", "panel3-hold+=2")
                    .to(".scroll-panel-3", {
                        opacity: 0, y: -20,
                        duration: 2, ease: "power2.inOut"
                    }, "exit")
                    .to(".progress-dot-3", { backgroundColor: "rgba(139,90,43,0.2)", scale: 1.0, duration: 1.5 }, "exit")
                    .to(luxuryHeroRef.current, {
                        backgroundColor: "#FAF7F0",
                        duration: 3, ease: "power2.inOut"
                    }, "exit")
                    .to(".luxury-canvas-scroll-wrapper", {
                        scale: 0.88, y: -80, opacity: 0,
                        filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
                        duration: 3, ease: "power2.inOut"
                    }, "exit+=0.5");
            });

            mm.add("(max-width: 767px)", () => {
                // Mobile animations (no pinning, simpler layout)
                gsap.fromTo(".luxury-intro-text",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: "power2.out" }
                );
                gsap.fromTo(".luxury-canvas-container",
                    { scale: 0.95, opacity: 0 },
                    { scale: 1.0, opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" }
                );
            });
        };

        initScrollTrigger();

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [reducedMotion]);

    // Slide rotation interval
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(prev => (prev + 1) % HERO_SLIDES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleHeroMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    // Stagger transitions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    // Words split for mask reveal
    const titleWords = "The Honest Way to Vedic Wellness".split(" ");

    // Setup amber ember particles
    const [particles] = useState(() =>
        Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: Math.random() * 100,
            delay: Math.random() * 6,
            duration: Math.random() * 6 + 5
        }))
    );

    const variantData = {
        '200ml': { price: 820, original: 1150, save: '28%', productId: 'ghee_gold_label_200ml' },
        '500ml': { price: 1850, original: 2100, save: '12%', productId: 'ghee_gold_label_500ml' },
        '1L': { price: 3450, original: 3900, save: '11%', productId: 'ghee_gold_label_1l' }
    };
    const activeVariant = variantData[selectedVolume] || variantData['500ml'];
    const currentPrice = activeVariant.price * quantity;
    const isFreeShipping = currentPrice >= 2000;
    const diffToFree = 2000 - currentPrice;
    const progressPercent = Math.min(100, (currentPrice / 2000) * 100);

    return (
        <main className="pt-20">
            <style>{`
                @keyframes luxuryFloat {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                .luxury-float {
                    animation: luxuryFloat 6s ease-in-out infinite;
                }
                /* Scroll panels: hidden by default, GSAP reveals them */
                .scroll-panel {
                    opacity: 0;
                    transform: translateY(40px);
                    pointer-events: none;
                    will-change: opacity, transform;
                }
                .luxury-intro-text {
                    pointer-events: auto;
                }
            `}</style>

            {/* Luxury Pinned Hero Section */}
            <section
                ref={luxuryHeroRef}
                className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#FAF7F0]"
            >
                {/* Background ambient lighting/gradient (shifted left to glow behind the jar) */}
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_35%_45%,rgba(212,175,55,0.12)_0%,transparent_75%)] pointer-events-none" />

                {/* Content Container (Text deck layout right-aligned beside the image) */}
                <div className="absolute inset-x-4 md:inset-x-auto md:right-12 lg:right-24 bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2 sm:w-[500px] h-[35vh] min-h-[250px] md:min-h-0 md:h-[460px] select-none z-10 pointer-events-auto text-center md:text-left mx-auto md:mx-0 flex flex-col justify-end md:justify-center">

                    {/* Panel 0 – Initial Intro Text */}
                    <div className="luxury-intro-text absolute inset-0 flex flex-col justify-center z-10 h-full">
                        <div className="luxury-intro-scroll-wrapper w-full h-full flex flex-col justify-center">
                            <span className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.25em] mb-4 block font-bold">
                                The Gold Standard of Purity
                            </span>
                            <h1 className="font-display-lg text-3xl md:text-5xl text-earth-brown mb-6 font-bold leading-tight tracking-tight">
                                The Honest Way to Vedic Wellness
                            </h1>
                            <p className="font-body-lg text-body-md text-earth-brown/80 mb-8 leading-relaxed">
                                Crafted from the milk of free-grazing cows using the traditional Vedic Bilona method.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() => { const el = document.getElementById('products'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                                    className="bg-earth-brown text-warm-cream px-8 py-4 font-label-lg text-label-sm font-bold hover:bg-ghee-gold hover:text-earth-brown hover:scale-[1.03] transition-all text-center cursor-pointer rounded shadow-sm btn-shimmer"
                                >
                                    Shop A2 Desi Ghee
                                </button>
                                <button
                                    onClick={() => setCurrentPage('vedic-process')}
                                    className="border-2 border-earth-brown text-earth-brown px-8 py-4 font-label-lg text-label-sm font-bold hover:bg-earth-brown hover:text-warm-cream hover:scale-[1.03] transition-all text-center cursor-pointer rounded"
                                >
                                    Our Heritage
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Panel 1 – Grass-Fed Origin Text */}
                    <div className="scroll-panel scroll-panel-1 hidden md:flex absolute inset-0 flex-col justify-center h-full">
                        <span className="text-ghee-gold text-4xl mb-6">🌿</span>
                        <span className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.25em] mb-4 block font-bold">
                            Step 01 — Origin
                        </span>
                        <h2 className="font-display-lg text-2xl md:text-4xl text-earth-brown mb-5 font-bold leading-tight">
                            Born from Pasture,<br />Not Factories
                        </h2>
                        <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed mb-6">
                            Our Gir & Hallikar cows roam freely in pesticide-free green pastures. Their A2-rich milk carries the full force of natural nutrition — no hormones, no confinement.
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-8 h-[2px] bg-ghee-gold" />
                            <span className="font-label-sm text-xs text-earth-brown/60 uppercase tracking-widest font-bold">100% Free-Grazing Desi Cows</span>
                        </div>
                    </div>

                    {/* Panel 2 – Bilona Method Text */}
                    <div className="scroll-panel scroll-panel-2 hidden md:flex absolute inset-0 flex-col justify-center h-full">
                        <span className="text-ghee-gold text-4xl mb-6">🪔</span>
                        <span className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.25em] mb-4 block font-bold">
                            Step 02 — Craft
                        </span>
                        <h2 className="font-display-lg text-2xl md:text-4xl text-earth-brown mb-5 font-bold leading-tight">
                            Hand-Churned by<br />Ancestral Rhythm
                        </h2>
                        <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed mb-6">
                            Milk is cultured overnight, then slow-churned with a wooden Bilona to extract the finest cultured butter. Rooted in Rigvedic tradition — every churn is a prayer.
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <div className="w-8 h-[2px] bg-ghee-gold" />
                            <span className="font-label-sm text-xs text-earth-brown/60 uppercase tracking-widest font-bold">Vedic Bilona Method</span>
                        </div>
                    </div>

                    {/* Panel 3 – Slow-Fire Clarity Text */}
                    <div className="scroll-panel scroll-panel-3 hidden md:flex absolute inset-0 flex-col justify-center h-full">
                        <span className="text-ghee-gold text-4xl mb-6">✨</span>
                        <span className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.25em] mb-4 block font-bold">
                            Step 03 — Clarity
                        </span>
                        <h2 className="font-display-lg text-2xl md:text-4xl text-earth-brown mb-5 font-bold leading-tight">
                            Golden. Grainy.<br />Perfectly Clarified.
                        </h2>
                        <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed mb-6">
                            Butter is slow-clarified over a wood fire in clay pots. The result? A rich, nutty aroma and a golden hue packed with Butyric acid, Vitamin K2, and Omega-3 fatty acids.
                        </p>
                        <div className="flex items-center gap-4 flex-wrap mt-auto">
                            {["Butyric Acid", "Vitamin K2", "Omega-3", "CLA"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-ghee-gold/10 text-earth-brown text-xs font-bold rounded-full border border-ghee-gold/30">{tag}</span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Left Column: Enlarged Product Image positioned properly on the left, without getting cut off */}
                <div className="absolute inset-x-4 md:inset-x-auto md:left-12 lg:left-24 top-12 md:top-[48%] md:-translate-y-1/2 md:w-[65%] lg:w-[48vw] max-w-[800px] h-[35vh] md:h-auto md:aspect-[3/2] flex items-center justify-center z-0 select-none pointer-events-auto mx-auto md:mx-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-ghee-gold/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="luxury-canvas-container relative w-full h-full flex items-center justify-center">
                        <div className="luxury-canvas-scroll-wrapper w-full h-full flex items-center justify-center relative">
                            <img
                                src="/hero_ghee_splash_transparent.png"
                                alt="Premium Marutham Desi Ghee bottle with golden splash"
                                className="w-full h-full object-contain pointer-events-none drop-shadow-[0_25px_50px_rgba(212,175,55,0.15)]"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 z-20 pointer-events-none"
                >
                    <span className="font-label-sm text-[10px] text-earth-brown/50 tracking-widest font-bold">SCROLL TO DISCOVER</span>
                    <span className="material-symbols-outlined text-earth-brown/60 text-lg">keyboard_arrow_down</span>
                </motion.div>
            </section>

            {/* Mobile-only Steps Section (Fallback for the GSAP scroll panels) */}
            <section className="py-20 px-margin-mobile md:hidden bg-warm-cream flex flex-col gap-16 border-b border-earth-brown/5">
                <div className="flex flex-col gap-4 text-center">
                    <span className="text-ghee-gold text-4xl">🌿</span>
                    <span className="font-label-lg text-label-md text-ghee-gold uppercase tracking-[0.25em] font-bold">
                        Step 01 — Origin
                    </span>
                    <h2 className="font-display-lg text-2xl text-earth-brown font-bold leading-tight">
                        Born from Pasture,<br />Not Factories
                    </h2>
                    <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed">
                        Our Gir & Hallikar cows roam freely in pesticide-free green pastures. Their A2-rich milk carries the full force of natural nutrition — no hormones, no confinement.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-2">
                        <div className="w-6 h-[2px] bg-ghee-gold" />
                        <span className="font-label-sm text-[10px] text-earth-brown/60 uppercase tracking-widest font-bold">100% Free-Grazing Desi Cows</span>
                        <div className="w-6 h-[2px] bg-ghee-gold" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-center">
                    <span className="text-ghee-gold text-4xl">🪔</span>
                    <span className="font-label-lg text-label-md text-ghee-gold uppercase tracking-[0.25em] font-bold">
                        Step 02 — Craft
                    </span>
                    <h2 className="font-display-lg text-2xl text-earth-brown font-bold leading-tight">
                        Hand-Churned by<br />Ancestral Rhythm
                    </h2>
                    <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed">
                        Milk is cultured overnight, then slow-churned with a wooden Bilona to extract the finest cultured butter. Rooted in Rigvedic tradition — every churn is a prayer.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-2">
                        <div className="w-6 h-[2px] bg-ghee-gold" />
                        <span className="font-label-sm text-[10px] text-earth-brown/60 uppercase tracking-widest font-bold">Vedic Bilona Method</span>
                        <div className="w-6 h-[2px] bg-ghee-gold" />
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-center">
                    <span className="text-ghee-gold text-4xl">✨</span>
                    <span className="font-label-lg text-label-md text-ghee-gold uppercase tracking-[0.25em] font-bold">
                        Step 03 — Clarity
                    </span>
                    <h2 className="font-display-lg text-2xl text-earth-brown font-bold leading-tight">
                        Golden. Grainy.<br />Perfectly Clarified.
                    </h2>
                    <p className="font-body-lg text-body-md text-earth-brown/80 leading-relaxed">
                        Butter is slow-clarified over a wood fire in clay pots. The result? A rich, nutty aroma and a golden hue packed with Butyric acid, Vitamin K2, and Omega-3 fatty acids.
                    </p>
                    <div className="flex items-center justify-center gap-2 flex-wrap mt-2 max-w-sm mx-auto">
                        {["Butyric Acid", "Vitamin K2", "Omega-3", "CLA"].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-ghee-gold/10 text-earth-brown text-xs font-bold rounded-full border border-ghee-gold/30">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section: Sattvic by Nature */}
            <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-display-lg text-3xl md:text-4xl text-earth-brown mb-4 font-bold"
                        >
                            Sattvic by Nature
                        </motion.h3>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-1 bg-ghee-gold mx-auto mb-8"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="font-body-lg text-body-lg text-earth-brown/80 max-w-3xl mx-auto leading-relaxed"
                        >
                            Our procedure is rooted in the Rigveda. We believe that true health comes from the harmony of Earth, Animal, and Soul.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-gutter"
                    >
                        <TiltCard className="ambient-shadow">
                            <motion.div
                                variants={cardVariants}
                                className="p-12 bg-white text-center cursor-pointer h-full"
                            >
                                <span className="material-symbols-outlined text-ghee-gold text-5xl mb-6">eco</span>
                                <h4 className="font-headline-md text-xl mb-4 font-bold">Grass-Fed Purity</h4>
                                <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                    Our Gir and Hallikar cows roam freely in lush, pesticide-free pastures, ensuring the highest quality A2 protein milk.
                                </p>
                            </motion.div>
                        </TiltCard>

                        <TiltCard className="ambient-shadow">
                            <motion.div
                                variants={cardVariants}
                                className="p-12 bg-white text-center cursor-pointer h-full"
                            >
                                <span className="material-symbols-outlined text-ghee-gold text-5xl mb-6">precision_manufacturing</span>
                                <h4 className="font-headline-md text-xl mb-4 font-bold">Bilona Method</h4>
                                <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                    Milk is turned into curd, which is then slow-churned using wooden beaters to extract the purest cultured butter.
                                </p>
                            </motion.div>
                        </TiltCard>

                        <TiltCard className="ambient-shadow">
                            <motion.div
                                variants={cardVariants}
                                className="p-12 bg-white text-center cursor-pointer h-full"
                            >
                                <span className="material-symbols-outlined text-ghee-gold text-5xl mb-6">local_fire_department</span>
                                <h4 className="font-headline-md text-xl mb-4 font-bold">Slow Fire Clarifying</h4>
                                <p className="font-body-md text-sm text-earth-brown/70 leading-relaxed">
                                    The butter is clarified over a slow-burning wood fire in clay pots, reaching the perfect grainy texture and nutty aroma.
                                </p>
                            </motion.div>
                        </TiltCard>
                    </motion.div>
                </div>
            </section>

            {/* Vedic Heritage Video Scroll Loop Transition */}
            <section ref={videoSectionRef} className="relative h-[65vh] min-h-[480px] overflow-hidden bg-black flex items-center justify-center">
                {/* Parallax Image Background */}
                <motion.div
                    style={{ y: videoY, scale: videoScale }}
                    className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
                >
                    <video
                        src="/scroll_transition.mp4"
                        poster="/background_churning.png"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover select-none"
                    />
                    {/* Dark cinematic vignette overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/85" />
                    <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.85) 100%)" />
                    <div className="absolute inset-0 bg-earth-brown/10 backdrop-blur-[0.5px]" />
                </motion.div>

                {/* Animated content card */}
                <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop text-center flex flex-col items-center">
                    <motion.div
                        style={{ y: textY, opacity: textOpacity }}
                        className="max-w-3xl"
                    >
                        <span className="font-label-lg text-label-lg text-ghee-gold uppercase tracking-[0.25em] mb-4 block font-bold" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                            Rigvedic Tradition
                        </span>
                        <h2 className="font-display-lg text-3xl md:text-5xl text-white font-bold leading-tight mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
                            Sacred Heritage in Every Golden Drop
                        </h2>
                        <p className="font-body-lg text-body-lg text-white/90 max-w-xl mx-auto leading-relaxed" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.7)' }}>
                            Experience the timeless choreography of Vedic Bilona. Cultured, churned under the stars, and clarified slowly by fire to nurture mind, body, and soul.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Loop Banner (Interactive Marquee) */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-ghee-gold/95 backdrop-blur-xs py-4 z-20 border-t border-earth-brown/10">
                    <motion.div
                        style={{ x: marqueeX }}
                        className="flex whitespace-nowrap gap-16 text-earth-brown font-bold tracking-widest text-xs uppercase"
                    >
                        {Array.from({ length: 4 }).map((_, i) => (
                            <span key={i} className="flex items-center gap-16 flex-shrink-0 select-none">
                                <span>Rigvedic Wisdom</span>
                                <span className="text-sm font-normal opacity-50">•</span>
                                <span>100% Cultured A2 Butter</span>
                                <span className="text-sm font-normal opacity-50">•</span>
                                <span>Slow Wood-Fire Clarified</span>
                                <span className="text-sm font-normal opacity-50">•</span>
                                <span>Traditional Wooden Bilona Churn</span>
                                <span className="text-sm font-normal opacity-50">•</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Product Highlight Section */}
            <section className="py-24 bg-warm-cream px-margin-mobile md:px-margin-desktop border-t border-earth-brown/5" id="products">
                <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-start gap-16">

                    {/* Left Column: Interactive Image Gallery with Thumbnail Preview Toggles */}
                    <div className="w-full lg:w-1/2 lg:sticky lg:top-24 flex flex-col gap-6">
                        <TiltCard className="p-8 md:p-12 bg-white/40 backdrop-blur-sm rounded-2xl border border-earth-brown/5">
                            <div className="relative aspect-square flex items-center justify-center overflow-hidden rounded-xl">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeImageIndex}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-full object-contain select-none"
                                        src={PRODUCT_IMAGES[activeImageIndex].url}
                                        alt={PRODUCT_IMAGES[activeImageIndex].alt}
                                    />
                                </AnimatePresence>
                                <motion.div
                                    animate={{ rotate: [12, 8, 12] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute top-4 right-4 bg-ghee-gold text-earth-brown p-3 rounded-full flex flex-col items-center justify-center w-20 h-20 text-center shadow-lg pointer-events-none z-10 font-bold"
                                >
                                    <span className="font-label-sm text-[9px] leading-tight font-bold">BILONA<br />CERTIFIED</span>
                                </motion.div>
                            </div>
                        </TiltCard>

                        {/* Thumbnail Gallery */}
                        <div className="flex gap-4 justify-center">
                            {PRODUCT_IMAGES.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImageIndex(idx)}
                                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 p-1 bg-white transition-all cursor-pointer hover:border-ghee-gold hover:scale-[1.05] ${activeImageIndex === idx ? 'border-ghee-gold shadow-md scale-[1.03]' : 'border-earth-brown/10'
                                        }`}
                                >
                                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover rounded-lg" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex flex-col justify-start"
                    >
                        <span className="font-label-lg text-label-lg text-ghee-gold tracking-widest uppercase mb-4 block font-bold">Gold Label Reserve</span>
                        <h2 className="font-display-lg text-3xl md:text-4xl text-earth-brown mb-4 font-bold">A2 Desi Cow Ghee</h2>

                        {/* Trust Rating */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex text-ghee-gold">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                ))}
                            </div>
                            <span className="font-label-sm text-xs text-earth-brown/70 font-bold">4.9 / 5.0 (284 verified reviews)</span>
                        </div>

                        <p className="font-body-lg text-body-lg text-earth-brown/80 mb-8 leading-relaxed">
                            Crafted from the milk of free-grazing Hallikar cows. Our ghee is cultured, hand-churned, and clarified to perfection. Rich in Butyric acid, Vitamin K2, and essential fatty acids.
                        </p>

                        {/* Interactive Weight/Volume Selector */}
                        <div className="mb-8">
                            <span className="font-label-sm text-xs text-earth-brown/50 tracking-wider uppercase block mb-3 font-bold">Select Volume</span>
                            <div className="flex gap-3">
                                {[
                                    { id: '200ml', label: '200 ml', price: 820 },
                                    { id: '500ml', label: '500 ml', price: 1850 },
                                    { id: '1L', label: '1 Litre', price: 3450 }
                                ].map(variant => (
                                    <motion.button
                                        key={variant.id}
                                        onClick={() => {
                                            setSelectedVolume(variant.id);
                                            // Reset quantity to 1 when changing variants for standard UX
                                            setQuantity(1);
                                        }}
                                        whileHover={{ scale: 1.025 }}
                                        whileTap={{ scale: 0.975 }}
                                        className={`flex-1 py-4 border rounded font-label-lg text-xs font-bold transition-all text-center cursor-pointer ${selectedVolume === variant.id
                                                ? 'border-earth-brown bg-earth-brown text-warm-cream shadow-md'
                                                : 'border-earth-brown/10 bg-white/40 text-earth-brown hover:border-earth-brown/40'
                                            }`}
                                    >
                                        <div>{variant.label}</div>
                                        <div className={`text-[10px] mt-1 ${selectedVolume === variant.id ? 'text-ghee-gold' : 'text-earth-brown/60'}`}>
                                            ₹ {variant.price.toLocaleString('en-IN')}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Dynamic Pricing display based on selected volume */}
                        <div className="flex items-center gap-6 mb-8">
                            <span className="font-headline-md text-3xl text-earth-brown font-bold">
                                ₹ {currentPrice.toLocaleString('en-IN')}.00
                            </span>
                            <span className="text-earth-brown/40 line-through font-body-lg">
                                ₹ {(activeVariant.original * quantity).toLocaleString('en-IN')}.00
                            </span>
                            <span className="bg-ghee-gold/15 text-ghee-gold px-3 py-1 font-label-sm rounded-full text-xs font-bold border border-ghee-gold/30">
                                Save {activeVariant.save}
                            </span>
                        </div>

                        {/* Free Shipping Alert Bar */}
                        <div className="mb-8 p-4 bg-white/50 border border-earth-brown/10 rounded-xl">
                            <p className="font-label-sm text-xs text-earth-brown/80 mb-2.5 flex items-center gap-2">
                                {isFreeShipping ? (
                                    <span className="text-ghee-gold font-bold flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base">check_circle</span>
                                        Your order qualifies for FREE shipping! 🚚
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1.5">
                                        <span className="material-symbols-outlined text-base text-ghee-gold">local_shipping</span>
                                        Add <strong className="text-earth-brown">₹{diffToFree.toLocaleString('en-IN')}</strong> more for FREE shipping!
                                    </span>
                                )}
                            </p>
                            <div className="w-full h-2 bg-earth-brown/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercent}%` }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="h-full transition-colors duration-300 bg-ghee-gold"
                                />
                            </div>
                        </div>

                        {/* Cart CTAs & Quantity Selector */}
                        <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-12">
                            {/* Quantity Selector widget */}
                            <div className="flex items-center justify-between border border-earth-brown/20 bg-white/40 rounded px-4 py-4 min-w-[140px] sm:w-[150px]">
                                <button
                                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                    className="p-1 text-earth-brown/60 hover:text-earth-brown active:scale-95 transition-all text-lg font-bold cursor-pointer select-none"
                                >
                                    —
                                </button>
                                <span className="font-label-lg text-sm text-earth-brown font-bold w-8 text-center">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(q => Math.min(10, q + 1))}
                                    className="p-1 text-earth-brown/60 hover:text-earth-brown active:scale-95 transition-all text-lg font-bold cursor-pointer select-none"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart button */}
                            <button
                                onClick={() => addToCart(activeVariant.productId, quantity)}
                                className="flex-grow bg-earth-brown text-warm-cream py-5 font-label-lg text-label-lg hover:bg-earth-brown/95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold rounded shadow-md btn-shimmer"
                            >
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Add {quantity > 1 ? `${quantity} Jars` : 'to Cart'} • ₹{currentPrice.toLocaleString('en-IN')}
                            </button>
                        </div>

                        {/* Premium E-commerce Collapsible Details Accordion */}
                        <div className="border-t border-earth-brown/10">
                            {[
                                {
                                    id: 'nutrition',
                                    title: 'Nutritional Values (per 100g)',
                                    icon: 'analytics',
                                    content: (
                                        <table className="w-full text-left font-label-sm text-xs text-earth-brown/80 border-collapse">
                                            <tbody>
                                                <tr className="border-b border-earth-brown/5"><td className="py-2.5 font-bold">Energy</td><td className="py-2.5 text-right">897 kcal</td></tr>
                                                <tr className="border-b border-earth-brown/5"><td className="py-2.5 font-bold">Total Fat</td><td className="py-2.5 text-right">99.7 g</td></tr>
                                                <tr className="border-b border-earth-brown/5"><td className="py-2.5 font-bold">Saturated Fat</td><td className="py-2.5 text-right">65.2 g</td></tr>
                                                <tr className="border-b border-earth-brown/5"><td className="py-2.5 font-bold">Butyric Acid</td><td className="py-2.5 text-right">3.8 g</td></tr>
                                                <tr className="border-b border-earth-brown/5"><td className="py-2.5 font-bold">Vitamin A</td><td className="py-2.5 text-right">3060 IU</td></tr>
                                                <tr><td className="py-2.5 font-bold">Vitamin K2</td><td className="py-2.5 text-right">18.5 mcg</td></tr>
                                            </tbody>
                                        </table>
                                    )
                                },
                                {
                                    id: 'process',
                                    title: 'Traditional Vedic Bilona Craft',
                                    icon: 'history_edu',
                                    content: (
                                        <p className="font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                            Our ghee is not made from cream separator machines. Instead, fresh A2 milk is boiled, set to curd overnight, and then hand-churned in wooden pots using a bidirectional Bilona. The extracted cultured butter (makhan) is clarified on a slow fire in clay vessels, preserving the essential proteins and rich grainy texture.
                                        </p>
                                    )
                                },
                                {
                                    id: 'certifications',
                                    title: 'Purity Certifications & Lab Reports',
                                    icon: 'verified',
                                    content: (
                                        <div className="space-y-3 font-body-md text-xs text-earth-brown/70 leading-relaxed">
                                            <p>Every single batch undergoes testing at NABL accredited labs to guarantee:</p>
                                            <ul className="list-disc pl-5 space-y-1.5 font-label-sm">
                                                <li><strong>100% A2 Protein:</strong> Sourced only from indigenous Gir/Hallikar cows</li>
                                                <li><strong>Zero Adulteration:</strong> Free of vegetable fat, mineral oils, or artificial colorings</li>
                                                <li><strong>No Chemical Pesticides:</strong> Lab verified for 150+ chemical residues</li>
                                            </ul>
                                        </div>
                                    )
                                }
                            ].map(item => (
                                <div key={item.id} className="border-b border-earth-brown/10">
                                    <button
                                        onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                                        className="w-full py-4 flex items-center justify-between font-label-lg text-sm text-earth-brown font-bold hover:text-ghee-gold transition-colors text-left cursor-pointer"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-ghee-gold text-lg">{item.icon}</span>
                                            {item.title}
                                        </span>
                                        <span className="material-symbols-outlined transform transition-transform duration-300">
                                            {activeAccordion === item.id ? 'expand_less' : 'expand_more'}
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {activeAccordion === item.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                className="overflow-hidden pb-5"
                                            >
                                                {item.content}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-deep-brown text-warm-cream px-margin-mobile md:px-margin-desktop overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
                <div className="max-w-container-max mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display-lg text-3xl md:text-4xl mb-4 font-bold"
                        >
                            We Guarantee
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="font-body-lg text-warm-cream/70 max-w-2xl mx-auto leading-relaxed"
                        >
                            Commitment to purity isn't just a promise; it's our practice. Every batch undergoes rigorous lab testing for quality assurance.
                        </motion.p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: "science", title: "No Chemicals", desc: "Zero synthetic fertilizers used in fodder." },
                            { icon: "palette", title: "No Artificial Colors", desc: "The natural golden hue of pure beta-carotene." },
                            { icon: "pest_control", title: "No Pesticides", desc: "Lab-tested for 150+ harmful residues." },
                            { icon: "verified_user", title: "No Adulteration", desc: "100% milk fat with no cheap vegetable oils." }
                        ].map((item, idx) => (
                            <TiltCard key={idx} className="border border-warm-cream/10 rounded-lg">
                                <motion.div
                                    variants={cardVariants}
                                    className="flex flex-col items-center text-center p-6 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-ghee-gold text-5xl mb-4">{item.icon}</span>
                                    <h5 className="font-label-lg text-sm text-warm-cream uppercase tracking-wider mb-2 font-bold">{item.title}</h5>
                                    <p className="font-label-sm text-xs text-warm-cream/60 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section: Straight from Farm */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_w3jv3l6E4WSOD98BrQGWUiNTcY2KEbIc-a0lBwaPuqmt5dpztiGuroOnwciNp2L5qC4BsGyFIolgliIeJ4CsSlTohhq88yXlWNRA2B23iAuRTNL6xS5MJAPM1181pDycF31lSep9saaE4LMkKqR3sINwH_MBbyvaYOwUMtBbl6Sdje_n91XwSEZF7-NyUKMaehTNmIdfcH2qBKGtT-fo5pmodbeF9WtY38WLIOf_fxrtBGL2a5OC4ddx1FzEKSp5BTrfETv62thE"
                        alt="Indian dairy farm sunset landscape"
                    />
                    <div className="absolute inset-0 bg-earth-brown/65 backdrop-blur-[1px]" />
                </div>

                <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display-lg text-4xl md:text-5xl text-white mb-8 font-bold"
                    >
                        Straight from Farm to Door
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-body-lg text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        By choosing Marutham, you support traditional farming communities and ancient agricultural wisdom. We deliver purity nationwide.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-3xl mx-auto"
                    >
                        {[
                            { icon: "local_shipping", text: "Fast Nationwide Delivery" },
                            { icon: "support_agent", text: "Vedic Nutrition Support" },
                            { icon: "lock", text: "100% Secure Payments" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2">
                                <div className="bg-white/20 backdrop-blur-md p-6 rounded-full border border-white/30 text-white mb-2">
                                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                </div>
                                <span className="font-label-sm text-sm text-white font-bold">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-16"
                    >
                        <button
                            onClick={() => {
                                const el = document.getElementById('products');
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-ghee-gold text-earth-brown px-12 py-5 font-label-lg text-label-lg font-bold hover:scale-105 transition-transform cursor-pointer rounded btn-shimmer"
                        >
                            Begin Your Journey
                        </button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
