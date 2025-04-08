'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

import { routes } from '@/common/constants/routes'

/**
 * Description
 * @constructor
 */
const Description: FC = () => {
  const pathname = usePathname()
  const route = routes.find(({ path }) => path === pathname)

  if (!route) {
    return null
  }

  return (
    <div className="mx-auto mt-3 max-w-[1200px]">
      <p className="italic">{route?.description ?? ''}</p>
    </div>
  )
}

export default Description
