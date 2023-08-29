import { Linkedin, Github } from 'react-bootstrap-icons';

import { LinkProps } from '../types';

const Link = ({ href, text, platform }: LinkProps) => {
  return (
    <div className='grid text-primary gap-2 h-min'>
      <div className='flex gap-4 items-center'>
        <div className='border-2 bg-secondary rounded-full w-14 h-14 flex items-center justify-center'>
          {platform === 'LinkedIn' ? (
            <Linkedin className='text-primary' size={24} />
          ) : (
            <Github className='text-primary' size={24} />
          )}
        </div>
        <div>
          <h1 className='text-xl'>{platform}</h1>
          <a href={href}>{href}</a>
        </div>
      </div>
      <h1 className='text-xl my-auto'>zxyctn</h1>
      <p className='max-w-[500px]'>{text}</p>
    </div>
  );
};

export default Link;
