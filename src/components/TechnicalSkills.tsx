import {
  SiDjango,
  SiSvelte,
  SiReact,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiLinux,
  SiWindows,
  SiGit,
	SiFigma,
	SiPlaywright,
	SiPytest
} from 'react-icons/si';

import SkillGroup from './SkillGroup';

const TechnicalSkills = () => {
  const groups = [
    {
      name: 'Web development',
      skills: [
        {
          name: 'React',
          value: 90,
          icon: <SiReact />,
        },
        {
          name: 'Svelte',
          value: 80,
          icon: <SiSvelte />,
        },
        {
          name: 'SvelteKit',
          value: 70,
          icon: <SiSvelte />,
        },
        {
          name: 'Django',
          value: 90,
          icon: <SiDjango />,
        },
      ],
    },
    {
      name: 'Programming languages',
      skills: [
        {
          name: 'Python',
          value: 90,
          icon: <SiPython />,
        },
        {
          name: 'JavaScript',
          value: 90,
          icon: <SiJavascript />,
        },
        {
          name: 'TypeScript',
          value: 80,
          icon: <SiTypescript />,
        },
      ],
    },
    {
      name: 'Operating systems',
      skills: [
        {
          name: 'Linux',
          value: 90,
          icon: <SiLinux />,
        },
        {
          name: 'Windows',
          value: 90,
          icon: <SiWindows />,
        },
      ],
    },
    {
      name: 'Other tools',
      skills: [
        {
          name: 'Git',
          value: 90,
          icon: <SiGit />,
        },
        {
          name: 'Figma',
          value: 90,
          icon: <SiFigma />,
        },
        {
          name: 'Playwright',
          value: 90,
          icon: <SiPlaywright />,
        },
        {
          name: 'pytest',
          value: 90,
          icon: <SiPytest />,
        },
      ],
    },
  ];

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full'>
      {groups.map((group) => (
        <SkillGroup
          header={group.name}
          skills={group.skills}
          key={group.name}
        />
      ))}
    </div>
  );
};

export default TechnicalSkills;
