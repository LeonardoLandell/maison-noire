import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

export function Editorial() {
  return (
    <section id="editorial" className="relative py-40 lg:py-56">
      <div className="container-editorial">
        <FadeUp>
          <div className="mb-24">
            <span className="eyebrow">Editorial</span>
          </div>
        </FadeUp>

        {/* BLOCO 01 */}

        <FadeUp>
          <div className="editorial-panel">
            <Image
              src="/images/editorial-01.png"
              alt="Maison Noire Editorial"
              width={1600}
              height={2000}
              sizes="(max-width: 1440px) 100vw, 1312px"
              className="editorial-image"
            />

            <div className="editorial-overlay">
              <h2 className="editorial-word">HERANÇA</h2>
            </div>
          </div>
        </FadeUp>

        {/* BLOCO 02 */}

        <FadeUp delay={0.2}>
          <div className="editorial-text-block">
            <span className="editorial-small-word">MOVIMENTO</span>

            <p className="editorial-paragraph">
              Inspirada pelas paisagens silenciosas do norte da Itália, a Maison
              Noire explora uma relação entre arquitetura, matéria e passagem do
              tempo.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
