import React from 'react'

import RedirectMiddleware from '@/utils/redirect-middleware'

import Container from '../Container'

import { LINKS, SOCIALS } from './links'

const Links = () => (
  <>
    <Container title="Ми у соц. мережах" className="gap-6 lg:items-start">
      {SOCIALS.map(({ Icon, label, href, props = {} }) => (
        <RedirectMiddleware
          href={href}
          label={label}
          key={label}
          className="transition-opacity hover:opacity-80"
        >
          <Icon {...props} />
        </RedirectMiddleware>
      ))}
    </Container>

    <Container
      title="Корисні посилання"
      className="flex-wrap justify-center gap-4 lg:flex-col lg:items-start"
    >
      {LINKS.map(({ label, href }, index) => (
        <RedirectMiddleware
          label={label}
          href={href}
          key={index}
          className="text-cornsilk font-unbounded cursor-pointer font-light transition-all hover:underline"
        />
      ))}
    </Container>
  </>
)

export default Links
