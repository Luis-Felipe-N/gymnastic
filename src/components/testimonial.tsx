'use client'

import { Quotes, Star, StarHalf } from '@phosphor-icons/react'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules'
import Image from 'next/image'

export function Testimonial() {
  return (
    <section className="lg:p-12 p-8 bg-zinc-900">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-4xl">Testemunhas</h2>

        <p className="flex flex-col md:flex-row lg:flex-row gap-4 mt-8">
          <span className="flex items-center gap-2 text-yellow-500">
            <Star size={24} weight="fill" />
            <Star size={24} weight="fill" />
            <Star size={24} weight="fill" />
            <Star size={24} weight="fill" />
            <StarHalf size={24} weight="fill" />
          </span>
          4.5 (959) Estrelas de avaliações de nossos clientes
        </p>

        <div className="mt-12">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper "
          >
            <SwiperSlide className="lg:px-24 lg:mb-20 mb-24">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>

                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-24 lg:mb-20 mb-24">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>

                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-24 lg:mb-20 mb-24">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>

                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="lg:px-24 lg:mb-20 mb-24">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>

                <div className="grid grid-cols-[3fr_5fr] bg-zinc-800">
                  <div className="relative">
                    <Image
                      src="https://images.pexels.com/photos/2080382/pexels-photo-2080382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <span className="py-4 w-full bg-cyan-300 text-center text-zinc-800 font-bold absolute bottom-0 left-0 right-0">
                      Marvin Silva
                    </span>
                  </div>

                  <div className="flex items-center justify-center p-12 text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras at sem in massa accumsan pulvinar sit amet et libero.
                    Nunc non nisl neque.
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
