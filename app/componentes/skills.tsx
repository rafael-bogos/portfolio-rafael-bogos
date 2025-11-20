"use client";

import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";

const frontEndSkills = [
    { name: "React", icon: <FaReact className="text-cyan-400" />, level: 85 },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, level: 75 },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" />, level: 85 },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
];

const backEndSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 75 },
    { name: "Express", icon: <SiExpress className="text-gray-200" />, level: 70 },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 70 },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: 85 },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-100px",
    });

    const renderSkill = (name: string, icon: JSX.Element, level: number, index: number) => (
        <motion.div
            key={name}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-cyan-500/50 transition-all overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="text-5xl">{icon}</div>
                    <p className="text-gray-300 font-medium text-lg">{name}</p>
                    
                    {/* Progress bar */}
                    <div className="w-full mt-2">
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs text-gray-500 font-code">Proficiência</span>
                            <span className="text-xs text-cyan-400 font-code">{level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen bg-gradient-to-b from-[#1a002a] to-black text-white px-6 sm:px-12 py-24 flex flex-col items-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Skills & Tecnologias
                </h2>
                <p className="text-gray-400 font-code">
                    <span className="text-green-400">//</span> Ferramentas que domino
                </p>
            </motion.div>

            <div className="w-full max-w-6xl space-y-16">
                {/* Front-End Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <VscTerminal className="text-cyan-400 text-3xl" />
                            <h3 className="text-3xl font-bold text-purple-400 font-code">
                                {"Frontend_Development()"}
                            </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-transparent"></div>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {frontEndSkills.map((skill, index) =>
                            renderSkill(skill.name, skill.icon, skill.level, index)
                        )}
                    </div>
                </div>

                {/* Back-End Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <VscTerminal className="text-green-400 text-3xl" />
                            <h3 className="text-3xl font-bold text-purple-400 font-code">
                                {"Backend_Development()"}
                            </h3>
                        </div>
                        <div className="h-px bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-transparent"></div>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {backEndSkills.map((skill, index) =>
                            renderSkill(skill.name, skill.icon, skill.level, index + frontEndSkills.length)
                        )}
                    </div>
                </div>

                {/* Terminal-style quote */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 mt-12"
                >
                    <div className="flex items-start gap-3">
                        <span className="text-cyan-400 font-code text-sm mt-1">$</span>
                        <div className="flex-1">
                            <p className="text-gray-300 font-code text-sm sm:text-base">
                                <span className="text-purple-400">echo</span>{" "}
                                <span className="text-green-400">"Sempre aprendendo novas tecnologias"</span>
                            </p>
                            <p className="text-cyan-400 font-code text-sm mt-2">
                                {">"} Sempre aprendendo novas tecnologias
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
