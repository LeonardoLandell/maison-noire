import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-editorial">
        {/* FOOTER MARCA */}

        <div className="footer-brand">
          <div>
            <span className="eyebrow">Maison Noire</span>

            <h3 className="footer-title">OUTONO INVERNO 2026</h3>

            <p className="footer-copy">
              Coleção inspirada pelas paisagens do norte da Itália, onde
              arquitetura, natureza e artesanato compartilham a mesma linguagem.
            </p>
          </div>

          <div>
            <span className="footer-heading">Navegação</span>

            <ul>
              <li>
                <Link href="#manifesto">Manifesto</Link>
              </li>

              <li>
                <Link href="#collection">Coleção</Link>
              </li>

              <li>
                <Link href="#editorial">Editorial</Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="footer-heading">Inspiração</span>

            <ul>
              <li>Lago di Como</li>
              <li>Florença</li>
              <li>Interior Italiano</li>
            </ul>
          </div>
        </div>

        {/* CASE STUDY */}

        <div className="case-study">
          <span className="eyebrow">Case Study</span>

          <h4 className="case-title">Projeto Conceitual</h4>

          <p className="case-copy">
            Maison Noire é um projeto conceitual desenvolvido para demonstrar
            competências em Product Design, UI/UX Design, Front-End Engineering,
            Motion Design e Direção de Arte.
          </p>

          <div className="case-author">
            <strong>Leonardo Landell</strong>

            <span>Frontend Engineer • Product Engineer • UI/UX Engineer</span>
          </div>

          <div className="case-links">
            <a
              href="https://www.linkedin.com/in/leonardo-landell/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/LeonardoLandell"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://leonardolandell-dev.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfólio
            </a>
          </div>

          <div className="case-notes">
            <p>
              As imagens utilizadas neste projeto foram geradas por inteligência
              artificial para fins de estudo e apresentação.
            </p>

            <p>
              O vídeo da Hero utiliza enquadramentos propositais para preservar
              a identidade da personagem apresentada na campanha.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
