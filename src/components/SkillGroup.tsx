import { Skill, SkillGroupProps } from '../types';

const SkillGroup = ({ header, skills }: SkillGroupProps) => {
  return (
    <div className='rounded-3xl bg-secondary place-self-stretch h-fit p-1 w-full'>
      <div className='px-4 py-3 grid h-max grid-flow-row gap-2'>
        <h2 className='text-lg align-top text-primary'>{header}</h2>
        {skills.map((skill: Skill) => (
          <div
            className='flex gap-5 justify-between items-center'
            key={skill.name}
          >
            <div className='flex gap-2 items-center'>
              {skill.icon}
              <h3 className='text-primary'>{skill.name}</h3>
            </div>
            <progress
              className='progress progress-primary w-2/3'
              value={skill.value}
              max='100'
            ></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillGroup;
