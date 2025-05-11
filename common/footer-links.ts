import DiscordIcon from '@/components/Icons/socials/discord-icon'
import GmailIcon from '@/components/Icons/socials/gmail-icon'
import TelegramIcon from '@/components/Icons/socials/telegram-icon'

const LINKS = [
  { label: 'меню', href: '/menu/main' },
  { label: 'мерч', href: '/menu/merch' },
  { label: 'про нас', href: '/#about' },
  { label: 'бронювання', href: '/#booking' },
  { label: 'buymecoffee', href: 'https://buymecoffee.com/bunnfee' }
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

export { LINKS, SOCIALS }
