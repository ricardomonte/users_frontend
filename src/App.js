import React from 'react';
import Display from './components/Display';
import useFetch from './customHook/useFetch';
import Loading from './components/Loading';
import Style from './Styles/App.module.css';
import Errors from './components/Errors';

const url = 'http://localhost:4000/api/v1/users'
const App = () => {
  const {loading, data, error} = useFetch(url);
  if (loading) return (<Loading />);
  if (error) return (<Errors />);
  return (
    <div className={Style.container_app}>
      {data && <Display users={data} />}
    </div>
  );
}

export default App;
