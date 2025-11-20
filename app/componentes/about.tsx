"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
import myPhoto from '../../assets/my-photo.jpeg';

const timeline = [
    {
        year: "2025",
        title: "Desenvolvedor Full Stack",
        description: "Criando aplicações web modernas com React, Next.js e Node.js",
        icon: <FaLaptopCode />,
    },
    {
        year: "08/2024",
        title: "Estudante de ADS",
        description: "Análise e Desenvolvimento de Sistemas - Aprofundando conhecimentos em arquitetura de software",
        icon: <FaGraduationCap />,
    },
    {
        year: "Início",
        title: "Primeira Linha de Código",
        description: "Iniciando a jornada no mundo da programação",
        icon: <FaCode />,
    },
];

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });

    return (
        <section
            id="about"
            ref={ref}
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-900/70 to-black text-white"
        >
            <div className="max-w-5xl w-full">
                {/* Header with Photo */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Animated border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-2xl animate-gradient blur-sm"></div>
                            
                            {/* Photo container */}
                            <div className="relative w-full h-full p-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl">
                                <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                                    <Image
                                        src={myPhoto}
                                        alt="Rafael Bogos"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                            Sobre mim
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            Sou desenvolvedor Full Stack em formação, dedicado a criar aplicações
                            funcionais e intuitivas. Estudo Análise e Desenvolvimento de Sistemas
                            e busco sempre melhorar minhas habilidades em tecnologia e arquitetura de software.
                        </p>
                        <p className="text-gray-400 font-code">
                            <span className="text-cyan-400">{"{"}</span>
                            <span className="text-purple-400"> "passion"</span>
                            <span className="text-gray-500">:</span>
                            <span className="text-green-400"> "coding"</span>
                            <span className="text-cyan-400"> {"}"}</span>
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 hidden md:block"></div>

                    <div className="space-y-12">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                                }
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex items-center gap-8 ${
                                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } flex-col`}
                            >
                                {/* Content */}
                                <div
                                    className={`flex-1 ${
                                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                                    } text-center`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 hover:border-cyan-500/50 transition-all"
                                    >
                                        <span className="text-cyan-400 font-code font-bold text-sm">
                                            {item.year}
                                        </span>
                                        <h3 className="text-2xl font-bold text-purple-400 mt-2 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300">{item.description}</p>
                                    </motion.div>
                                </div>

                                {/* Icon */}
                                <div className="relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center text-3xl text-white shadow-lg shadow-purple-500/50"
                                    >
                                        {item.icon}
                                    </motion.div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 font-code mb-4">
                        <span className="text-green-400">//</span> Sempre em busca de novos desafios
                    </p>
                    <motion.div
                        className="inline-flex items-center gap-2 text-purple-400"
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <FaRocket className="text-2xl" />
                        <span className="font-code">Em constante evolução</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
