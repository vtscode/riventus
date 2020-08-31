import React from 'react';
// import { Carousel } from 'antd';
import Dashboard from "../components/dashboard/Dashboard";
import styled from 'styled-components';
// import Dashboard2 from "../components/dashboard/Dashboard2";
// import Dashboard3 from "../components/dashboard/Dashboard3";
const Wrapper = styled.div`
  display: block;
  top: 5.3em;
  position: relative;
`
const SliderContainer = () => {
  return (<>
  <Wrapper>
    <Dashboard />
  </Wrapper>
  {/* <Carousel autoplay className="carousel-container">
    <div>
    </div>
    <div>
      <Dashboard2 />
    </div>
    <div>
      <Dashboard3 />
    </div> 
  </Carousel>*/}
  </>);
}

export default SliderContainer;