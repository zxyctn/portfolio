import { Linkedin, Github } from 'react-bootstrap-icons';

import type { LinkProps } from '../types';

const Link = ({ href, text, platform }: LinkProps) => {
  return (
    <div className='grid text-primary gap-2 h-min'>
      <div className='flex gap-4 items-center'>
        <a href={href} className='bg-secondary rounded-full w-14 h-14 flex items-center justify-center'>
          {platform === 'LinkedIn' ? (
            <Linkedin className='text-primary' size={24} />
          ) : (
            <Github className='text-primary' size={24} />
          )}
        </a>
        <div className='grid'>
          <a href={href} className='text-xl'>{platform}</a>
          <a href={href} className='text-sm sm:text-md'>{href}</a>
        </div>
      </div>
      <a href={href} className='text-xl my-auto'>zxyctn</a>
      <p className='max-w-[500px] min-w text-primary/75 text-md'>{text}</p>
    </div>
  );
};

export default Link;
