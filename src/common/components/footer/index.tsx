import { FC } from 'react'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'

import { githubURL } from '@/common/constants'

/**
 * Footer component
 * @constructor
 */
const Footer: FC = () => {
  return (
    <footer className="grid w-full place-items-center p-2 pb-4">
      <Button
        as={Link}
        href={githubURL}
        variant="light"
        radius="full"
        size="sm"
        isExternal
        startContent={<FaGithub />}
        className="flex cursor-pointer items-center gap-1 text-fill-inherit"
      >
        Github
      </Button>
    </footer>
  )
}

export default Footer
