import React from 'react';
import Spinner from 'react-spinner-material';

const Loading = () => (
  <div className='loading_errors'>
      <h3>Loading</h3>
      <Spinner size={340} spinnerColor={"#333"} spinnerWidth={5} visible={true} />
  </div>
);

export default Loading 