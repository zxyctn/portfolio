import { useState } from 'react';

import Tab from '../components/Tab';
import Overview from '../components/Overview';
import About from '../components/About';
import Projects from '../components/Projects';
import TechnicalSkills from '../components/TechnicalSkills';

const Portfolio = () => {
  const [active, setActive] = useState('overview');

  const tabs = [
    { name: 'Overview', id: 'overview' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Technical kills', id: 'technical-skills' },
  ];

  const clickHandler = (id: string) => {
    if (id === 'resume') {
      window.open('https://', '_blank');
      return;
    } else setActive(id);
  };

  return (
    <div className='text-primary xl:max-w-[1200px]'>
      <p className='pt-5'>About 1 result</p>
      <div className='lg:flex pt-5 gap-8 items-center'>
        <div>
          <h1 className='h1 text-primary text-3xl whitespace-nowrap'>
            Ibrahim Mammadov
          </h1>
          <h4 className='text-sm'>Software Developer</h4>
        </div>
        <div className='w-full relative py-5 lg:py-0'>
          <div className='flex gap-3 overflow-auto no-scrollbar min-w-0 max-w-full absolute lg:-top-5'>
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
      </div>
      <div className='py-10 w-full'>
        {active === 'overview' && <Overview />}
        {active === 'projects' && <Projects />}
        {active === 'technical-skills' && <TechnicalSkills />}
      </div>
      <hr className='border-primary/50 w-full' />
      <About />
    </div>
  );
};

export default Portfolio;
