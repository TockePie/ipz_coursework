import React from 'react'
import Link from 'next/link'

import { LINKS, SOCIALS } from '@/common/footer-links'

import Container from '../Container'

const Links = () => (
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

export default Links
