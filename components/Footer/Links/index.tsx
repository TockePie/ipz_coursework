import React from 'react'
import Link from 'next/link'

import Container from '../Container'

import { LINKS, SOCIALS } from './links'

const Links = () => (
  <>
    <Container title="Ми у соц. мережах" className="gap-6 lg:items-start">
      {SOCIALS.map(({ Icon, label, props = {} }) => (
        <a
          key={label}
          href="#"
          className="transition-opacity hover:opacity-80"
          aria-label={label}
        >
          <Icon {...props} />
        </a>
      ))}
    </Container>

    <Container
      title="Корисні посилання"
      className="flex-wrap justify-center gap-4 lg:flex-col lg:items-start"
    >
      {LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className="text-cornsilk font-unbounded cursor-pointer font-light transition-all hover:underline"
        >
          {link.name}
        </Link>
      ))}
    </Container>
  </>
)

export default Links
