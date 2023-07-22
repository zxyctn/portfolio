import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className='h-screen relative'>
      <div className='grid w-full items-center justify-center '>
        <div className='grid gap-5 sm:mt-96'>
          <h1 className='font-bold text-center transform-all duration-1000 text-6xl md:text-8xl text-primary'>
            Hello
          </h1>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default App;
