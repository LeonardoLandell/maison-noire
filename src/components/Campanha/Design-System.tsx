"use client";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function DesignSystem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;

    if (!section) return;

    gsap.from(".design-system__intro", {
      y: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".design-system__intro",
        start: "top 80%",
      },
    });

    gsap.from(".type-showcase", {
      y: 80,
      opacity: 0,
      stagger: 0.25,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".design-system__typography",
        start: "top 80%",
      },
    });

    gsap.from(".color-bar", {
      scaleX: 0,
      transformOrigin: "left center",
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".design-system__colors",
        start: "top 80%",
      },
    });

    gsap.from(".principle", {
      y: 50,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".design-system__principles",
        start: "top 80%",
      },
    });

    gsap.from(".language-card", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".design-system__language",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} id="design-system" className="design-system">
      {" "}
      <div className="design-system__container">
        {" "}
        <div className="design-system__intro">
          {" "}
          <span className="design-system__label">DESIGN SYSTEM </span>
          <h2 className="design-system__title">
            Uma linguagem visual construída para durar.
          </h2>
          <p className="design-system__description">
            Cada elemento foi concebido para preservar elegância, equilíbrio e
            sofisticação em toda a experiência digital da Maison Noire.
          </p>
        </div>
        <div className="design-system__typography">
          <div className="type-showcase">
            <div className="type-showcase__sample">Maison Noire</div>

            <div>
              <h3>Tipografia Editorial</h3>

              <p>Utilizada para criar presença, contraste e sofisticação.</p>
            </div>
          </div>

          <div className="type-showcase">
            <div className="type-showcase__sample type-showcase__sample--sans">
              Uma experiência editorial construída para existir em qualquer
              tela.
            </div>
            <div>
              <h3>Tipografia de Interface</h3>

              <p>Desenvolvida para clareza, legibilidade e ritmo visual.</p>
            </div>
          </div>
        </div>
        <div className="design-system__colors">
          <div className="color-bar color-bar--black">
            <span>Graphite Black</span>
          </div>

          <div className="color-bar color-bar--ivory">
            <span>Warm Ivory</span>
          </div>

          <div className="color-bar color-bar--gold">
            <span>Champagne Gold</span>
          </div>

          <div className="color-bar color-bar--stone">
            <span>Stone Grey</span>
          </div>
        </div>
        <div className="design-system__principles">
          <div className="principle">
            <span>01</span>
            <h3>Luxo Silencioso</h3>
          </div>

          <div className="principle">
            <span>02</span>
            <h3>Equilíbrio Editorial</h3>
          </div>

          <div className="principle">
            <span>03</span>
            <h3>Espaço Negativo</h3>
          </div>

          <div className="principle">
            <span>04</span>
            <h3>Elegância Atemporal</h3>
          </div>

          <div className="principle">
            <span>05</span>
            <h3>Sofisticação Digital</h3>
          </div>
        </div>
        <div className="design-system__language">
          <div className="language-card">
            <h3>Contraste</h3>
          </div>

          <div className="language-card">
            <h3>Respiração</h3>
          </div>

          <div className="language-card">
            <h3>Precisão</h3>
          </div>

          <div className="language-card">
            <h3>Narrativa</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
