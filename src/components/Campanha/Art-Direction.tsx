"use client";

import { useRef } from "react";

import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CAPITULOS = [
  {
    palavra: "HERANÇA",
    titulo: "Uma homenagem à herança italiana.",
    descricao:
      "Paisagens, arquitetura e tradição reinterpretadas através da moda contemporânea.",
    imagem: "/images/direection-art.png",
  },
  {
    palavra: "ELEGÂNCIA",
    titulo: "Luxo sem excessos.",
    descricao:
      "Silhuetas refinadas, presença silenciosa e uma estética construída para atravessar o tempo.",
    imagem: "/images/direction-art-editorial.png",
  },
  {
    palavra: "TEXTURA",
    titulo: "A matéria-prima em evidência.",
    descricao:
      "Tecidos, detalhes e acabamentos revelam a essência do artesanato contemporâneo.",
    imagem: "/images/directionart-texture.png",
  },
  {
    palavra: "ARTESANATO",
    titulo: "Construído com intenção.",
    descricao:
      "Precisão, cuidado e refinamento traduzidos em cada elemento visual da experiência.",
    imagem: "/images/directionart-craft.png",
  },
];

export function ArtDirection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const chapters = gsap.utils.toArray<HTMLElement>(".art-direction__chapter");

    const words = gsap.utils.toArray<HTMLElement>(".art-direction__word");

    const images = gsap.utils.toArray<HTMLElement>(
      ".art-direction__image--main",
    );

    const contents = gsap.utils.toArray<HTMLElement>(".art-direction__content");

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

    gsap.set(chapters, {
      opacity: 0,
    });

    gsap.set(chapters[0], {
      opacity: 1,
    });

    chapters.forEach((chapter, index) => {
      if (index === 0) return;

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
        images[index],
        {
          scale: 1.08,
          y: 80,
        },
        {
          scale: 1,
          y: 0,
          duration: 1,
        },
        index,
      );

      tl.fromTo(
        contents[index],
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        index,
      );
    });

    images.forEach((image) => {
      gsap.to(image, {
        y: -12,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="art-direction"
      aria-label="Direção de arte Maison Noire"
    >
      {" "}
      <div className="art-direction__wrapper">
        {" "}
        <div className="art-direction__label">DIREÇÃO DE ARTE </div>
        ```
        <div className="art-direction__chapters">
          {CAPITULOS.map((item, index) => (
            <div
              key={item.palavra}
              className="art-direction__chapter"
              style={{
                opacity: index === 0 ? 1 : 0,
              }}
            >
              <div className="art-direction__word">{item.palavra}</div>

              <div className="art-direction__glow" />

              <div className="art-direction__media">
                <div className="art-direction__image art-direction__image--main">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 75vw"
                  />
                </div>
              </div>

              <div className="art-direction__content">
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
