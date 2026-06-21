"use client";

import "@/app/campanha/Campaing.css";

export function CampaignHero() {
  const scrollToOverview = () => {
    const section = document.getElementById("campaign-overview");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">
      {/* Imagem */}
      <div
        className="hero__image"
        style={{
          backgroundImage: "url('/images/hero-campanha.png')",
        }}
      />

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Vinheta */}
      <div className="hero__vignette" />

      {/* Conteúdo */}
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__label">ESTUDO DE CAMPANHA DIGITAL</span>

          <div className="hero__season">
            <div className="hero__season-line" />

            <span className="hero__season-text">OUTONO / INVERNO 2026</span>
          </div>

          <h1 className="hero__title">
            MAISON
            <br />
            NOIRE
          </h1>

          <p className="hero__description">
            Inspirada pela herança cultural italiana e pela sofisticação
            silenciosa do movimento quiet luxury.
          </p>

          <button onClick={scrollToOverview} className="hero__button">
            INICIAR EXPERIÊNCIA
          </button>
        </div>
      </div>

      {/* Indicador */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">DESÇA PARA EXPLORAR</span>

        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
