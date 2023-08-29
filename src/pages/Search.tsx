import SearchBar from '../components/SearchBar';
import NotFound from './NotFound';
import type { SearchProps } from '../types';
import Portfolio from './Portfolio';

const Search = ({ q, handleSubmit }: SearchProps) => {
  return (
    <div className='relative'>
      <div className=''>
        <div className='items-start p-12 h-full pb-0'>
          <div className='sm:flex'>
            <h1 className='font-bold text-center transform-all duration-1000 text-4xl text-primary mt-1 pb-5 sm:pb-0'>
              Hello
            </h1>
            <div className='z-50 absolute sm:pl-40 flex justify-center sm:justify-start w-full sm:w-fit -ml-12 sm:m-0'>
              <SearchBar
                hideButtons={true}
                hideIcon={true}
                value={q!}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className='grid h-full xl:pl-40 pt-10 sm:pt-0'>
            <span className='border-b-4 border-primary text-2xl text-primary xl:pt-12 pt-8 w-min px-1 mt-1'>
              All
            </span>
            <hr className='stroke-primary border-primary xl:-ml-52 -ml-12' />

            <div className=''>
              {q !== 'Ibrahim Mammadov' ? (
                <NotFound q={q!} handleSubmit={handleSubmit} />
              ) : (
                <Portfolio />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
