import { Inter } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/system';

import { meta } from '@/common/constants/meta';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = meta;

/**
 * Layout
 * @param children
 * @constructor
 */
const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
