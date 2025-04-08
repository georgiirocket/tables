'use client';

import { FC } from 'react';
import { Button } from '@heroui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/common/constants/routes';

/**
 * Navigation
 * @constructor
 */
const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="max-w-[1200px] flex flex-wrap gap-1 mx-auto justify-center">
      {routes.map(({ path, name }) => (
        <Button
          size="sm"
          key={path}
          href={path}
          as={Link}
          radius="full"
          color={pathname === path ? 'secondary' : 'default'}
        >
          {name}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
