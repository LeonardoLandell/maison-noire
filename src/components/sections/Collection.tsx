import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

const pillars = [
  {
    number: "01",
    title: "Alfaiataria",
    description:
      "Peças construídas para atravessar o tempo, não apenas as estações.",
    image: "/images/01-alfaiataria.png",
  },
  {
    number: "02",
    title: "Matérias Naturais",
    description:
      "Texturas selecionadas pela sua origem, conforto e permanência.",
    image: "/images/02-material.png",
  },
  {
    number: "03",
    title: "Herança Italiana",
    description:
      "Arquitetura, paisagem e tradição compartilhando a mesma linguagem.",
    image: "/images/03-herança.png",
  },
  {
    number: "04",
    title: "Elegância Silenciosa",
    description:
      "Uma interpretação do luxo onde presença fala mais alto que excesso.",
    image: "/images/04-elegancia.png",
  },
];

export function Collection() {
  return (
    <section id="collection" className="py-32 lg:py-40">
      <div className="container-editorial">
        <FadeUp>
          <span className="eyebrow">Coleção</span>

          <h2 className="editorial-title mt-8">OUTONO INVERNO 2026</h2>

          <p className="body-large mt-10 max-w-2xl">
            Inspirada pelas paisagens do norte da Itália, onde arquitetura,
            natureza e artesanato compartilham a mesma linguagem.
          </p>
        </FadeUp>

        <div className="mt-32 space-y-32">
          {pillars.map((pillar, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={pillar.number}
                className={`
                  grid
                  gap-12
                  lg:grid-cols-2
                  lg:items-center
                  ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
                `}
              >
                <FadeUp>
                  <div className="collection-image-wrapper">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      width={900}
                      height={1200}
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      className="collection-image"
                    />
                  </div>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <div className="max-w-lg">
                    <span className="collection-number">{pillar.number}</span>

                    <h3 className="collection-title">{pillar.title}</h3>

                    <p className="collection-description">
                      {pillar.description}
                    </p>
                  </div>
                </FadeUp>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
