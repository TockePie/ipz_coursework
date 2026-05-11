import React from 'react'
import { cx } from 'class-variance-authority'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { MENU_LINKS } from '@/common/page-links'
import Colors from '@/types/enums/colors'

const PagesLink = () => {
  return MENU_LINKS.map((link, index) => (
    <Link
      href={link.href}
      key={index}
      className={cx(
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
