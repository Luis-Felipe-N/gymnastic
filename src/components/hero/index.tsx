'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import { ArrowArcLeft, ArrowRight, ArrowUpRight } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="my-24 max-w-[1400px] mx-auto lg:px-0 md:px-24 px-8">
      <div className="grid lg:grid-cols-2">
        <h3 className="text-6xl">
          Cuide do seu corpo, pois é o único lugar que você tem para viver
        </h3>
        <div className="mt-12 lg:mt-0">
          <p className="text-xl mb-4">
            Uma sessão de academia ou uma caminhada rápida podem ajudar. A
            atividade física estimula muitas substâncias químicas cerebrais que
            podem beneficiar você
          </p>
          <button className="px-8 py-3 flex items-center gap-2  rounded-full bg-cyan-300 text-zinc-950 font-semibold">
            Torne-se membro
            <ArrowUpRight weight="bold" />
          </button>
        </div>
      </div>

      <div className="relative mt-8">
        <Image
          width={1400}
          height={700}
          alt=""
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
          className="object-cover w-full h-[600px] rounded-3xl"
        />
      </div>
    </section>
  )
}
