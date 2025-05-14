import React from 'react'

import Person from './Person'

const INTRO_TEXT =
  '<b>Bunnfee</b> – це не просто ресторан, а затишний куточок, де кожна страва наповнена теплом, турботою та натхненням. Ми створюємо атмосферу, що огортає комфортом, немов м&apos;які лапки кролика, а кожен відвідувач стає частиною нашої дружньої спільноти.'

const AboutUs = () => (
  <div className="flex flex-col items-center gap-8 text-center">
    <p
      className="font-unbounded text-md text-brown max-w-196 text-left lg:text-center"
      dangerouslySetInnerHTML={{ __html: INTRO_TEXT }}
    />

    <div className="flex flex-col gap-8">
      <Person
        name="Пилипчук Вікторія"
        role="Design"
        roleColor="text-coral"
        imgSrc="/vika.png"
        imgAlt="Victoria Pylypchuk"
        quote="За ідеєю та стилем Bunnfee стою я, Пилипчук Вікторія. Я розробила унікальний дизайн, який поєднує в собі естетику ніжності та сучасного затишку."
      />

      <Person
        name="Крадожон Максим"
        className="bg-pale-turquoise"
        role="Frontend"
        roleColor="text-pale"
        imgSrc="/maxim.png"
        imgAlt="Maxim Kradozhon"
        quote="Завдяки мені, Максиму Крадожону, ресторан оживає у цифровому світі — я відповідаю за фронтенд-розробку та створюю зручний інтерфейс для гостей."
      />

      <Person
        name="Лопушенко Кирило"
        className="bg-light-goldenrod-yellow"
        role="Backend"
        roleColor="text-strong-cyan"
        imgSrc="/pseudo-kyrylo.png"
        imgAlt="Kyrylo Lopushenko"
        quote="А надійну роботу системи забезпечую я, Кирило Лопушенко — розробляю бекенд, щоб усе працювало бездоганно та без збоїв."
      />
    </div>
  </div>
)

export default AboutUs
