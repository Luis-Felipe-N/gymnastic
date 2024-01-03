import { ChooseUs } from '@/components/choose-us'
import { Memberships } from '@/components/membership'
import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { Testimonial } from '@/components/testimonial'
import { Join } from '@/components/join'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <Hero />
      <ChooseUs />
      <Memberships />
      <Testimonial />
      <Join />
      <Footer />
    </main>
  )
}
