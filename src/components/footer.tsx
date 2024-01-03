'use client'

import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  Pinwheel,
  TwitterLogo,
} from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="lg:px-0 md:px-8 px-8 bg-slate-950">
      <div className="max-w-[1400px] mx-auto py-24 flex justify-between lg:flex-row flex-col lg:gap-0 gap-12">
        <div className="flex flex-col gap-12">
          <h1 className="text-4xl">GYMNASTIC</h1>

          <p>
            Este clube de fitness de alto nível <br /> tem um custo mensal
            elevado, mas oferece o que há de melhor. <br /> Você encontrará
            equipamentos de última geração.
          </p>

          <ul className="flex items-center gap-4">
            <li>
              <a>
                <FacebookLogo size={30} />
              </a>
            </li>
            <li>
              <a>
                <LinkedinLogo size={30} />
              </a>
            </li>
            <li>
              <a>
                <TwitterLogo size={30} />
              </a>
            </li>
            <li>
              <InstagramLogo size={30} />
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="mt-4">
            <strong>Empresa</strong>
          </li>
          <li>
            <a>Início</a>
          </li>
          <li>
            <a>Aulas</a>
          </li>
          <li>
            <a>Associação</a>
          </li>
          <li>
            <a>Treinadores</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mt-4">
            <strong>Categoria</strong>
          </li>
          <li>
            <a>Treinamento de Força</a>
          </li>
          <li>
            <a>Musculação</a>
          </li>
          <li>
            <a>Perda de Peso</a>
          </li>
          <li>
            <a>Yoga Básico</a>
          </li>
          <li>
            <a>Fitness Físico</a>
          </li>
        </ul>

        <ul className="flex flex-col gap-4">
          <li className="mt-4">
            <strong>Contact Us</strong>
          </li>
          <li>
            <a className="flex items-center gap-1">
              <Phone size={24} />
              <span>+55 (99) 9 8765-4321</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1">
              <Envelope size={24} />
              <span>info@domain.com</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-1">
              <MapPin size={24} />
              <span>
                Warehouse 4, 5th Street, <br /> Al Quoz 3, Dubai
              </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
