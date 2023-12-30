'use client'

import { CheckCircle } from '@phosphor-icons/react'
import { ReactNode } from 'react'

function Header({ children }: any) {
  return <div className="p-8 text-center">{children}</div>
}

function Price({ children }: any) {
  return (
    <span className="block">
      <span className="text-2xl text-cyan-400 font-semibold">{children}</span>
      /mês
    </span>
  )
}

function Title({ children }: any) {
  return <p className="text-3xl mb-4 ">{children}</p>
}

function MembershipsItem({ children }: any) {
  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl w-full">
      {children}

      <ul className="p-8 border-t-2 border-zinc-800 py text-center space-y-6">
        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>

        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>

        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>

        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>

        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>

        <li className="flex gap-2 items-center">
          <CheckCircle size={24} />

          <span>Gym without Trainers</span>
        </li>
      </ul>
    </div>
  )
}

export function Memberships() {
  return (
    <section className="max-w-[1400px] mx-auto py-24">
      <div className="text-center">
        <h2 className="text-4xl">Por que nos escolher?</h2>

        <p className="my-4">
          Ao escolher uma academia, considere suas comodidades como acesso aos
          hóspedes, horário, <br /> localização e benefícios extras para
          melhorar sua experiência.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-20">
        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Básico</MembershipsItem.Title>
            <MembershipsItem.Price>R$20</MembershipsItem.Price>
          </MembershipsItem.Header>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Standard</MembershipsItem.Title>
            <MembershipsItem.Price>R$35</MembershipsItem.Price>
          </MembershipsItem.Header>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Profissional</MembershipsItem.Title>
            <MembershipsItem.Price>R$50</MembershipsItem.Price>
          </MembershipsItem.Header>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Familia</MembershipsItem.Title>
            <MembershipsItem.Price>R$65</MembershipsItem.Price>
          </MembershipsItem.Header>
        </MembershipsItem>
        {/* <MembershipsItem />
        <MembershipsItem />
        <MembershipsItem /> */}
      </div>
    </section>
  )
}

MembershipsItem.Header = Header
MembershipsItem.Title = Title
MembershipsItem.Price = Price
