import SearchBar from '../components/SearchBar';
import NotFound from './NotFound';
import type { SearchProps } from '../types';

const Search = ({ q, handleSubmit }: SearchProps) => {
  return (
    <div className='relative'>
      <div className='container'>
        <div className='flex gap-16 items-start p-10 px-20 h-full pb-0'>
          <h1 className='font-bold text-center transform-all duration-1000 text-6xl md:text-4xl text-primary mt-1'>
            Hello
          </h1>
          <div className='grid h-full'>
            <div className='z-50 absolute'>
              <SearchBar
                hideButtons={true}
                hideIcon={true}
                value={q!}
                handleSubmit={handleSubmit}
              />
            </div>

            <span className='border-b-4 border-primary text-2xl text-primary pt-20 w-min px-1 mt-1'>
              All
            </span>

            <div className='pt-5'>
              {' '}
              <NotFound q={q!} />
            </div>
          </div>
        </div>
      </div>{' '}
      <hr className='stroke-primary border-primary fixed h-full w-full top-40' />
    </div>
  );
};

export default Search;
