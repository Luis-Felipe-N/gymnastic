'use client'

import Link from 'next/link'

import styles from './styles.module.css'
import { useState } from 'react'

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleToggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header className="md:mt-24 mt-8 md:mx-24 mx-8">
      <div className="grid grid-cols-2 items-center bg-zinc-900 p-8 py-6 rounded-full max-w-[1400px] w-full mx-auto">
        <h1>GYMNASTIC</h1>

        <div className="flex justify-end relative">
          <button
            onClick={handleToggleMenu}
            id="button-menu"
            className="inline-flex z-10 items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <nav
            className={
              menuIsOpen
                ? `${styles.header} ${styles.active}`
                : `${styles.header}`
            }
          >
            <ul className="flex justify-between font-medium bg-zinc-900 rounded-3xl gap-12">
              <li className="text-cyan-400">
                <Link href={'/'}>Home</Link>
              </li>

              <li>
                <Link href={'/'}>Aulas</Link>
              </li>

              <li>
                <Link href={'/'}>Membros</Link>
              </li>

              <li>
                <Link href={'/'}>Personal trainers</Link>
              </li>

              <li>
                <Link href={'/'}>Blog</Link>
              </li>

              <li>
                <Link href={'/'}>Contato</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
