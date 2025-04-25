import React from 'react'

import Colors from '@/types/enums/colors'

import DiscordIcon from '../Icons/discord-icon'
import RabbitIcon from '../Icons/rabbit-icon'

const Footer = () => {
  return (
    <footer className="bg-light-coral text-cornsilk flex flex-col items-center gap-9 p-3">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-cornsilk">Ми у соц. мережах</h2>
        <DiscordIcon size="48" />
      </div>
      {/* <RabbitIcon
        color={Colors.CORNSILK}
        width="24"
        height="38"
        className="mb-2"
      />

      <div className="mx-2 grid grid-cols-1 justify-items-start">
        <div>
          <p className="font-unbounded text-brown font-semibold">
            Де нас знайти:
          </p>
        </div>

        <div>
          <p className="font-unbounded text-brown font-semibold">
            Корисні посилання:
          </p>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
