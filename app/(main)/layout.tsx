import React, { ReactNode } from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Layout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

export default Layout
