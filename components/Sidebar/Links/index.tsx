import { SheetClose } from '@ui/sheet'
import { cx } from 'class-variance-authority'
import Link from 'next/link'

import Colors from '@/types/enums/colors'

type LinkItem = {
  href: string
  label: string
  icon: React.ElementType
  bgColor?: string
}

interface Props {
  title: string
  links: LinkItem[]
  className?: string
}

const LinkList = ({ title, links, className }: Props) => (
  <div className={cx('mt-0 flex flex-col gap-4', className)}>
    <h2 className="font-unbounded text-brown text-2xl font-medium">{title}</h2>

    {links.map((link, index) => {
      const Icon = link.icon

      return (
        <SheetClose key={index} asChild>
          <Link
            href={link.href}
            className={cx(
              link.bgColor,
              'flex w-full items-center gap-2.5 rounded-3xl p-4'
            )}
          >
            <Icon color={Colors.BROWN} />
            <span className="text-brown font-unbounded text-lg">
              {link.label}
            </span>
          </Link>
        </SheetClose>
      )
    })}
  </div>
)

export default LinkList
