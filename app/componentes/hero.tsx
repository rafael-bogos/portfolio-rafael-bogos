"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { loadBasic } from "tsparticles-basic";
import { loadStarShape } from "tsparticles-shape-star";

const roles = [
    "Desenvolvedor Full Stack",
    "Criador de Soluções Web",
    "Entusiasta de Tecnologia",
    "Estudante de ADS"
];

export function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadBasic(engine);
        await loadStarShape(engine);
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    // Typing effect
    useEffect(() => {
        const currentText = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-black/80 to-gray-900/70 overflow-hidden pt-16"
        >
            <Particles
                className="absolute inset-0 -z-10"
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: { color: "transparent" },
                    detectRetina: true,
                    particles: {
                        number: { value: 70, density: { enable: true, area: 800 } },
                        color: { value: "#ffffff" },
                        shape: { type: "star" },
                        opacity: { value: 0.6 },
                        size: { value: { min: 1, max: 2 } },
                        move: {
                            enable: true,
                            speed: 1,
                            random: true,
                            direction: "none",
                            outModes: { default: "out" },
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: false },
                            onClick: { enable: false },
                        },
                    },
                }}
            />

            <motion.div
                key={isInView ? "visible" : "hidden"}
                initial={{ opacity: 0, y: -40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                transition={{ duration: 1 }}
                className="max-w-4xl w-full"
            >
                {/* Code-style greeting */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="font-code text-cyan-400 text-sm sm:text-base mb-4"
                >
                    {"const developer = {"}
                </motion.div>

                <h1
                    className="font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent animate-gradient drop-shadow-lg mb-6
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words"
                >
                    Rafael Bogos
                </h1>

                {/* Typing effect */}
                <div className="h-16 sm:h-20 flex items-center justify-center mb-8 px-4">
                    <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium break-words text-center">
                        <span className="font-code text-cyan-400">role:</span>{" "}
                        <span className="text-purple-400">"{displayText}"</span>
                        <span className="animate-pulse text-cyan-400">|</span>
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-code text-cyan-400 text-sm sm:text-base mb-8"
                >
                    {"};"}
                </motion.div>

                <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 mb-8 font-code">
                    <span className="text-green-400">//</span> Transformando ideias em código
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const el = document.getElementById("projects");
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition font-code"
                    >
                        {"<Ver Projetos />"}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const el = document.getElementById("contact");
                            if (el) {
                                el.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition font-code"
                    >
                        {"<Contato />"}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
}
