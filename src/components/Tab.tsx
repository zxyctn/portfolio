import { TabProps } from '../types';

const Tab = ({ name, id, active, clickHandler }: TabProps) => {
  return (
    <button
      className={`px-5 py-1.5 rounded-full text-primary  h-min bg-secondary border-2 w-max whitespace-nowrap ${
        active ? 'border-primary/50' : 'border-transparent'
      } hover:bg-secondary-focus/70`}
      id={id}
      onClick={() => clickHandler(id)}
    >
      {name}
    </button>
  );
};

export default Tab;
