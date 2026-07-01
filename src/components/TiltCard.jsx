import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

export default function TiltCard({ children, className = "" }) {
    const cardRef = useRef(null);

    // Motion values for cursor position relative to card
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring animations to smooth the tilt effect
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

    // Glow effects
    const opacity = useSpring(useTransform(x, [-0.5, 0.5], [0.3, 0.8]), springConfig);
    const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Calculate relative position normalized from -0.5 to 0.5
        const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(relativeX);
        y.set(relativeY);
    };

    const handleMouseLeave = () => {
        // Reset tilt on mouse leave
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative rounded-lg overflow-hidden transition-all duration-300 ${className}`}
        >
            {/* 3D Content Wrapper */}
            <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>

            {/* Ambient hover light overlay */}
            <motion.div
                style={{
                    background: useTransform(
                        [glowX, glowY],
                        ([gX, gY]) => `radial-gradient(circle 120px at ${gX} ${gY}, rgba(212, 175, 55, 0.12) 0%, transparent 80%)`
                    ),
                    opacity,
                }}
                className="absolute inset-0 pointer-events-none z-10"
            />
        </motion.div>
    );
}
