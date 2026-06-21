"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "@/app/campanha/Campaing.css";

gsap.registerPlugin(ScrollTrigger);

export function CampaignFinalFrame() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".campaign-final__reveal", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="campaign-final">
      <div className="campaign-final__content">
        <span className="campaign-final__label campaign-final__reveal">
          MAISON NOIRE
        </span>

        <h2 className="campaign-final__title campaign-final__reveal">
          Autumn / Winter 2026
        </h2>

        <p className="campaign-final__description campaign-final__reveal">
          Uma exploração entre moda, narrativa visual e experiências digitais.
        </p>

        <div className="campaign-final__actions">
          <Link
            href="/"
            className="campaign-final__button campaign-final__button--primary"
          >
            Explorar Landing Page
          </Link>

          <a
            href="https://leonardolandell-dev.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="campaign-final__button"
          >
            Explorar Portfólio
          </a>
        </div>
      </div>
    </section>
  );
}
