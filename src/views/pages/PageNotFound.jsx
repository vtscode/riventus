import React from 'react';
import { Result } from 'antd';

const PageNotFound = (props) => {
  console.log(props);
  return (
    <Result
      status="404"
      title="404"
      subTitle="Maaf, Halaman yang Anda cari tidak ada."
      extra=""
    />
  );
}

export default PageNotFound;