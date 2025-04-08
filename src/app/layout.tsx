import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { meta } from '@/common/constants/meta'
import Header from '@/common/components/header'
import Footer from '@/common/components/footer'
import UiProvider from '@/common/providers/next-ui'
import './globals.css'

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
        <UiProvider>
          <div className="grid h-dvh w-dvw grid-cols-[1fr] grid-rows-[auto_1fr_auto]">
            <Header />
            {children}
            <Footer />
          </div>
        </UiProvider>
      </body>
    </html>
  )
}

export default RootLayout
