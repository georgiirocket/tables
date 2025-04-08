import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { HeroUIProvider } from '@heroui/system'

import { meta } from '@/common/constants/meta'
import Header from '@/common/components/header'
import './globals.scss'
import Footer from '@/common/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = meta

/**
 * Layout
 * @param children
 * @constructor
 */
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <HeroUIProvider className="grid size-full grid-cols-[1fr] grid-rows-[auto_1fr_auto]">
          <Header />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  )
}

export default RootLayout
