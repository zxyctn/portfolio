import { useState } from 'react';

import Tab from '../components/Tab';
import Overview from '../components/Overview';
import About from '../components/About';

const Portfolio = () => {
  const [active, setActive] = useState('overview');

  const tabs = [
    { name: 'Overview', id: 'overview' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Technical kills', id: 'technical-skills' },
    { name: 'Other kills', id: 'other-skills' },
  ];

  const clickHandler = (id: string) => {
    setActive(id);
  };

  return (
    <div className='text-primary'>
      <p className='pt-5'>About 1 result</p>
      <div className='flex pt-5 gap-8 items-center'>
        <div>
          <h1 className='h1 text-primary text-3xl whitespace-nowrap'>Ibrahim Mammadov</h1>
          <h4 className='text-sm'>Software Developer</h4>
        </div>
        <div className='flex overflow-x-auto no-scrollbar gap-3'>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              name={tab.name}
              id={tab.id}
              active={tab.id === active}
              clickHandler={clickHandler}
            />
          ))}
        </div>
      </div>
      <div className='py-10'>{active === 'overview' && <Overview />}</div>
      <hr className='border-primary w-full' />
      <About />
    </div>
  );
};

export default Portfolio;
