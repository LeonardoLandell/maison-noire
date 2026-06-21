"use client";

import { useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "@/app/campanha/Campaing.css";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCIAS = [
  {
    palavra: "DESKTOP",
    titulo: "Projetada para criar impacto.",
    descricao:
      "A experiência completa da Maison Noire, onde narrativa, direção de arte e produto coexistem em uma composição cinematográfica.",
    imagem: "/images/modelo-dask.png",
  },

  {
    palavra: "TABLET",
    titulo: "Equilíbrio entre leitura e atmosfera.",
    descricao:
      "Uma experiência adaptada para um formato mais íntimo, preservando a identidade visual e a elegância da campanha.",
    imagem: "/images/modelo-tab02.png",
  },

  {
    palavra: "MOBILE",
    titulo: "Elegância em movimento.",
    descricao:
      "Desenvolvida para acompanhar o usuário em qualquer contexto sem perder sofisticação, presença visual e refinamento.",
    imagem: "/images/modelo-mob.png",
  },
];

export function ResponsiveExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) return;

      const chapters = gsap.utils.toArray<HTMLElement>(
        ".responsive-experience__chapter",
      );

      const words = gsap.utils.toArray<HTMLElement>(
        ".responsive-experience__word",
      );

      const devices = gsap.utils.toArray<HTMLElement>(
        ".responsive-experience__device",
      );

      const contents = gsap.utils.toArray<HTMLElement>(
        ".responsive-experience__content",
      );

      gsap.set(chapters, {
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(chapters[0], {
        opacity: 1,
        scale: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      chapters.forEach((chapter, index) => {
        if (index === 0) return;

        tl.to(
          chapters[index - 1],
          {
            opacity: 0,
            scale: 0.85,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          chapter,
          {
            opacity: 0,
            scale: 0.85,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          words[index],
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          devices[index],
          {
            opacity: 0,
            y: 120,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          contents[index],
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          index,
        );
      });

      devices.forEach((device) => {
        gsap.to(device, {
          y: -14,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      id="responsive-experience"
      className="responsive-experience"
      aria-label="Experiência Responsiva Maison Noire"
    >
      <div className="responsive-experience__wrapper">
        <div className="responsive-experience__label">
          EXPERIÊNCIA RESPONSIVA
        </div>

        <div className="responsive-experience__chapters">
          {EXPERIENCIAS.map((item, index) => (
            <div
              key={item.palavra}
              className="responsive-experience__chapter"
              style={{
                opacity: index === 0 ? 1 : 0,
              }}
            >
              <div className="responsive-experience__word">{item.palavra}</div>

              <div className="responsive-experience__glow" />

              <div className="responsive-experience__device">
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 90vw, 75vw"
                />
              </div>

              <div className="responsive-experience__content">
                <h2>{item.titulo}</h2>

                <p>{item.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
