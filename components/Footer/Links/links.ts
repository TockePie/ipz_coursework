import DiscordIcon from '@/components/Icons/discord-icon'
import GmailIcon from '@/components/Icons/gmail-icon'
import TelegramIcon from '@/components/Icons/telegram-icon'

const LINKS = [
  { name: 'меню', link: '/menu' },
  { name: 'мерч', link: '/menu/merch' },
  { name: 'про нас', link: '/about' },
  { name: 'бронювання', link: '/booking' },
  { name: 'buymecoffee', link: 'https://buymecoffee.com/bunnfee' }
]

const SOCIALS = [
  { Icon: DiscordIcon, label: 'Discord', props: { size: '48' } },
  { Icon: TelegramIcon, label: 'Telegram' },
  { Icon: GmailIcon, label: 'Gmail' }
]

export { LINKS, SOCIALS }
