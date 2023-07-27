import { useState } from 'react';

import Index from './pages/Index';
import Search from './pages/Search';

const App = () => {
  const [page, setPage] = useState('index');
  const [search, setSearch] = useState('');

  const handleSubmit = (q: string) => {
    setPage('search');
    setSearch(q);
  };

  return page === 'index' ? (
    <Index handleSubmit={handleSubmit} />
  ) : (
    <Search q={search} handleSubmit={handleSubmit} />
  );
};

export default App;
