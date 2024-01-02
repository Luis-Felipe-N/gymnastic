'use client'

import { ArrowUpRight } from '@phosphor-icons/react'

export function Join() {
  return (
    <section className="lg:px-0 md:px-8 px-8">
      <div className="max-w-[1400px] w-full grid lg:grid-cols-2 mx-auto my-24 lg:px-24 px-12 rounded-3xl bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-300">
        <div className="text-zinc-800 py-24">
          <h2 className="font-semibold text-4xl">
            Junte-se à família da ginástica.
          </h2>
          <p className="mt-4 mb-8">
            A prática de exercícios na academia ou uma caminhada rápida pode
            ajudar, estimulando substâncias químicas cerebrais que proporcionam
            sensações positivas.
          </p>

          <button className="px-8 py-3 flex items-center gap-2  rounded-full bg-cyan-300 text-zinc-950 font-semibold">
            Torne-se membro
            <ArrowUpRight weight="bold" />
          </button>
        </div>

        <div>
          <img src="/join-bg.png" alt="" />
        </div>
      </div>
    </section>
  )
}
