'use client';

import { HeroUIProvider } from '@heroui/system';
import { FC, PropsWithChildren } from 'react';

/**
 * Hero ui provider
 */
const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default UiProvider;
