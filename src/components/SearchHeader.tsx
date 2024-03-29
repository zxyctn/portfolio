import SearchBar from './SearchBar';
import type { SearchProps } from '../types';

const SearchHeader = ({ q, handleSubmit }: SearchProps) => {
  return (
    <div className='flex gap-16 items-start p-10 px-20 h-full pb-0'>
      <h1 className='font-bold text-center transform-all duration-1000 text-6xl md:text-4xl text-primary mt-1 logo'>
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

        <span className='border-b-4 border-primary text-2xl text-primary font-bold pt-20 w-min px-1'>
          All
        </span>
      </div>
    </div>
  );
};

export default SearchHeader;
