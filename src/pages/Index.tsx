import SearchBar from '../components/SearchBar';
import type { SearchProps } from '../types';

const Index = ({ handleSubmit }: SearchProps) => {
  return (
    <div className='h-screen relative'>
      <div className='grid w-full items-center justify-center '>
        <div className='grid gap-5 sm:mt-96'>
          <h1 className='font-bold text-center transform-all duration-1000 text-6xl md:text-8xl text-primary logo'>
            Hello
          </h1>
          <SearchBar value='' handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Index;
