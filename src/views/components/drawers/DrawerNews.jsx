import React from "react";
import moment from 'moment';
import '../styles/drwnews.scss';
import { Card,Typography } from "antd";
import { DataFooter } from '../footer';
import ModalNews from "../modals/ModalNews";
import styled from "styled-components";
import DrawerContainer from "./DrawerContainer";

const ContainerNews = styled.div`
  display:grid;
  grid-template-areas: "main tr tr tr tr"
                       "main tr tr tr tr";
  grid-gap:1em;
  justify-content:space-evenly;
  @media (max-width: 644px){
    grid-template-areas: "main main main main main"
                         "tr tr tr tr tr";
    justify-content:center;
  }
`;
const MainNews = styled.div`
  grid-area : main;
  align-self:center;
  @media (max-width: 644px){
    justify-self:center;
  }
`;
const TrendNTopNews = styled.div`
  grid-area : tr;
`;
const TrendNews = styled.div`
  display:grid;
`;
const TopNews = styled.div`
  display:grid;
`;
const MainContentWrap = styled.div`
  display:grid;
  height:80em;
  grid-auto-flow:row;
  overflow-y: scroll;
  grid-column-gap: 1em;

  @media (max-width: 644px){
    width:100%;
    justify-content:center;
    height:50em;
    overflow-y: scroll;
  }
`;
const ContentWrap = styled.div`
  display:grid;
  width:80em;
  grid-auto-flow:column;
  overflow-x: scroll;
  grid-column-gap: 1em;

  @media (max-width: 644px){
    display:flex;
    flex-wrap:wrap;
    width:100%;
    justify-content:center;
    height:20em;
    overflow-y: scroll;
  }
`;

const CardCustom = (item = {}) => (
  <Card
    style={{width:'20rem',cursor:'pointer'}}
    cover={
      <img
        alt="example"
        src={item?.urlToImage}
      />
    }
    onClick={item.handleClick}
    >
      <Typography.Title level={4}>{item?.title?.length > 50 ? `${item?.title?.substr(0,50)} ...` : item?.title}</Typography.Title>
      <Typography.Paragraph level={4}>
        {item?.description?.length > 50 ? 
          `${item?.description?.substr(0,50)} ...` : 
          item?.description}
      </Typography.Paragraph>
      <code>{moment(item?.publishedAt).format('dddd, DD MMMM YYYY (HH:mm)')} - {item?.author}</code>
  </Card>);

export default (props) => {
  const dataAPI = React.useContext(DataFooter);
  const [data,setData]= React.useState({});
  const [modalDetailNews,setmodalDetailNews] = React.useState({visible:false, url : ''});
  
  const propsModal = {modalDetailNews,setmodalDetailNews};

  const handleClickModal = (url) => {
    setmodalDetailNews({...modalDetailNews, visible: true, url });
  };

  React.useEffect(() => {
    if(Object.keys(dataAPI).length){
      // mainstory,technology,trending
      setData(dataAPI);
    }
  },[dataAPI]);

  return(<>
  <DrawerContainer {...props}>
    <ContainerNews>
      <MainNews>
        <MainContentWrap>
          {data?.mainstory && data?.mainstory?.map((x,idx) => <CardCustom key={idx} {...x} handleClick={() => handleClickModal(x?.url)} />) }
        </MainContentWrap>
      </MainNews>
      <TrendNTopNews>
        <TrendNews>
          <Typography.Title level={4}>TRENDING</Typography.Title>
          <ContentWrap>
            {data?.trending && data?.trending?.map((x,idx) => <CardCustom key={idx} {...x} handleClick={() => handleClickModal(x?.url)} />) }
          </ContentWrap>
        </TrendNews>
        <br />
        <TopNews>
          <Typography.Title level={4}>TECHNO</Typography.Title>
          <ContentWrap>
            {data?.technology && data?.technology?.map((x,idx) => <CardCustom key={idx} {...x} handleClick={() => handleClickModal(x?.url)} />) }
          </ContentWrap>
        </TopNews>
      </TrendNTopNews>
    </ContainerNews>
  </DrawerContainer>
  <ModalNews {...propsModal} />
  </>)
};