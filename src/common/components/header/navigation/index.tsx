'use client'

import { FC } from 'react'
import { Button } from '@heroui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { routes } from '@/common/constants/routes'

/**
 * Navigation
 * @constructor
 */
const Navigation: FC = () => {
  const pathname = usePathname()

  return (
    <nav className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-1">
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
  )
}

export default Navigation
