import Card from './Card';

const Projects = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 place-items-stretch'>
      <Card
        header='_tracker'
        content='Progress tracker application for avid gym goers.'
        url='https://github.com/zxyctn/_tracker'
      />

      <Card
        header='wordle-clone'
        content='Wordle Clone with React'
        url='https://github.com/zxyctn/wordle-clone'
      />

      <Card
        header='library'
        content='A reading progress tracking app'
        url='https://github.com/zxyctn/library'
      />

      <Card
        header='trellone'
        content='Trello Clone with Svelte'
        url='https://github.com/zxyctn/library'
      />

      <Card
        header='skeleton-todo'
        content='A todo app with SvelteKit and Skeleton UI'
        url='https://github.com/zxyctn/skeleton-todo'
      />

      <Card
        header='sveltekit-todo'
        content='A todo app with SvelteKit and Sveltestrap'
        url='https://github.com/zxyctn/sveltekit-todo'
      />

      <Card
        header='svelte-datatable'
        content='A datatable component for Svelte implemented with Svelte Headless Table and Sveltestrap'
        url='https://github.com/zxyctn/svelte-datatable'
      />
    </div>
  );
};

export default Projects;
