import Link from "next/link";
import { VideoBackground } from "./video-background";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden">
      <VideoBackground />

      <div className="hero-overlay" />

      <div className="hero-vignette" />

      <div className="container-editorial relative z-20 flex min-h-svh items-end pb-24 pt-36 md:pb-32">
        <div className="max-w-4xl">
          <span className="hero-label">MAISON NOIRE • Outono|Inverno 2026</span>

          <h1 className="hero-title">
            Outono
            <br />
            Inverno
          </h1>

          <p className="hero-description">
            Inspirada pelas manhãs silenciosas do Lago di Como, pelas texturas
            do interior italiano e pela elegância atemporal da alfaiataria
            artesanal.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#collection" className="hero-primary-button">
              Explorar Coleção
            </Link>

            <Link href="#editorial" className="hero-secondary-button">
              Ver Editorial
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>EXPLORAR</span>
      </div>
    </section>
  );
}
