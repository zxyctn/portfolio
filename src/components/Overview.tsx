import Card from "./Card";

const Overview = () => {
  return (
    <div className='flex flex-wrap gap-5'>
      <div className='w-min min-w-min h-full m-auto lg:m-0'>
        <Card image='https://avatars.githubusercontent.com/u/26652410?v=4' />
      </div>
      <div className='grid min-w-min max-w-xl gap-5 grow lg:grow-0'>
        <div className='min-w-min max-w-xl h-[120px]'>
          <Card header='Job' content='Full-stack developer' footer='iDiv' />
        </div>

        <div className=' max-w-xl min-w-full h-[120px]'>
          <Card
            header='MSc.'
            content='HCI'
            footer='Bauhaus University Weimar'
          />
        </div>
      </div>

      <div className='max-w-xl min-w-min h-[120px] grow lg:grow-0'>
        <Card
          header='BSc.'
          content='Computer Engineering'
          footer='Bilkent University'
        />
      </div>
    </div>
  );
};

export default Overview;
