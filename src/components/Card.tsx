import type { CardProps } from '../types';

const Card = ({ header, footer, content, url, image }: CardProps) => {
  return (
    <div className='rounded-3xl bg-secondary h-full w-full'>
      {image ? (
        <img
          src={image}
          alt={header}
          className='max-w-[260px] max-h-[260px] rounded-3xl'
        />
      ) : (
        <div className='px-3 py-2 grid h-full grid-flow-row'>
          <h2 className='text-md align-top text-primary/70'>{header}</h2>
          <p className='text-xl self-end text-primary row-span-3 font-medium'>{content}</p>
          <p className='text-md self-end text-primary font-medium'>{footer}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
