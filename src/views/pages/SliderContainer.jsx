import React from 'react';
import { Carousel } from 'antd';
import Dashboard from "../components/dashboard/Dashboard";
// import Dashboard2 from "../components/dashboard/Dashboard2";
// import Dashboard3 from "../components/dashboard/Dashboard3";

const SliderContainer = () => {

  return (
  <Carousel autoplay className="carousel-container">
    <div>
      <Dashboard />
    </div>
    {/* <div>
      <Dashboard2 />
    </div>
    <div>
      <Dashboard3 />
    </div> */}
  </Carousel>
  );
}

export default SliderContainer;