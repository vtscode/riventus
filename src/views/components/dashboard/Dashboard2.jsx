import React from "react";
import { Layout } from "antd";
// import Particles from 'react-particles-js';

export default () => {
  return (
  <Layout>
    {/* <div>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />
    </div> */}
    <Layout.Content style={{alignSelf:'center'}}>
      {/* 
      deep legacy live stream youtube
      <iframe 
        width="1013" 
        height="620" 
        title='billboard-korea'
        src="https://www.youtube.com/embed/SkIvAecWc5g" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe> */}
      <iframe height="600" style={{width:'100vw',overflowX:'scroll'}} src="https://www.youtube.com/embed/apNsOEb7umE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Layout.Content>
  </Layout>
  )
};