"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export function Footer() {
    const icons = [
        {
            icon: <FaGithub />,
            link: "https://github.com/rafael-bogos",
            label: "GitHub",
        },
        {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/rafael-bogos",
            label: "LinkedIn",
        },
        {
            icon: <FaEnvelope />,
            link: "mailto:rafaelbogosbr10@gmail.com",
            label: "Email",
        },
    ];

    return (
        <footer className="bg-gradient-to-t from-[#0a0a0a] via-black to-black text-white py-16 px-6 border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 mb-12">
                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3"
                    >
                        <VscCode className="text-purple-500 text-4xl" />
                        <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent font-code">
                                {"<RafaelBogos />"}
                            </h3>
                            <p className="text-gray-500 text-sm font-code">Desenvolvedor Full Stack</p>
                        </div>
                    </motion.div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center max-w-md"
                    >
                        <p className="text-gray-400 font-code text-sm">
                            <span className="text-green-400">//</span> Transformando café em código desde 2024
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex space-x-6"
                    >
                        {icons.map(({ icon, link, label }) => (
                            <motion.a
                                key={label}
                                href={link}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-400 transition-colors text-2xl"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-gray-500 font-code"
                    >
                        © {new Date().getFullYear()} Rafael Bogos. Todos os direitos reservados.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-gray-500 flex items-center gap-2 font-code"
                    >
                        Feito com <FaHeart className="text-red-500 animate-pulse" /> e muito código
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}
