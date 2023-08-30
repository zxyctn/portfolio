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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Link
          href='https://www.linkedin.com/in/zxyctn/'
          platform='LinkedIn'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>
    </div>
  );
};

export default About;
