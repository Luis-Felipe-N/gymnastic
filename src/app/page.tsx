import { ChooseUs } from '@/components/choose-us'
import { Memberships } from '@/components/membership'
import { Hero } from '@/components/hero'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <Hero />
      <ChooseUs />
      <Memberships />
    </main>
  )
}
