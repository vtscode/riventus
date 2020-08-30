import React from "react";
import { Button,Modal } from "antd";
import MyLogo from "../../vendor/media/image/mylogo.svg";
import LoadingIframe from "../../components/LoadingIframe";

export default (props) => {
  const [loc,setLoc] = React.useState(false);
  const [contact,setcontact] = React.useState(false);

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
        <img src={MyLogo} alt="Riventus" width="15%" />
      </div>
      <div className="location-launcher fadeIn-element">
        <Button type="text" onClick={() => setLoc(true)} style={{color:'whitesmoke'}}>Location</Button>
      </div>
      <div className="contact-launcher fadeIn-element">
        <Button type="text" onClick={() => setcontact(true)} style={{color:'whitesmoke'}}>Resume</Button>
      </div>
    </div>
    <Modal 
      width="90vw"
      visible={loc}
      onCancel={() => setLoc(false)}
      footer={null}
      centered
    >
      <LoadingIframe>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416.8848904299367!2d106.78510502514459!3d-6.250576019451617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f169ba5e95a3%3A0x4723c0d7ccc0bcab!2sMusholla%20Darussalam!5e0!3m2!1sid!2sid!4v1597650147798!5m2!1sid!2sid" 
        frameBorder="0" width="100%" style={{border:0,height:'90vh'}} 
        allowFullScreen aria-hidden="false" tabIndex="0" title="Location Riventus"></iframe>
      </LoadingIframe>
    </Modal>
    <Modal 
      width="90vw"
      visible={contact}
      onCancel={() => setcontact(false)}
      footer={null}
      centered
    >
      <LoadingIframe>
        <iframe 
          src="https://docs.google.com/document/d/1Pd7HFO381fX1pFV9q4nlMYzYR_9bMULu/edit" 
          style={{height:'90vh'}}
          width="100%"
          title="Resume Riventus"
        ></iframe>
      </LoadingIframe>
    </Modal>
  </>);
};