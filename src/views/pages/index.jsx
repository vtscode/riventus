import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import SliderContainer from "./SliderContainer";
import './styles/index.scss';
import styled from 'styled-components';

const Quotes = styled.div`
  position: fixed;
  z-index: 11;
  bottom: 0;
  right: 26%;
  @media only screen and (max-width:600px){
    top:50%;
    bottom:unset;
    right:unset;
  }
`;

const App = () => {
  const [state,setState] = React.useState({});

  const fetchQuotes = async() => {
    try {
      let dateNow = new Date();
      const resp = await fetch(`https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${dateNow.getTime()}`);
      // items[items.length * Math.random() | 0]
      const result = await resp.json();
      console.clear();
      console.log(result);
      setState(state => ({...state, quote: result[result.length * Math.random() | 0] }) );
    } catch (error) {
      console.log(error?.message);
    }
  };

  React.useEffect(() => {
    setInterval(() => fetchQuotes(),15000)
  },[]);

  return(<>
    <Quotes>
      <code dangerouslySetInnerHTML={{__html:state?.quote?.content?.rendered}}></code>
    </Quotes>
    <Header />
    <SliderContainer />
    <Footer />
  </>);
};

export default App;