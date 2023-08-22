import SearchBar from '../components/SearchBar';
import NotFound from './NotFound';
import type { SearchProps } from '../types';
import Portfolio from './Portfolio';

const Search = ({ q, handleSubmit }: SearchProps) => {
  return (
    <div className='relative'>
      <div className='w-screen'>
        <div className='items-start p-12 h-full pb-0'>
          <div className='sm:flex'>
            <h1 className='font-bold text-center transform-all duration-1000 text-4xl text-primary mt-1'>
              Hello
            </h1>
            <div className='z-50 absolute ml-40'>
              <SearchBar
                hideButtons={true}
                hideIcon={true}
                value={q!}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className='grid h-full xl:first-letter xl:ml-40'>
            <span className='border-b-4 border-primary text-2xl text-primary xl:pt-12 pt-8 w-min px-1 mt-1'>
              All
            </span>
            <hr className='stroke-primary border-primary w-screen xl:-ml-52 -ml-12 top-40' />

            <div className='max-w-[1600px]'>
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
