import React from "react";
import { Layout } from "antd";

const Dashboard = () => {
  return(<Layout style={{backgroundColor:'coral'}}>
    <Layout.Content style={{alignSelf:'center'}}>
      <iframe 
        width="1278" 
        height="620" 
        title="idx-live-channel"
        src="https://www.squidtv.net/" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen></iframe>
    </Layout.Content>
  </Layout>);
};

export default Dashboard;