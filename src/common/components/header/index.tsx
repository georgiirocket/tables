import { FC } from 'react';
import { Image } from '@nextui-org/react';

/**
 * Header component
 * @constructor
 */
const Header: FC = () => {
  return (
    <div className="py-4 px-1 flex justify-center items-center gap-2">
      <Image
        alt="nextui logo"
        radius="sm"
        src="/favicon.svg"
        classNames={{ img: 'size-[30px] sm:size-[45px]' }}
      />
      <h1 className="text-[30px] sm:text-[45px]">Tables</h1>
    </div>
  );
};

export default Header;
