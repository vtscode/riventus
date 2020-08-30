import React from 'react';
// import LoadingSpin from './LoadingSpin';
import LoadingGif from '../../vendor/media/image/loading.gif';
import { Result } from 'antd';

const LoadingPage = () => {
  return (
    <Result
      icon={<img src={LoadingGif} alt="gambargif" />}
      title=""
      extra=""
    />
  );
}

export default LoadingPage;