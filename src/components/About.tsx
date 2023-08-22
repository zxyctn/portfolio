import { Github, Linkedin } from 'react-bootstrap-icons';
import Link from './Link';

const About = () => {
  return (
    <div className='grid grid-cols-2 gap-20 pt-16 place-content-between'>
      <div className='grid gap-10'>
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

      <div className='flex gap-16'>
        <div className='border-l border-primary -my-5'></div>
        <div className='grid gap-5'>
          <h1 className='text-3xl font-semibold'>About</h1>
          <p className='max-w-[500px]'>
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
              <div className='grid gap-2 place-items-center'>
                <Linkedin className='text-primary' size={42} />
                <p className='text-sm'>LinkedIn</p>
              </div>
              <div className='grid gap-2 items place-items-center'>
                <Github className='text-primary' size={42} />
                <p className='text-sm'>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
