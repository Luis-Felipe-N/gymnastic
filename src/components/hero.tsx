'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section className="my-24 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-2">
        <h3 className="text-6xl">
          Take care your body and it's the only place you have to life
        </h3>
        <div>
          <p className="text-xl mb-4">
            Gym session or brisk walk can help. Physical activity <br />{' '}
            simulates many brain chemicals that may leave you.
          </p>
          <button className="px-8 py-3 rounded-full bg-cyan-300 text-zinc-950 font-semibold">
            Bea Member
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="h-24 w-1/2 absolute bg-black rounded-br-3xl"></div>
        <img
          // width={1400}
          // height={700}
          alt=""
          src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
          className="object-cover w-full h-[600px]"
        />
      </div>
    </section>
  )
}
