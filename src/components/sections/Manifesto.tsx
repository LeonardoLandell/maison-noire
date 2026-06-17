import Image from "next/image";
import { FadeUp } from "@/components/ui/fade-up";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 lg:py-40">
      <div className="container-editorial">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <FadeUp>
              <span className="eyebrow">Manifesto</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="editorial-title mt-8">
                O OUTONO NÃO É
                <br />
                UMA ESTAÇÃO.
                <br />
                <br />
                É UMA FORMA
                <br />
                DE VIVER.
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="body-large mt-12 max-w-xl">
                Inspirada pelas paisagens silenciosas do norte da Itália...
              </p>
            </FadeUp>

            <p className="caption mt-10 uppercase">
              Lago di Como · Florença · Interior Italiano
            </p>
          </div>

          <div className="manifesto-image-wrapper">
            <Image
              src="/images/manifesto.png"
              alt="Maison Noire Manifesto"
              width={800}
              height={1200}
              className="
    manifesto-image
    object-cover
    object-top
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
