import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Button, Link } from '@nextui-org/react';

import { githubURL } from '@/common/constants';

/**
 * Footer component
 * @constructor
 */
const Footer: FC = () => {
  return (
    <footer className="w-full pb-4 p-2 grid place-items-center">
      <Button
        as={Link}
        href={githubURL}
        variant="light"
        radius="full"
        size="sm"
        isExternal
        startContent={<FaGithub />}
        className="text-fill-inherit flex gap-1 items-center cursor-pointer"
      >
        Github
      </Button>
    </footer>
  );
};

export default Footer;
