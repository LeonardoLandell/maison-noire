import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

const materials = [
  {
    title: "Lã",
    label: "100%",
    description:
      "Selecionada pela textura, durabilidade e conforto para acompanhar o ritmo das estações.",
    image: "/images/lã.png",
  },
  {
    title: "Cashmere",
    label: "Premium",
    description:
      "Leveza, suavidade e refinamento em cada detalhe da construção da peça.",
    image: "/images/cashemir.png",
  },
  {
    title: "Pedra Italiana",
    label: "Herança",
    description:
      "Arquitetura, matéria e paisagem servindo como inspiração para formas e proporções.",
    image: "/images/pedra.png",
  },
  {
    title: "Artesanato",
    label: "Detalhe",
    description:
      "Acabamentos desenvolvidos para atravessar gerações sem perder relevância.",
    image: "/images/artesanato.png",
  },
];

export function Materials() {
  return (
    <section id="materials" className="py-32 lg:py-40">
      <div className="container-editorial">
        <FadeUp>
          <span className="eyebrow">Matérias</span>

          <h2 className="editorial-title mt-8">
            A ESSÊNCIA
            <br />
            DA COLEÇÃO
          </h2>
        </FadeUp>

        <div className="mt-24 grid gap-16 lg:grid-cols-2">
          {materials.map((material) => (
            <FadeUp key={material.title}>
              <div className="material-card">
                <Image
                  src={material.image}
                  alt={material.title}
                  width={900}
                  height={1200}
                  className="material-image"
                />

                <div className="mt-8">
                  <span className="material-label">{material.label}</span>

                  <h3 className="material-title">{material.title}</h3>

                  <p className="material-description">{material.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
