import { div } from "framer-motion/client";
import Image from "next/image";
import { Hero } from "./componentes/hero";
import { About } from "./componentes/about";
import StarsBackground from "./componentes/starsBackground";
import { Projects } from "./componentes/projects";
import { Skills } from "./componentes/skills";
import { Contact } from "./componentes/contact";
import { Footer } from "./componentes/footer";
import { Teste } from "./componentes/componente-teste";

export default function Home() {
  return (
    <>
      <main className="relative z-10">

        {/* <Teste /> */}

        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
