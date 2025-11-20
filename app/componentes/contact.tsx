"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { z } from "zod";

export function Contact() {
    const initialText = "Entre em contato comigo...";
    const successMessage = "Mensagem enviada com sucesso! Obrigado :)";

    const [typedText, setTypedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTypingSuccess, setIsTypingSuccess] = useState(false);

    const contactSchema = z.object({
        name: z.string().min(2, "Nome muito curto"),
        email: z.string().email("E-mail inválido"),
        message: z.string().min(5, "Mensagem muito curta"),
    });

    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

    // Reinicia animação da mensagem inicial sempre que entrar em view e não estiver digitando sucesso
    useEffect(() => {
        if (isInView && !isTypingSuccess) {
            setTypedText("");
            setIndex(0);
        }
    }, [isInView, isTypingSuccess]);

    // Lógica de digitação
    useEffect(() => {
        const currentText = isTypingSuccess ? successMessage : initialText;

        if (index < currentText.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + currentText.charAt(index));
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, isTypingSuccess]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = contactSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors: typeof errors = {};

            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof typeof errors;
                fieldErrors[field] = err.message;
            });

            setErrors(fieldErrors);
            return;
        }

        const formPayload = new FormData();
        formPayload.append("name", formData.name);
        formPayload.append("email", formData.email);
        formPayload.append("message", formData.message);
        formPayload.append("_subject", "Novo contato via site");
        formPayload.append("_captcha", "false");

        fetch("https://formsubmit.co/rafaelbogosbr10@gmail.com", {
            method: "POST",
            body: formPayload,
        })
            .then(() => {
                setTypedText("");
                setIndex(0);
                setIsTypingSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Erro ao enviar:", error);
            });
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-b from-black to-[#0a0a0a] text-white px-6 py-20 flex flex-col items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Vamos Conversar?
                </h2>
                <p className="text-gray-400 font-code">
                    <span className="text-green-400">//</span> Envie uma mensagem e vamos criar algo incrível
                </p>
            </motion.div>

            {/* Terminal typing style */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-3xl mb-10"
            >
                <div className="bg-gray-900/90 backdrop-blur-sm border border-purple-500/20 text-green-400 font-code p-5 rounded-lg shadow-lg text-sm sm:text-base">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-2 text-gray-500 text-xs">terminal</span>
                    </div>
                    <div>
                        <span className="text-purple-400">rafael@portfolio</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-gray-500">$ </span>
                        {typedText}
                        <span className="animate-pulse">|</span>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-3xl bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 p-8 rounded-lg flex flex-col space-y-6"
            >
                <div>
                    <label className="block text-sm font-code text-gray-400 mb-2">
                        <span className="text-purple-400">const</span> name <span className="text-cyan-400">=</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-code"
                        required
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-2 font-code">{errors.name}</p>}
                </div>

                <div>
                    <label className="block text-sm font-code text-gray-400 mb-2">
                        <span className="text-purple-400">const</span> email <span className="text-cyan-400">=</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-code"
                        required
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-2 font-code">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-sm font-code text-gray-400 mb-2">
                        <span className="text-purple-400">const</span> message <span className="text-cyan-400">=</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Sua mensagem aqui..."
                        className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none font-code"
                        required
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-2 font-code">{errors.message}</p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-lg transition-all shadow-lg hover:shadow-purple-500/50 font-code cursor-pointer"
                >
                    {"sendMessage()"}
                </motion.button>
            </motion.form>
        </section>
    );
}
