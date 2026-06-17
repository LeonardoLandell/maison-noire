import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";

export function Closing() {
  return (
    <section id="closing" className="relative py-40 lg:py-56">
      <div className="container-editorial">
        <FadeUp>
          <div className="closing-image-wrapper">
            <Image
              src="/images/editorial-02.png"
              alt="Maison Noire Closing"
              width={1600}
              height={2000}
              className="closing-image"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="closing-content">
            <span className="eyebrow">Maison Noire</span>

            <h2 className="closing-title">
              OUTONO INVERNO
              <br />
              2026
            </h2>

            <p className="closing-description">
              Uma coleção inspirada pelas paisagens do norte da Itália, onde
              arquitetura, natureza e artesanato compartilham a mesma linguagem.
            </p>

            <Link href="#collection" className="closing-button">
              Explorar Coleção
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
