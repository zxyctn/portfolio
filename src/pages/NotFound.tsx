const NotFound = ({ q }: { q: string }) => {
  return (
    <div className='grid gap-10 text-primary text-xl cursor-auto'>
      <div className=''>About 0 results</div>
      <div className='grid gap-0'>
        <div>
          Showing results for <span className='font-bold italic'>{q}</span>
        </div>
        <div className=''>
          Search instead for{' '}
          <span className='text-accent'>Ibrahim Mammadov</span>
        </div>
      </div>
      <div className='grid gap-0'>
        <div>Your search did not match any documents.</div>
        <div className=''>
          Suggestions:
          <ul className='list-disc pl-8'>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Try different keywords.</li>
            <li>Try more general keywords.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
