import { FC } from 'react';
import { Image } from '@heroui/image';

import Navigation from './navigation';
import Description from './description';

/**
 * Header component
 * @constructor
 */
const Header: FC = () => {
  return (
    <header className="w-full py-4 px-1 flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <Image
          alt="nextui logo"
          radius="sm"
          src="/favicon.svg"
          classNames={{ img: 'size-[30px] sm:size-[45px]' }}
        />
        <h1 className="text-[30px] sm:text-[45px]">Tables</h1>
      </div>
      <Navigation />
      <Description />
    </header>
  );
};

export default Header;
