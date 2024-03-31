import { Github, Linkedin } from 'react-bootstrap-icons';

import Link from './Link';

const About = () => {
  return (
    <div className='grid md:grid-cols-2 lg:gap-20 gap-20 sm:gap-10 py-16 lg:place-content-between place-content-center'>
      <div className='flex lg:gap-16 order-1 md:order-2'>
        <div className='border-l border-primary/50 -my-5 hidden md:block'></div>
        <div className='grid gap-5 md:pl-10 lg:pl-0'>
          <h1 className='text-3xl font-semibold'>About</h1>
          <p className='max-w-[500px] text-primary/75'>
            Actively working with and developing skills towards front-end
            development for web, desktop and mobile platforms. Experienced with
            front-end, back-end and UI/UX development. Always keeping in touch
            with latest technologies and trying to be an early adopter.
          </p>
          <div className='pt-8'>
            <h1 className='text-xl pb-5'>Profiles</h1>
            <div className='flex gap-8 items-end'>
              <a
                href='https://www.linkedin.com/in/zxyctn/'
                className='grid gap-2 place-items-center'
              >
                <Linkedin className='text-primary' size={42} />
                <p className='text-sm'>LinkedIn</p>
              </a>

              <a
                href='https://www.github.com/zxyctn'
                className='grid gap-2 items place-items-center'
              >
                <Github className='text-primary' size={42} />
                <p className='text-sm'>GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='grid gap-10 md:order-1 order-2'>
        <Link
          href='https://www.github.com/zxyctn'
          platform='GitHub'
          text='prefixed · _tracker · wordle-clone · trellone · PhenObs · more repositories...'
        />
        <Link
          href='https://www.linkedin.com/in/zxyctn/'
          platform='LinkedIn'
          text='Weimar, Thüringen, Deutschland · German Centre for Integrative Biodiversity Research (iDiv) Halle-Jena-Leipzig'
        />
      </div>
    </div>
  );
};

export default About;
