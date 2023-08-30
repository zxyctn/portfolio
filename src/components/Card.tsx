import type { CardProps } from '../types';

const Card = ({ header, footer, content, url, image }: CardProps) => {
  return (
    <div className='rounded-3xl bg-secondary place-self-stretch h-full'>
      {image ? (
        <img
          src={image}
          alt={header}
          className='max-w-[260px] max-h-[260px] rounded-3xl'
        />
      ) : (
        <div className='px-3 py-2 grid h-full grid-flow-row gap-2'>
          <h2 className='text-md align-top text-primary/70'>{header}</h2>
          <p className='text-xl self-end text-primary row-span-3 font-medium break-words'>
            {content}
          </p>
          <p className='text-md self-end text-primary font-medium'>{footer}</p>
          {url && (
            <a href={url} target='_blank' rel='noreferrer' className='break-all text-primary/75'>
              {url}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
