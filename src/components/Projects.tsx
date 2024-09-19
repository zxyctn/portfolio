import {
  SiSvelte,
  SiReact,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiRecoil,
  SiSupabase,
  SiShadcnui,
  SiNextdotjs,
  SiSanity,
  SiPrisma,
} from 'react-icons/si';

import Card from './Card';
import { FaShield } from 'react-icons/fa6';

const Projects = () => {
  const projects = [
    {
      header: 'nextjs-todos',
      content: 'Kanban style todo app with NextJS, Prisma, NextAuth and Redux ',
      url: 'https://github.com/zxyctn/nextjs-todos',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Prisma', icon: <SiPrisma /> },
        { name: 'NextAuth.js', icon: <FaShield /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        { name: 'shaodcn/ui', icon: <SiShadcnui /> },
      ],
    },
    {
      header: 'nextjs-blog',
      content: 'A Simple Blog Example With NextJS and Sanity',
      url: 'https://github.com/zxyctn/nextjs-blog',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Sanity', icon: <SiSanity /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
    {
      header: 'prefixed',
      content: 'Multiplayer game to test your dictionary',
      url: 'https://github.com/zxyctn/prefixed',
      technologies: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Recoil', icon: <SiRecoil /> },
        { name: 'Supabase', icon: <SiSupabase /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      ],
    },
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
