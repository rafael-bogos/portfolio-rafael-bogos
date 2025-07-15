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
            className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20 flex flex-col items-center justify-center"
        >
            {/* Terminal typing style */}
            <div className="w-full max-w-3xl mb-10">
                <div className="bg-black text-green-400 font-mono p-4 rounded-lg shadow-lg text-[12px] sm:text-lg">
                    <span className="text-purple-500">{"~$ "}</span>
                    {typedText}
                    <span className="animate-pulse">|</span>
                </div>
            </div>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col space-y-6"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu e-mail"
                    className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Sua mensagem"
                    className="p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    required
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                )}

                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded transition-colors cursor-pointer"
                >
                    Enviar mensagem
                </button>
            </motion.form>
        </section>
    );
}
