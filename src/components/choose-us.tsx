'use client'

import { Barbell } from '@phosphor-icons/react'
import Image from 'next/image'

export function ChooseUsItem() {
  return (
    <div className="flex gap-4 items-start">
      <Barbell size={32} />

      <div>
        <h4 className="text-2xl">Best Training</h4>
        <p className="text-sm my-2 leading-6">
          Best training ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          dui sapien, porttitor laoreet faucibus nec, scelerisque in augue.
        </p>
      </div>
    </div>
  )
}

export function ChooseUs() {
  return (
    <section className="lg:p-12 p-8 bg-zinc-900">
      <div className="text-center">
        <h2 className="text-4xl">Por que nos escolher?</h2>

        <p className="my-4">
          Ao escolher uma academia, considere suas comodidades como acesso aos
          hóspedes, horário, <br /> localização e benefícios extras para
          melhorar sua experiência.
        </p>
      </div>

      <div className="grid lg:grid-cols-[3fr_1fr] grid-cols-1 max-w-[1400px] mx-auto gap-12 my-20 bg-zinc-800 rounded-2xl overflow-hidden">
        <div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12 p-12">
            <ChooseUsItem />
            <ChooseUsItem />
            <ChooseUsItem />
            <ChooseUsItem />
          </div>
        </div>

        <Image
          src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1260}
          height={1260}
          className="object-cover object-center h-full lg:block hidden"
          alt=""
        />
      </div>
    </section>
  )
}
