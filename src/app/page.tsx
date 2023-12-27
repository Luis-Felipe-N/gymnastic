import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ChooseUs } from '@/components/choose-us'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <ChooseUs />
    </main>
  )
}
