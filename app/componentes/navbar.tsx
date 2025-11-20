"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const navBackground = useTransform(
        scrollY,
        [0, 100],
        ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const menuItems = [
        { name: "Início", id: "hero" },
        { name: "Sobre", id: "about" },
        { name: "Projetos", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contato", id: "contact" },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/rafael-bogos", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/rafael-bogos", label: "LinkedIn" },
        { icon: <FaEnvelope />, href: "mailto:rafaelbogosbr10@gmail.com", label: "Email" },
    ];

    return (
        <motion.nav
            style={{ backgroundColor: navBackground as any }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "shadow-lg backdrop-blur-sm border-b border-purple-500/20" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.button
                        onClick={() => scrollToSection("hero")}
                        className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {"<RB />"}
                    </motion.button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-gray-300 hover:text-purple-400 transition-colors font-medium relative group"
                                whileHover={{ y: -2 }}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Social Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 text-xl transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-white text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-black/95 backdrop-blur-lg border-t border-purple-500/20"
            >
                <div className="px-4 py-6 space-y-4">
                    {menuItems.map((item, index) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors py-2 text-lg"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {item.name}
                        </motion.button>
                    ))}
                    <div className="flex items-center space-x-6 pt-4 border-t border-purple-500/20">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-cyan-400 text-2xl transition-colors"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
}
