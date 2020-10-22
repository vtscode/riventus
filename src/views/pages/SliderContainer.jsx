import React from 'react';
import styled from 'styled-components';
import Dashboard2 from "../components/dashboard/Dashboard2";
const Wrapper = styled.div`
  display: block;
  top: 5.3em;
  position: relative;
`
export default () => (
  <Wrapper>
    <Dashboard2 />
  </Wrapper>
);