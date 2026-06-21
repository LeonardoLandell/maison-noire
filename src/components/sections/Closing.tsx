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
              sizes="(max-width: 1440px) 100vw, 1312px"
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
              Uma exploração entre moda, narrativa visual e experiências
              digitais inspiradas pela elegância silenciosa da tradição europeia
              contemporânea.
            </p>

            <div className="closing-actions">
              <Link
                href="/campanha"
                className="closing-button closing-button--primary"
              >
                Explorar Campanha
              </Link>

              <Link
                href="https://leonardolandell-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="closing-button"
              >
                Explorar Portfólio
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
