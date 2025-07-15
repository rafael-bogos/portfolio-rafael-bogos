"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "lottie-react";
import rocketAnimation from "@/public/rocket-launch.json";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";
import { loadBasic } from "tsparticles-basic";
import { loadStarShape } from "tsparticles-shape-star";

export function Hero() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadBasic(engine);
        await loadStarShape(engine);
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-black/80 to-gray-900/70 overflow-hidden"
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
            >

                <div className="relative inline-block mb-6">
                    <h1
                        className="font-bold text-purple-500 drop-shadow-lg
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        Olá, eu sou o Rafael
                    </h1>

                    <span
                        className={`
              absolute top-1/2 -translate-y-1/2
              right-[-3.5rem] sm:right-[-4rem] md:right-[-5rem] lg:right-[-6rem] xl:right-[-7rem]
              w-12 sm:w-16 md:w-20 lg:w-28 xl:w-36
              h-12 sm:h-16 md:h-20 lg:h-28 xl:h-36
            `}
                    >
                        <Lottie animationData={rocketAnimation} loop={true} />
                    </span>
                </div>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto px-2 mb-8">
                    Desenvolvedor Full Stack com foco em tecnologia e inovação.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const el = document.getElementById("projects");
                        if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    className="mt-8 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-600 hover:shadow-cyan-700 transition cursor-pointer"
                >
                    Ver Projetos
                </motion.button>
            </motion.div>
        </section>
    );
}
