import React from 'react'

import './styles.css'

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center outline-none">
      <p className="font-unbounded text-md text-left">
        <b>Bunnfee</b> – це не просто ресторан, а затишний куточок, де кожна
        страва наповнена теплом, турботою та натхненням. Ми створюємо атмосферу,
        що огортає комфортом, немов м&apos;які лапки кролика, а кожен відвідувач
        стає частиною нашої дружньої спільноти.
      </p>

      <div className="relative flex w-full items-center justify-center gap-3">
        <img src="/vika.png" alt="Vika" className="ml-[-60px]" />
        <div className="bg-mistyrose rounded-4xl p-4">
          <p className="font-unbounded text-brown w-42 text-xs font-light">
            За ідеєю та стилем Bunnfee стоїть <b>Пилипчук Вікторія</b>, яка
            розробила унікальний дизайн, що поєднує естетику ніжності й
            сучасного затишку.
          </p>
        </div>
      </div>

      <div className="relative flex w-full items-center justify-center gap-3">
        <div className="bg-pale-turquoise rounded-4xl p-4">
          <p className="font-unbounded text-brown w-42 text-xs font-light">
            Завдяки <b>Максиму Крадожону</b> ресторан оживає у цифровому світі –
            він відповідає за фронтенд-розробку, створюючи зручний інтерфейс для
            гостей..
          </p>
        </div>
        <img src="/maxim.png" alt="Maxim" className="mr-[-60px]" />
      </div>

      <div className="relative flex w-full items-center justify-center gap-3">
        <img src="/kyrylo.png" alt="Kyrylo" className="ml-[-60px]" />
        <div className="bg-light-goldenrod-yellow rounded-4xl p-4">
          <p className="font-unbounded text-brown w-42 text-xs font-light">
            А надійну роботу системи забезпечує <b>Кирило Лопушенко</b>, який
            розробляє бекенд, щоб усе працювало бездоганно.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
