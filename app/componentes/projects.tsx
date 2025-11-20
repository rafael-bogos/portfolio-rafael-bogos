"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";

// Você pode adicionar seus projetos reais aqui
const projects = [
    {
        id: 1,
        title: "Captured Moments",
        description: "O Captured Moments é um aplicativo web feito para guardar momentos especiais",
        tech: [
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        ],
        github: "https://github.com/rafael-bogos/captured-moments-client",
        demo: "#",
        hasDemo: false,
        featured: true,
    },
];

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-100px",
    });

    return (
        <section
            id="projects"
            className="min-h-screen bg-gradient-to-b from-black to-[#1a002a] text-white px-8 py-20 flex flex-col items-center"
            ref={ref}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Projetos
                </h2>
                <p className="text-gray-400 font-code">
                    <span className="text-green-400">//</span> Construindo o futuro, um projeto por vez
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-cyan-500/50 transition-all flex flex-col w-full max-w-md"
                        initial={{ opacity: 0, y: 40, rotate: -3 }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                }
                                : { opacity: 0, y: 40, rotate: -3 }
                        }
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2,
                            ease: "easeInOut",
                        }}
                        whileHover={{ y: -10, borderColor: "rgba(6, 182, 212, 0.8)" }}
                    >
                        {/* Project header with badge */}
                        <div className="p-6 relative">
                            {project.featured && (
                                <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Destaque
                                </span>
                            )}
                            
                            <h3 className="text-2xl font-bold text-purple-400 mb-3 font-code">
                                {"<"}{project.title}{" />"}
                            </h3>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 mb-2 font-code">Tech Stack:</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.div
                                            key={techIndex}
                                            className="flex items-center gap-2 bg-gray-800/50 px-3 py-1.5 rounded-lg border border-gray-700"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <span className="text-xl">{tech.icon}</span>
                                            <span className="text-sm text-gray-300">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex gap-4">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg transition-colors font-code text-sm"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-lg" />
                                    Código
                                </motion.a>
                                {project.hasDemo && (
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-4 py-2.5 rounded-lg transition-all font-code text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="text-sm" />
                                        Demo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* GitHub CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1 }}
                className="mt-16 text-center"
            >
                <p className="text-gray-400 mb-4">Veja mais projetos no meu GitHub</p>
                <motion.a
                    href="https://github.com/rafael-bogos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all font-code"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub className="text-xl" />
                    @rafael-bogos
                </motion.a>
            </motion.div>
        </section>
    );
}
