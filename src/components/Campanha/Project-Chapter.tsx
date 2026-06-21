"use client";

import { useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "@/app/campanha/Campaing.css";

gsap.registerPlugin(ScrollTrigger);

const CHAPTERS = [
  {
    numero: "01",
    palavra: "HERANÇA",
    titulo: "Construindo o universo visual.",
    descricao:
      "Paisagens italianas, tradição europeia e elegância silenciosa reinterpretadas através de uma linguagem contemporânea.",
    imagem: "/images/direection-art.png",
  },

  {
    numero: "02",
    palavra: "ELEGÂNCIA",
    titulo: "Luxo sem excessos.",
    descricao:
      "Uma estética construída através de proporções refinadas, presença visual e sofisticação atemporal.",
    imagem: "/images/directionart-elegance.png",
  },

  {
    numero: "03",
    palavra: "TEXTURA",
    titulo: "A matéria-prima como protagonista.",
    descricao:
      "Tecidos, costuras e acabamentos ganham destaque para comunicar autenticidade e excelência.",
    imagem: "/images/directionart-texture.png",
  },

  {
    numero: "04",
    palavra: "ARTESANATO",
    titulo: "Precisão em cada detalhe.",
    descricao:
      "Cada elemento visual foi concebido para transmitir cuidado, refinamento e intenção.",
    imagem: "/images/directionart-craft.png",
  },

  {
    numero: "05",
    palavra: "ARQUITETURA",
    titulo: "Inspirado por espaços atemporais.",
    descricao:
      "A monumentalidade da arquitetura italiana influencia ritmo, composição e atmosfera.",
    imagem: "/images/direction-artarchiteture.png",
  },

  {
    numero: "06",
    palavra: "EDITORIAL",
    titulo: "A síntese da campanha.",
    descricao:
      "Moda, narrativa visual e experiência digital convergem em uma única linguagem.",
    imagem: "/images/direction-art-editorial.png",
  },
];

export function ProjectChapters() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const chapters = gsap.utils.toArray<HTMLElement>(".project-chapter");

      const indicators = gsap.utils.toArray<HTMLElement>(".project-progress");

      const images = gsap.utils.toArray<HTMLElement>(".project-chapter__image");

      const contents = gsap.utils.toArray<HTMLElement>(
        ".project-chapter__content",
      );

      const words = gsap.utils.toArray<HTMLElement>(".project-chapter__word");

      gsap.set(chapters, {
        opacity: 0,
      });

      gsap.set(chapters[0], {
        opacity: 1,
      });

      indicators[0]?.classList.add("active");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=6000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      chapters.forEach((chapter, index) => {
        if (index === 0) return;

        tl.call(
          () => {
            indicators.forEach((item) => item.classList.remove("active"));

            indicators[index]?.classList.add("active");
          },
          [],
          index,
        );

        tl.to(
          chapters[index - 1],
          {
            opacity: 0,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          chapter,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          images[index],
          {
            scale: 1.08,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          contents[index],
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
          index,
        );

        tl.fromTo(
          words[index],
          {
            opacity: 0,
            scale: 0.96,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
          },
          index,
        );
      });
    },
    {
      scope: sectionRef,
    },
  );
  return (
    <section
      ref={sectionRef}
      className="project-chapters"
      aria-label="Capítulos da Campanha Maison Noire"
    >
      {" "}
      <div className="project-chapters__progress">
        {CHAPTERS.map((chapter, index) => (
          <div
            key={chapter.numero}
            className={`project-progress ${index === 0 ? "active" : ""}`}
          >
            {" "}
            <span className="project-progress__dot" />
            ```
            <span className="project-progress__number">{chapter.numero}</span>
            <span className="project-progress__label">{chapter.palavra}</span>
          </div>
        ))}
      </div>
      {CHAPTERS.map((chapter) => (
        <div key={chapter.numero} className="project-chapter">
          <div className="project-chapter__word">{chapter.palavra}</div>

          <div className="project-chapter__image">
            <Image
              src={chapter.imagem}
              alt={chapter.palavra}
              fill
              sizes="100vw"
            />
          </div>

          <div className="project-chapter__content">
            <span>CAPÍTULO {chapter.numero}</span>

            <h2>{chapter.titulo}</h2>

            <p>{chapter.descricao}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
