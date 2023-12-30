import Image from 'next/image'
import styles from './styles.module.css'

export function Hero() {
  return (
    <section className="my-24 max-w-[1400px] mx-auto lg:px-0 md:px-24 px-8">
      <div className="grid lg:grid-cols-2">
        <h3 className="text-6xl">
          Take care your body and its the only place you have to life
        </h3>
        <div className="mt-12 lg:mt-0">
          <p className="text-xl mb-4">
            Gym session or brisk walk can help. Physical activity <br />{' '}
            simulates many brain chemicals that may leave you.
          </p>
          <button className="px-8 py-3 rounded-full bg-cyan-300 text-zinc-950 font-semibold">
            Bea Member
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
