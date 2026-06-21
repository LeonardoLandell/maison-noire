"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const disciplines = [
  "Direção de arte",
  "Sistema editorial",
  "Experiência responsiva",
];

export function CampaignOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const desktopRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const scene = sceneRef.current;
      const desktop = desktopRef.current;
      const tablet = tabletRef.current;
      const mobile = mobileRef.current;
      const content = contentRef.current;
      if (!section || !scene || !desktop || !tablet || !mobile || !content)
        return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: { trigger: section, start: "top 68%", once: true },
        });

        reveal
          .from(desktop, { autoAlpha: 0, y: 90, scale: 0.92, duration: 1.55 })
          .from(
            tablet,
            { autoAlpha: 0, x: -55, y: 45, rotateY: -10, duration: 1.35 },
            "-=1.05",
          )
          .from(
            mobile,
            { autoAlpha: 0, x: 45, y: 55, rotateY: 12, duration: 1.25 },
            "-=0.95",
          )
          .from(
            content.querySelectorAll("[data-reveal]"),
            { autoAlpha: 0, y: 28, duration: 1, stagger: 0.1 },
            "-=0.65",
          );

        const floats = [
          gsap.to(desktop.querySelector("img")!, {
            y: -10,
            rotateX: 0.8,
            rotateY: 1.2,
            duration: 7.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
          gsap.to(tablet.querySelector("img")!, {
            x: -7,
            y: -16,
            rotateX: -1.5,
            rotateY: 2,
            duration: 9,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
          gsap.to(mobile.querySelector("img")!, {
            x: 6,
            y: -13,
            rotateX: 1.5,
            rotateY: -2.5,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          }),
        ];

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          })
          .to(scene, { "--depth-desktop-y": -22, ease: "none" }, 0)
          .to(scene, { "--depth-tablet-y": -70, ease: "none" }, 0)
          .to(scene, { "--depth-mobile-y": -105, ease: "none" }, 0);

        return () => floats.forEach((tween) => tween.kill());
      });

      mm.add(
        "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const setters = {
            x: gsap.quickTo(scene, "--scene-x", {
              duration: 1.2,
              ease: "power3.out",
            }),
            y: gsap.quickTo(scene, "--scene-y", {
              duration: 1.2,
              ease: "power3.out",
            }),
            backX: gsap.quickTo(scene, "--scene-back-x", {
              duration: 1.4,
              ease: "power3.out",
            }),
            backY: gsap.quickTo(scene, "--scene-back-y", {
              duration: 1.4,
              ease: "power3.out",
            }),
            frontX: gsap.quickTo(scene, "--scene-front-x", {
              duration: 1,
              ease: "power3.out",
            }),
            frontY: gsap.quickTo(scene, "--scene-front-y", {
              duration: 1,
              ease: "power3.out",
            }),
          };
          const handleMove = (event: PointerEvent) => {
            const bounds = scene.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            setters.x(x * 10);
            setters.y(y * 7);
            setters.backX(x * -16);
            setters.backY(y * -12);
            setters.frontX(x * 19);
            setters.frontY(y * 15);
          };
          const reset = () =>
            Object.values(setters).forEach((setter) => setter(0));
          scene.addEventListener("pointermove", handleMove);
          scene.addEventListener("pointerleave", reset);
          return () => {
            scene.removeEventListener("pointermove", handleMove);
            scene.removeEventListener("pointerleave", reset);
          };
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="campaign-overview"
      className="campaign-section campaign-presentation"
      aria-labelledby="campaign-overview-title"
    >
      <div className="campaign-presentation__atmosphere" aria-hidden="true" />
      <div className="campaign-container campaign-presentation__container">
        <div className="campaign-presentation__heading">
          <span className="campaign-label">
            Maison Noire · Camapnha Digital
          </span>
          <p className="campaign-presentation__index">01 / PRÉ VIZUALIZAÇÃO </p>
        </div>

        <div className="campaign-presentation__grid">
          <div className="campaign-presentation__visual">
            <div ref={sceneRef} className="device-scene">
              <div className="device-glow" aria-hidden="true" />
              <div
                className="device-orbit device-orbit--one"
                aria-hidden="true"
              />
              <div
                className="device-orbit device-orbit--two"
                aria-hidden="true"
              />
              <span className="device-scene__axis" aria-hidden="true" />

              <div className="device device--tablet">
                <div ref={tabletRef} className="device__motion">
                  <Image
                    src="/images/modelo-tab02.png"
                    alt="Campanha Maison Noire apresentada em tablet"
                    width={1448}
                    height={1086}
                    sizes="(max-width: 768px) 42vw, (max-width: 1200px) 32vw, 25vw"
                  />
                </div>
              </div>
              <div className="device device--desktop">
                <div ref={desktopRef} className="device__motion">
                  <Image
                    src="/images/modelo-dask.png"
                    alt="Experiência editorial Maison Noire em desktop"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 768px) 86vw, (max-width: 1200px) 72vw, 54vw"
                  />
                </div>
              </div>
              <div className="device device--mobile">
                <div ref={mobileRef} className="device__motion">
                  <Image
                    src="/images/modelo-mob.png"
                    alt="Campanha Maison Noire apresentada em smartphone"
                    width={872}
                    height={1804}
                    sizes="(max-width: 768px) 22vw, (max-width: 1200px) 16vw, 11vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="campaign-presentation__content">
            <p className="campaign-presentation__kicker" data-reveal>
              Uma maison.
              <br />
              Três perspectivas.
            </p>
            <h2
              id="campaign-overview-title"
              className="campaign-presentation__title"
              data-reveal
            >
              Elegância que atravessa telas.
            </h2>
            <div className="campaign-presentation__copy" data-reveal>
              <p>
                Uma narrativa digital guiada pela elegância silenciosa da moda
                europeia — criada para preservar presença, ritmo e desejo em
                cada escala.
              </p>
            </div>
            <div className="campaign-presentation__details" data-reveal>
              {disciplines.map((discipline, index) => (
                <div className="campaign-detail" key={discipline}>
                  <span>0{index + 1}</span>
                  <p>{discipline}</p>
                </div>
              ))}
            </div>
            <p className="campaign-presentation__note" data-reveal>
              Milão - OUTONO | INVERNO - 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
