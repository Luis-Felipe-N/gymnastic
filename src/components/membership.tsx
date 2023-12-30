'use client'

import { CheckCircle } from '@phosphor-icons/react'

const Item = ({ children, active = true }: any) => {
  return (
    <li className={`flex gap-2 items-center ${!active && 'text-zinc-500'}`}>
      <CheckCircle size={24} />

      <span>{children}</span>
    </li>
  )
}

const Content = ({ children }: any) => {
  return (
    <ul className="p-8 border-t-2 border-zinc-800 py  space-y-6">{children}</ul>
  )
}

const Header = ({ children }: any) => {
  return <div className="p-8 text-center">{children}</div>
}

const Price = ({ children }: any) => {
  return (
    <span className="block">
      <span className="text-2xl text-cyan-400 font-semibold">{children}</span>
      /mês
    </span>
  )
}

const Title = ({ children }: any) => {
  return <p className="text-3xl mb-4 ">{children}</p>
}

function MembershipsItem({ children }: any) {
  return (
    <div className="bg-zinc-900 border-2 border-zinc-800 rounded-2xl w-full">
      {children}
    </div>
  )
}

export function Memberships() {
  return (
    <section className="max-w-[1400px] mx-auto py-24 lg:px-0 md:px-0 px-8">
      <div className="text-center">
        <h2 className="text-4xl">Por que nos escolher?</h2>

        <p className="my-4">
          Ao escolher uma academia, considere suas comodidades como acesso aos
          hóspedes, horário, <br /> localização e benefícios extras para
          melhorar sua experiência.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-8 mt-20">
        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Básico</MembershipsItem.Title>
            <MembershipsItem.Price>R$20</MembershipsItem.Price>
          </MembershipsItem.Header>
          <MembershipsItem.Content>
            <MembershipsItem.Item>
              Academia sem treinadores
            </MembershipsItem.Item>

            <MembershipsItem.Item>Acesso ilimitado</MembershipsItem.Item>
            <MembershipsItem.Item>Acesso a todo clube</MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Acesso a todo treinamento
            </MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Estúdio exclusivo
            </MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Sessão adicional
            </MembershipsItem.Item>
          </MembershipsItem.Content>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Standard</MembershipsItem.Title>
            <MembershipsItem.Price>R$35</MembershipsItem.Price>
          </MembershipsItem.Header>
          <MembershipsItem.Content>
            <MembershipsItem.Item>
              Academia sem treinadores
            </MembershipsItem.Item>

            <MembershipsItem.Item>Acesso ilimitado</MembershipsItem.Item>
            <MembershipsItem.Item>Acesso a todo clube</MembershipsItem.Item>
            <MembershipsItem.Item>
              Acesso a todo treinamento
            </MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Estúdio exclusivo
            </MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Sessão adicional
            </MembershipsItem.Item>
          </MembershipsItem.Content>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Profissional</MembershipsItem.Title>
            <MembershipsItem.Price>R$50</MembershipsItem.Price>
          </MembershipsItem.Header>
          <MembershipsItem.Content>
            <MembershipsItem.Item>
              Academia sem treinadores
            </MembershipsItem.Item>

            <MembershipsItem.Item>Acesso ilimitado</MembershipsItem.Item>
            <MembershipsItem.Item>Acesso a todo clube</MembershipsItem.Item>
            <MembershipsItem.Item>
              Acesso a todo treinamento
            </MembershipsItem.Item>
            <MembershipsItem.Item>Estúdio exclusivo</MembershipsItem.Item>
            <MembershipsItem.Item active={false}>
              Sessão adicional
            </MembershipsItem.Item>
          </MembershipsItem.Content>
        </MembershipsItem>

        <MembershipsItem>
          <MembershipsItem.Header>
            <MembershipsItem.Title>Familia</MembershipsItem.Title>
            <MembershipsItem.Price>R$65</MembershipsItem.Price>
          </MembershipsItem.Header>

          <MembershipsItem.Content>
            <MembershipsItem.Item>
              Academia sem treinadores
            </MembershipsItem.Item>

            <MembershipsItem.Item>Acesso ilimitado</MembershipsItem.Item>
            <MembershipsItem.Item>Acesso a todo clube</MembershipsItem.Item>
            <MembershipsItem.Item>
              Acesso a todo treinamento
            </MembershipsItem.Item>
            <MembershipsItem.Item>Estúdio exclusivo</MembershipsItem.Item>
            <MembershipsItem.Item>Sessão adicional</MembershipsItem.Item>
          </MembershipsItem.Content>
        </MembershipsItem>
      </div>
    </section>
  )
}

MembershipsItem.Item = Item
MembershipsItem.Content = Content
MembershipsItem.Header = Header
MembershipsItem.Title = Title
MembershipsItem.Price = Price
