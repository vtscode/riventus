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
        <Button type="text" style={styling.one}><img src={MyLogo} alt="Riventus"/></Button>
      </div>
      <div className="location-launcher fadeIn-element">
        <Button type="text" onClick={() => setLoc(true)} style={styling.one}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
            <g>
              <g>
                <path d="M452.539,182.719c-1.855-27.469-8.225-52.912-18.93-75.622c-2.149-4.558-7.583-6.51-12.142-4.362
                  c-4.556,2.148-6.51,7.584-4.362,12.142c9.731,20.644,15.528,43.883,17.229,69.072c0.488,7.219,0.735,14.568,0.735,21.843
                  c0,61.668-17.609,121.515-50.923,173.068c-31.668,49.007-75.917,88.313-128.149,113.893
                  c-52.232-25.58-96.479-64.886-128.149-113.893C94.533,327.306,76.925,267.46,76.925,205.792c0-7.27,0.248-14.621,0.735-21.843
                  c2.773-41.075,16.123-76.152,39.679-104.258c21.055-25.123,49.785-43.62,83.081-53.492c35.165-10.427,73.976-10.618,109.288-0.542
                  c37.195,10.613,68.419,31.628,90.295,60.776c3.024,4.03,8.742,4.844,12.772,1.821c4.03-3.025,4.844-8.743,1.82-12.772
                  C390.31,43.12,355.772,19.824,314.716,8.11c-38.604-11.014-81.034-10.803-119.48,0.595
                  c-36.744,10.894-68.515,31.387-91.879,59.265c-26.09,31.13-40.859,69.738-43.899,114.748c-0.516,7.631-0.777,15.394-0.777,23.073
                  c0,65.19,18.619,128.46,53.845,182.97c34.301,53.081,82.564,95.393,139.573,122.362c1.235,0.584,2.568,0.876,3.901,0.876
                  c1.333,0,2.666-0.292,3.902-0.876c57.007-26.969,105.271-69.282,139.572-122.362c35.226-54.51,53.845-117.782,53.845-182.97
                  C453.315,198.107,453.054,190.344,452.539,182.719z"/>
              </g>
            </g>
            <g>
              <g>
                <path d="M255.998,65.088c-75.17,0-136.326,61.156-136.326,136.326c0,30.323,9.744,59.028,28.179,83.012
                  c3.07,3.995,8.798,4.744,12.792,1.673c3.995-3.07,4.744-8.798,1.673-12.792c-6.937-9.024-12.448-18.823-16.468-29.172
                  c8.686-1.236,21.311-3.858,35.615-9.434c23.209-9.047,55.331-27.865,79.116-66.405c6.881,0.894,20.024,3.395,35.44,10.309
                  c29.08,13.042,52.628,35.073,70.081,65.468c-17.139,44.088-60.027,75.423-110.101,75.423c-27.372,0-54.05-9.578-75.119-26.97
                  c-3.885-3.208-9.635-2.658-12.842,1.227c-3.208,3.885-2.658,9.635,1.227,12.842c24.33,20.085,55.133,31.146,86.734,31.146
                  c75.17,0,136.326-61.155,136.326-136.326C392.325,126.243,331.168,65.088,255.998,65.088z M302.608,161.566
                  c-25.817-11.391-45.878-11.978-46.719-11.997c-3.367-0.081-6.466,1.685-8.128,4.589c-17.03,29.76-41.334,51.047-72.235,63.273
                  c-14.678,5.807-27.463,8.089-34.967,8.984c-1.742-8.127-2.643-16.488-2.643-25.001c0-65.109,52.97-118.081,118.081-118.081
                  c65.109,0,118.081,52.97,118.081,118.081c0,6.397-0.519,12.674-1.502,18.799C349.774,187.577,322.684,170.422,302.608,161.566z"/>
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
        </Button>
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
