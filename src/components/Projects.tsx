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
  SiPytest,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si';

import Card from './Card';

const Projects = () => {
  const projects = [
    {
      header: '_tracker',
      content: 'Progress tracker application for avid gym goers.',
      url: 'https://github.com/zxyctn/_tracker',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'wordle-clone',
      content: 'Wordle Clone with React',
      url: 'https://github.com/zxyctn/wordle-clone',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'library',
      content: 'A reading progress tracking app',
      url: 'https://github.com/zxyctn/library',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'trellone',
      content: 'Trello Clone with Svelte',
      url: 'https://github.com/zxyctn/trellone',
      technologies: [
        { name: 'Svelte', icon: <SiSvelte /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'skeleton-todo',
      content: 'A todo app with SvelteKit and Skeleton UI',
      url: 'https://github.com/zxyctn/skeleton-todo',
      technologies: [
        { name: 'SvelteKit', icon: <SiSvelte /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'sveltekit-todo',
      content: 'A todo app with SvelteKit and Sveltestrap',
      url: 'https://github.com/zxyctn/sveltekit-todo',
      technologies: [
        { name: 'SvelteKit', icon: <SiSvelte /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
      ],
    },
    {
      header: 'svelte-datatable',
      content:
        'A datatable component for Svelte implemented with Svelte Headless Table and Sveltestrap',
      url: 'https://github.com/zxyctn/svelte-datatable',
      technologies: [
        { name: 'Svelte', icon: <SiSvelte /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
      ],
    },
  ];

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 place-items-stretch'>
      {projects.map((project) => (
        <Card
          header={project.header}
          content={project.content}
          url={project.url}
          technologies={project.technologies}
          key={project.header}
        />
      ))}
    </div>
  );
};

export default Projects;
