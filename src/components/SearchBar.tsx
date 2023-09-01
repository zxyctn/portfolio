import { useState, useEffect } from 'react';
import { Search, X } from 'react-bootstrap-icons';

import type { SearchBarProps } from '../types';

const SearchBar = ({
  hideButtons,
  value,
  hideIcon,
  handleSubmit,
  handleLuck,
}: SearchBarProps) => {
  const [search, setSearch] = useState(value);
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setSearch(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    handleSubmit(search!);
  };

  return (
    <div
      className={`transition-all relative grid gap-5 border-2 border-primary/50 rounded-3xl ${
        focus ? 'h-full pb-5' : 'h-[52px]'
      } ${hover || focus ? 'dark:bg-neutral shadow-lg' : ''}`}
      tabIndex={-1}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className='grid auto-rows-auto px-4 md:px-0'>
        <input
          type='text'
          className={`input input-bordered w-full max-w-xs md:min-w-[500px] border-none focus:outline-none text-primary font-medium bg-transparent relative
          ${hideIcon ? 'pl-6 pr-24' : 'pl-11'}
          `}
          value={search}
          onChange={handleChange}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <hr
          className={`mx-5 stroke-primary border-primary ${
            focus ? '' : 'hidden'
          }`}
        />

        <span
          className={`text-primary font-semibold grid gap-1 h-full pt-2 ${
            focus ? 'cursor-pointer' : 'disabled opacity-0'
          } ${hideIcon ? 'pl-6' : 'pl-11'}`}
          onClick={() => handleSubmit('Ibrahim Mammadov')}
        >
          Ibrahim Mammadov
        </span>

        {!hideIcon && (
          <Search className='absolute left-4 top-4 text-primary' size={16} />
        )}

        {hideIcon && (
          <div className='flex absolute gap-1 right-4 top-2 items-center'>
            <button onClick={() => setSearch('')}>
              <X width={32} height={32} className='text-primary' />
            </button>
            <div className='border-l border-primary h-6'></div>
            <button onClick={handleSearch}>
              <Search className='mx-2 text-primary' size={16} />
            </button>
          </div>
        )}

        {!hideButtons && (
          <div
            className={`flex gap-5 justify-center items-center mb-5 transition-all  ${
              focus ? 'translate-y-5' : ''
            }`}
          >
            <button className='btn btn-secondary' onClick={handleSearch}>
              Search
            </button>
            <button className='btn btn-secondary' onClick={handleLuck}>
              I'm feeling lucky
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
