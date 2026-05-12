import Colors from '@/types/enums/colors'

import RabbitIcon from '../Icons/rabbit-icon'

import Links from './Links'
import WeAreHere from './WeAreHere'

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-light-coral text-cornsilk flex flex-col items-start gap-9 p-6 md:items-start md:p-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-9 lg:flex-row-reverse lg:items-start lg:justify-between">
        <Links />
        <WeAreHere />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-9 lg:flex-col-reverse">
        <h4 className="text-cornsilk cursor-default text-center text-[0.875rem] lg:text-base">
          Ми віримо, що Bunnfee стане для тебе місцем, куди хочеться повертатися
          знову і знову.
        </h4>

        <div className="flex items-end gap-4 select-none">
          <RabbitIcon width={32} height={56} color={Colors.CORNSILK} />
          <h1 className="font-meila text-cornsilk text-3xl font-normal lg:text-4xl">
            Bunnfee
          </h1>
        </div>
      </div>
    </footer>
  )
}
