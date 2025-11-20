import { Hero } from "./componentes/hero";
import { About } from "./componentes/about";
import { Projects } from "./componentes/projects";
import { Skills } from "./componentes/skills";
import { Contact } from "./componentes/contact";
import { Footer } from "./componentes/footer";
import { Navbar } from "./componentes/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 overflow-x-hidden">
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
