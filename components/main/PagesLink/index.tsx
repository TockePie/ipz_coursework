import React from 'react'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { MENU_LINKS } from '@/common/page-links'
import Colors from '@/types/enums/colors'

const PagesLink = () => {
  return MENU_LINKS.map((link, index) => (
    <Link
      href={link.href}
      key={index}
      className={clsx(
        link.bgMainColor,
        'border-brown flex justify-between gap-2.5 rounded-2xl border p-4'
      )}
    >
      <h2>{link.label}</h2>
      <ChevronRight color={Colors.BROWN} size="28" />
    </Link>
  ))
}

export default PagesLink
