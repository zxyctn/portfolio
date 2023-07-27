import { useState } from 'react';
import { Search, X } from 'react-bootstrap-icons';

import type { SearchBarProps } from '../types';

const SearchBar = ({
  hideButtons,
  value,
  hideIcon,
  handleSubmit,
}: SearchBarProps) => {
  const [search, setSearch] = useState(value);
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    handleSubmit(search!);
  };

  return (
    <div
      className={`transition-all relative grid gap-5 border-2 border-primary rounded-3xl ${
        focus ? 'h-full pb-5' : 'h-[52px]'
      } ${hover || focus ? 'dark:bg-neutral shadow-lg' : ''}`}
      tabIndex={-1}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      <div className='grid auto-rows-auto'>
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
          <Search className='absolute left-4 top-4' color='#3B4D8D' size={16} />
        )}

        {hideIcon && (
          <div className='flex absolute gap-1 right-4 top-2 items-center'>
            <button onClick={() => setSearch('')}>
              <X color='#3B4D8D' size={32} />
            </button>
            <span className='text-xl mb-1.5 text-primary'>|</span>
            <button onClick={handleSearch}>
              <Search className='mx-1.5' color='#3B4D8D' size={16} />
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
            <button className='btn btn-secondary'>I'm feeling lucky</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
