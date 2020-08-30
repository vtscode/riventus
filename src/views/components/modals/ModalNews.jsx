import React from 'react';
import { Modal } from "antd";
import LoadingIframe from "../../../components/LoadingIframe";

export default props => {
  const { modalDetailNews,setmodalDetailNews } = props;
  const [isLoaded,setisLoaded] = React.useState(false);

  return(
    <Modal 
      width="90vw"
      visible={modalDetailNews.visible}
      onCancel={() => {
        setmodalDetailNews({visible:false, url : ''});
        setisLoaded(false);
      }}
      footer={null}
      centered
    >
      <LoadingIframe isLoaded={isLoaded}>
      <iframe onLoad={() => setisLoaded(true)} 
        src={modalDetailNews?.url} 
        style={{height:'90vh'}}
        width="100%"
        title="Riventus"
      ></iframe>
      </LoadingIframe>
    </Modal>
  )
};