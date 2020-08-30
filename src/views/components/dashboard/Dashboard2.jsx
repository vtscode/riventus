import React from "react";
import { Layout } from "antd";
// import Particles from 'react-particles-js';

export default () => {
  return (
  <Layout style={{backgroundColor:'coral'}}>
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
      <iframe 
        width="1013" 
        height="620" 
        title='billboard-korea'
        src="https://www.youtube.com/embed/SkIvAecWc5g" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </Layout.Content>
  </Layout>
  )
};