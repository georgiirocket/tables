'use client';

import { NextUIProvider } from '@nextui-org/system';
import { FC, PropsWithChildren } from 'react';

/**
 * Next ui provider
 */
const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default UiProvider;
