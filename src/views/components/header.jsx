import React from "react";
import { Button,Modal } from "antd";
import MyLogo from "../../vendor/media/image/mylogo.svg";
import LoadingIframe from "../../components/LoadingIframe";

export default () => {
  const [loc,setLoc] = React.useState(false);
  const [contact,setcontact] = React.useState(false);
  
  const styling = {
    one : {
      color:'whitesmoke',
      zIndex:11
    },
    two : {
      height : "90vh"
    }
  };

  return(<>
    <div className="border-top top-position">
      <div className="social-icons-wrapper fadeIn-element">
        <ul className="social-icons">
          <li className="social-icon">
            <a href="https://twitter.com/riventusaha" target="_blank" rel="noopener noreferrer"><span className="ion-social-twitter"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://www.facebook.com/riventus.aritonang" target="_blank" rel="noopener noreferrer"><span className="ion-social-facebook"></span></a>
          </li>
          <li className="social-icon">
            <a href="mailto:ventusmn@gmail.com" target="_blank" rel="noopener noreferrer"><span className="ion-email-unread"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://www.youtube.com/channel/UCBsSxrVeP_FgLlUTuRKS-tA" target="_blank" rel="noopener noreferrer"><span className="ion-social-youtube"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://linkedin.com/in/riventusaritonang" target="_blank" rel="noopener noreferrer"><span className="ion-social-linkedin"></span></a>
          </li>
          <li className="social-icon">
            <a href="https://github.com/rhivent" target="_blank" rel="noopener noreferrer"><span className="ion-social-github"></span></a>
          </li>
        </ul>
      </div>
      <div className="instagram-feed-mobile-launcher toggle-instagram-feed-content fadeIn-element">
        <a href="https://instagram.com/rhivent" target="_blank" rel="noopener noreferrer"><span className="ion-social-instagram"></span></a>
      </div>
      <div className="template-title fadeIn-element">
        <Button type="text" onClick={() => setcontact(true)} style={styling.one}>Resume</Button>
      </div>
      <div className="contact-launcher fadeIn-element">
        <Button type="text" ><img src={MyLogo} alt="Riventus" style={styling.one} /> LOGO</Button>
      </div>
      <div className="location-launcher fadeIn-element">
        <Button type="text" onClick={() => setLoc(true)} style={styling.one}>Location</Button>
      </div>
    </div>
    <Modal 
      width="100vw"
      style={{ top: 10 }}
      visible={loc}
      onCancel={() => setLoc(false)}
      footer={null}
    >
      <LoadingIframe>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.03874925525!2d106.73203891920102!3d-6.2841018922236245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1616937970633!5m2!1sid!2sid" 
        frameBorder="0" width="100%" style={{...styling.two, boder : 0}}
        allowFullScreen aria-hidden="false" tabIndex="0" title="Location Riventus"></iframe>
      </LoadingIframe>
    </Modal>
    <Modal 
      width="100vw"
      style={{ top: 10 }}
      visible={contact}
      onCancel={() => setcontact(false)}
      footer={null}
    >
      <iframe 
        src="https://docs.google.com/document/d/1Pd7HFO381fX1pFV9q4nlMYzYR_9bMULu/edit" 
        width="100%"
        style={{...styling.two}} 
        title="Resume Riventus"
      ></iframe>
    </Modal>
  </>);
};