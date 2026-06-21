"use client";

import Link from "next/link";

const navigation = [
  {
    label: "Coleção",
    href: "#collection",
  },
  {
    label: "Editorial",
    href: "#editorial",
  },
  {
    label: "Lookbook",
    href: "#lookbook",
  },
  {
    label: "Sobre",
    href: "#about",
  },
];

function MaisonMark() {
  return (
    <div
      className="
      fixed
      top-6
      left-6
      md:top-8
      md:left-8
      z-[60]
      perspective-[1000px]
      "
    >
      <div className="maison-flip-card">
        <div className="maison-face maison-front">
          <span>Maison</span>
          <span>Noire</span>
        </div>

        <div className="maison-face maison-back">
          <span>Outono</span>
          <span>Inverno</span>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <>
      <MaisonMark />

      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="container-editorial flex justify-end py-8">
          <ul
            className="
            hidden
            md:flex
            items-center
            gap-10
            lg:gap-14
            "
          >
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-stone
                  transition-colors
                  duration-500
                  hover:text-cream
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="
            md:hidden
            text-[11px]
            uppercase
            tracking-[0.3em]
            text-stone
            "
          >
            Menu
          </button>
        </nav>
      </header>
    </>
  );
}
