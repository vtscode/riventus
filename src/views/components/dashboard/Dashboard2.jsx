import React from "react";
import { Layout } from "antd";
// import Particles from 'react-particles-js';

export default () => {
  return (
  <Layout>
    <Layout.Content style={{alignSelf:'center'}}>
      <iframe 
        height="600" 
        title="framingyt"
        style={{width:'100vw',overflowX:'scroll'}} 
        src="https://www.youtube.com/embed/5qap5aO4i9A" 
        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </Layout.Content>
  </Layout>
  )
};