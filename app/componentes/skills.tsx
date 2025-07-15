"use client";

import { motion, useInView } from "framer-motion";
import { JSX, useRef } from "react";
import {
    FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const frontEndSkills = [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
];

const backEndSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-100px",
    });

    const renderSkill = (name: string, icon: JSX.Element, index: number) => (
        <motion.div
            key={name}
            className="flex flex-col items-center justify-center gap-2 p-8 bg-gray-900 rounded-full shadow-md hover:shadow-purple-500/50 transition-all"
            initial={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
                duration: 2,
                delay: index * 0.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <div className="text-6xl">{icon}</div>
            <p className="text-gray-300 font-medium text-lg">{name}</p>
        </motion.div>


    );

    return (
        <section
            id="skills"
            ref={ref}
            className="min-h-screen bg-gradient-to-b from-[#1a002a] to-black text-white px-6 sm:px-12 py-24 flex flex-col items-center"
        >
            <h2 className="text-5xl font-bold text-purple-500 mb-40">Domínios</h2>

            <div className="w-full max-w-5xl mb-28">
                <h3 className="text-5xl font-extrabold text-purple-400 mb-16 text-center flex items-center justify-center gap-4 pb-4" style={{ borderBottom: "2px solid rgba(139, 92, 246, 0.4)" }}>
                    <FaCode className="text-purple-400" />
                    Front-End
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
                    {frontEndSkills.map((skill, index) =>
                        renderSkill(skill.name, skill.icon, index)
                    )}
                </div>
            </div>

            <div className="w-full max-w-5xl">
                <h3 className="text-5xl font-extrabold text-purple-400 mb-16 text-center flex items-center justify-center gap-4 pb-4" style={{ borderBottom: "2px solid rgba(139, 92, 246, 0.4)" }}>
                    <FaCode className="text-purple-400" />
                    Back-End
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
                    {backEndSkills.map((skill, index) =>
                        renderSkill(skill.name, skill.icon, index)
                    )}
                </div>
            </div>
        </section>

    );
}
