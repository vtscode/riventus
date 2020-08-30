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
    top:7em;
    bottom:unset;
  }
`;

const App = () => {
  const [state,setState] = React.useState({quote : '' });

  const fetchQuotes = async() => {
    // const resp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
    // setState(state => ({...state, quote:result[0]}) );
    const resp = await fetch('http://numbersapi.com/random/trivia');
    const result = await resp.text();
    console.clear();
    console.log(resp);
    setState(state => ({...state, quote:result}) );
  };

  React.useEffect(() => {
    setInterval(() => fetchQuotes(),15000)
  },[]);

  return(<>
    <Quotes><code>{state.quote}</code></Quotes>
    <Header />
    <SliderContainer />
    <Footer />
  </>);
};

export default App;