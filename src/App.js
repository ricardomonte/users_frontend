import React from 'react';
import Display from './components/Display';
import useFetch from './customHook/useFetch'

const url = 'http://localhost:4000/api/v1/users'
const App = () => {
  const {loading, data, error} = useFetch(url);
  if (loading) return 'Loading';
  if (error) return 'Something went wrong'
  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {data && <Display users={data} />}
    </div>
  );
}

export default App;
