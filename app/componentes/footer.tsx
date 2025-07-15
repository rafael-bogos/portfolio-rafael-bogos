import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gradient-to-t from-[#1a002a] via-black to-[#1a002a] text-white py-12 px-6 select-none">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* Logo / Nome */}
                <div className="text-purple-400 font-extrabold text-2xl tracking-widest">
                Rafael | Universo do Desenvolvimento
                </div>

                {/* Slogan */}
                <p className="text-gray-400 italic max-w-md text-center md:text-left">
                    Navegando pelo universo do código com criatividade e paixão.
                </p>

                {/* Ícones sociais */}
                <div className="flex space-x-8">
                    {[{
                        icon: <FaGithub />,
                        link: "https://github.com/seuusuario",
                        label: "GitHub",
                    }, {
                        icon: <FaLinkedin />,
                        link: "https://linkedin.com/in/seuusuario",
                        label: "LinkedIn",
                    }, {
                        icon: <FaTwitter />,
                        link: "https://twitter.com/seuusuario",
                        label: "Twitter",
                    }, {
                        icon: <FaEnvelope />,
                        link: "mailto:seuemail@exemplo.com",
                        label: "Email",
                    }].map(({ icon, link, label }) => (
                        <a
                            key={label}
                            href={link}
                            aria-label={label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-2xl transform hover:scale-110"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Créditos */}
            <div className="mt-10 border-t border-purple-800 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Rafael Bogos. Todos os direitos reservados.
            </div>
        </footer>
    );
}
