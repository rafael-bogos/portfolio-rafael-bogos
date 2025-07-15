"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" }); // margem pra antecipar

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 my-20 bg-black text-white"
        >
            <motion.div
                className="max-w-3xl text-center"
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-500">
                    Sobre mim
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Sou desenvolvedor Full Stack em formação, dedicado a criar aplicações
                    funcionais e intuitivas. Estudo Análise e Desenvolvimento de Sistemas
                    e busco sempre melhorar minhas habilidades em tecnologia e arquitetura de software.
                </p>
            </motion.div>
        </section>
    );
}
