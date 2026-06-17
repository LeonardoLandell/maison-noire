import Link from "next/link";
import { VideoBackground } from "./video-background";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <VideoBackground />

      <div className="hero-overlay" />

      <div className="hero-vignette" />

      <div className="container-editorial relative z-20 flex h-full items-end pb-24 md:pb-32">
        <div className="max-w-4xl">
          <span className="hero-label">MAISON NOIRE • AUTUMN WINTER 2026</span>

          <h1 className="hero-title">
            AUTUMN
            <br />
            WINTER
          </h1>

          <p className="hero-description">
            Inspired by the quiet mornings of Lake Como, the textures of Italian
            countryside and timeless craftsmanship.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#collection" className="hero-primary-button">
              Explore Collection
            </Link>

            <Link href="#editorial" className="hero-secondary-button">
              View Editorial
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
      </div>
    </section>
  );
}
