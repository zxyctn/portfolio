import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`transition-all relative grid gap-5 border-2 border-primary rounded-3xl ${
        focus ? 'h-full pb-4' : 'h-[52px]'
      } ${hover || focus ? 'dark:bg-neutral shadow-lg' : ''}`}
    >
      <div className=''>
        <input
          type='text'
          className='input input-bordered w-full max-w-xs md:min-w-[500px] border-none focus:outline-none pl-11 text-primary font-medium bg-transparent relative'
          value={search}
          onChange={handleChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
        <hr
          className={`mx-5 stroke-primary border-primary ${
            focus ? '' : 'hidden'
          }`}
        />
        <span
          className={`absolute pl-11 top-14 text-primary font-semibold ${
            focus ? 'cursor-pointer disabled' : 'hidden'
          }`}
        >
          Ibrahim Mammadov
        </span>
      </div>

      <Search className='absolute left-4 top-4' color='#3B4D8D' size={16} />
      <div
        className={`flex gap-5 justify-center items-center mb-5 transition-all ${
          focus ? 'translate-y-5' : ''
        }`}
      >
        <button className='btn btn-secondary'>Search</button>
        <button className='btn btn-secondary'>I'm feeling lucky</button>
      </div>
    </div>
  );
};

export default SearchBar;
