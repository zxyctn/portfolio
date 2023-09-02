import { useEffect, useState } from 'react';
import { LuSunMedium, LuMoon } from 'react-icons/lu';

const ThemeToggler = () => {
  const [dark, setDark] = useState(() => {
    let theme = window.localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      window.localStorage.setItem('theme', theme);
    }
    return theme === 'dark';
  });

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);

    const html = document.getElementsByTagName('html')[0] as HTMLElement;

    html.classList.add(theme);
    html.classList.remove(!dark ? 'dark' : 'light');

    html.setAttribute('data-theme', theme);
  }, [dark]);

  const handleChange = () => {
    setDark((current) => {
      return !current;
    });
  };

  return (
    <div className='flex justify-end items-end h-8'>
      <label className='swap swap-rotate w-6 h-6'>
        <input type='checkbox' checked={dark} onChange={handleChange} />
        <LuSunMedium data-set-theme='light' className='swap-off w-6 h-6' />
        <LuMoon data-set-theme='dark' className='swap-on w-6 h-6' />
      </label>
    </div>
  );
};

export default ThemeToggler;
