import React from "react";
import { Modal,Carousel } from "antd";

const dataImg = [
  {src :'https://i.ibb.co/fqdQ6hm/Screenshot-2020-08-18-Asosiasi-Wisata-Medis-Indonesia.jpg', url : 'https://awmi.co.id/'},
  {src :'https://i.ibb.co/7pRmLZV/Screenshot-2020-08-18-Hayuning-Technology-Blockchain-Enterprise-Solutions-and-Consultancy.png', url : 'https://hayuningindotech.id/'},
  {src :'https://i.ibb.co/94YrR3d/Screenshot-2020-08-30-DINAR-BEAUTY-CARE-AND-MOM-BABY-SPA.jpg', url : 'https://dbc.hayuningindotech.id/'},
  {src :'https://i.ibb.co/fN74cvX/Screenshot-2020-08-18-TVAPP.png', url : 'https://github.com/rhivent'},
  {src :'https://i.ibb.co/dQ5FcWC/Screenshot-2020-08-30-Riventus-Clothing.jpg', url : 'https://riventus-clothing.herokuapp.com'},
  {src :'https://i.ibb.co/7Rpgykv/Screenshot-2020-08-18-Weather-PWA.png', url : 'https://weather-ventus.glitch.me/'},
  {src :'https://i.ibb.co/TRRNhJ9/Screenshot-2020-08-30-Riventus-Audio-Player.png', url : 'http://eight-channel.surge.sh/'},
  {src :'https://i.ibb.co/fFzyJM8/Screenshot-2020-08-30-Natours-Exciting-tour-for-adventours-people.jpg', url : 'http://laughable-steel.surge.sh/'},
  {src :'https://i.ibb.co/8gmf8gh/Screenshot-2020-08-30-RAHA-World-s-Top-Creative-Solutions.png', url : 'http://mean-payment.surge.sh/'},
  {src :'https://i.ibb.co/mGRrkhm/Screenshot-2020-08-30-IPusnas-Dashboard.png', url : 'https://ipusnas-dashboard.aksaramaya.id/'},
];

export default (props) => {
  const { menuOpt,setmenuOpt } = props;

  return(
  <Modal
    width="80vw"
    centered
    visible={menuOpt.blog}
    onCancel={() => setmenuOpt( menuOpt => ({...menuOpt, blog : false}) )}
    footer={null}
  >
    <div
      style={{overflow:'scroll',height:'90vh'}}
    >
      <Carousel autoplay className="carousel-container">
      {dataImg.map((x,indx) => (
        <div key={indx}>
          <a href={x.url} style={{cursor:'pointer'}} target="_blank" rel="noopener noreferrer"><img src={x.src} alt={x.src.split('/').pop()} width="100%" /></a>
        </div>))}
      </Carousel>
    </div>
  </Modal>)
};