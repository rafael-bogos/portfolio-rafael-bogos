"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadStarShape } from "tsparticles-shape-star";

export default function StarsBackground() {
  const [pageHeight, setPageHeight] = useState(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
    await loadStarShape(engine);
  }, []);

  useEffect(() => {
    function updateHeight() {
      // pega a altura total do documento
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      setPageHeight(height);
    }

    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", updateHeight); // atualiza ao scroll também
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", updateHeight);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full -z-10 pointer-events-none"
      style={{ height: pageHeight || "100vh" }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          detectRetina: true,
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 2 } },
            move: {
              enable: true,
              speed: 0.2,
              random: true,
              direction: "none",
              outModes: { default: "out" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: false },
              onClick: { enable: false },
            },
          },
        }}
      />
    </div>
  );
}
