import React from 'react';
import Display from './components/Display';
import useFetch from './customHook/useFetch';
import Style from './Styles/App.module.css';

const url = 'http://localhost:4000/api/v1/users'
const App = () => {
  const {loading, data, error} = useFetch(url);
  if (loading) return 'Loading';
  if (error) return 'Something went wrong'
  return (
    <div className={Style.container_app}>
      {data && <Display users={data} />}
    </div>
  );
}

export default App;
