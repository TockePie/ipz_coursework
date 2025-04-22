import React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '../../ui/button'

const Banner = () => (
  <div className="border-brown bg-mistyrose text-brown relative flex flex-col gap-4 rounded-3xl border-2 px-3 py-6">
    <h1 className="text-xl font-bold">Смаковий вибух</h1>
    <h4 className="font-unbounded z-10 max-w-[55%] font-light">
      Соковитий бургер з м&apos;ясом, карамелізованими овочами подарує справжній
      вибух смаку.
    </h4>
    <p className="font-unbounded text-lg font-bold text-red-500">125 ₴</p>

    <Button className="bg-strong-cyan font-unbounded absolute right-3 bottom-3 flex px-5 py-6 text-lg text-white">
      Спробувати
      <ArrowRight size={36} />
    </Button>
    <Image
      className="absolute top-10 right-2"
      width={180}
      height={160}
      src="/burger-banner.png"
      alt="burger"
    />
  </div>
)

export default Banner
