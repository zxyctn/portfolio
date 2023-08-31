import { useState } from 'react';
import Confetti from 'react-confetti';

import SearchBar from '../components/SearchBar';
import type { SearchProps } from '../types';

const Index = ({ handleSubmit }: SearchProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLuck = () => {
    setShowConfetti(true);
  };

  return (
    <div className='h-screen relative'>
      <div className='grid w-full items-center justify-center h-full'>
        <div className='grid gap-5 h-[130px] md:h-[165px]'>
          <h1 className='font-bold text-center transform-all duration-1000 text-6xl md:text-8xl text-primary logo'>
            Hello
          </h1>
          <SearchBar
            value=''
            handleSubmit={handleSubmit}
            handleLuck={handleLuck}
          />
        </div>
        <div className=''></div>
      </div>
      <Confetti
        recycle={false}
        className='w-full h-full'
        run={showConfetti}
        onConfettiComplete={(confetti) => {
          setShowConfetti(false);
          confetti!.reset();
        }}
      />
    </div>
  );
};

export default Index;
