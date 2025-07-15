"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import imagem1 from "@/public/image-1.jpg"
import imagem2 from "@/public/image-2.jpg"
import imagem3 from "@/public/image-3.jpg"
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Projeto Galáxia",
        description: "Um app que conecta estrelas.",
        image: imagem1,
        link: "#",
    },
    {
        id: 2,
        title: "Orbit Explorer",
        description: "Exploração espacial virtual.",
        image: imagem2,
        link: "#",
    },
    {
        id: 3,
        title: "Cosmo Shop",
        description: "E-commerce galáctico.",
        image: imagem3,
        link: "#",
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
            <h2 className="text-5xl font-bold text-purple-500 mb-16">Projetos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
                {projects.map(({ id, title, description, image, link }, index) => (
                    <motion.a
                        href={link}
                        key={id}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 rounded-xl overflow-hidden shadow-lg flex flex-col transition-colors duration-300 hover:bg-gray-800"
                        initial={{ opacity: 0, y: 40, rotate: -3 }}
                        animate={
                            isInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                    rotate: [0, 2, -2, 1, 0], // leve "balanço galáctico"
                                }
                                : { opacity: 0, y: 40, rotate: -3 }
                        }
                        transition={{
                            duration: 0.8,
                            delay: index * 0.2, // <- aqui está o atraso entre os cards
                            ease: "easeInOut",
                          }}
                          
                        whileHover={{ scale: 1.05, rotate: 0 }}
                    >
                        <Image
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-purple-400 mb-2">
                                {title}
                            </h3>
                            <p className="text-gray-300">{description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
