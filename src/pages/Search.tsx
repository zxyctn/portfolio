import SearchBar from '../components/SearchBar';
import NotFound from './NotFound';
import type { SearchProps } from '../types';
import Portfolio from './Portfolio';

const Search = ({ q, handleSubmit, navigateToIndex }: SearchProps) => {
  return (
    <div className='relative'>
      <div className='flex justify-center md:justify-start p-6 sm:p-10'>
        <div className='items-start h-full w-full'>
          <div className='sm:flex relative'>
            <div
              onClick={navigateToIndex}
              className='font-bold z-50 cursor-pointer text-center transform-all duration-1000 text-4xl text-primary mt-1 sm:pb-0 pb-5 xl:w-72 md:w-40 logo'
            >
              Hello
            </div>
            <div className='flex z-40 absolute justify-center sm:justify-start w-full sm:w-fit sm:m-0 xl:pl-72 md:pl-40 sm:pl-32'>
              <SearchBar
                hideButtons={true}
                hideIcon={true}
                value={q!}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>

          <div className='grid h-full w-full pt-20 sm:pt-10'>
            <div className='flex w-full'>
              <div className='xl:w-72 md:w-10'></div>
              <span className='border-b-4 border-primary text-2xl text-primary w-min px-1 mt-1'>
                All
              </span>
            </div>
          </div>
          <hr className='stroke-primary border-primary/50 sm:-mx-10 -mx-6' />

          <div className='grid grid-flow-col-dense place-content-start h-full w-full'>
            <div className='xl:w-72 md:w-10 h-full'></div>
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
