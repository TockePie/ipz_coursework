import Link from 'next/link'

import DiscordIcon from '@/components/Icons/socials/discord-icon'
import GmailIcon from '@/components/Icons/socials/gmail-icon'
import TelegramIcon from '@/components/Icons/socials/telegram-icon'

import Container from '../Container'

export default function Links() {
  return (
    <>
      <Container title="Ми у соц. мережах" className="gap-6 lg:items-start">
        {SOCIALS.map(({ Icon, label, href, props = {} }) => (
          <Link
            href={href}
            key={label}
            className="transition-opacity hover:opacity-80"
            target="_blank"
          >
            <Icon {...props} />
          </Link>
        ))}
      </Container>

      <Container
        title="Корисні посилання"
        className="flex-wrap justify-center gap-4 lg:flex-col lg:items-start"
      >
        {LINKS.map(({ label, href, target }, index) => (
          <Link
            href={href}
            key={index}
            target={target}
            className="text-cornsilk font-unbounded cursor-pointer font-light transition-all hover:underline"
          >
            {label}
          </Link>
        ))}
      </Container>
    </>
  )
}

const LINKS = [
  { label: 'меню', href: '/menu/main' },
  { label: 'мерч', href: '/menu/merch' },
  { label: 'про нас', href: '/#about' },
  { label: 'бронювання', href: '/#booking' },
  {
    label: 'buymecoffee',
    href: 'https://buymecoffee.com/bunnfee',
    target: '_blank'
  }
]

const SOCIALS = [
  {
    Icon: DiscordIcon,
    label: 'Discord',
    props: { size: '48' },
    href: 'https://discord.com/'
  },
  {
    Icon: TelegramIcon,
    label: 'Telegram',
    href: 'https://web.telegram.org/'
  },
  { Icon: GmailIcon, label: 'Gmail', href: 'https://mail.google.com/mail' }
]
