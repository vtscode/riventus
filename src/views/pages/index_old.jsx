import React from 'react';
import { notification, message } from 'antd';
import Video from '../../vendor/media/mp4/bg.mp4';
import './styles/index.css';

const FrontPage = () => {
  const [state,setstate] = React.useState({});
  
  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.name,e.target.value);
    const { name, value } = e.target;
    if(value){
      setstate({...state, [name] : value });
    }else{
      message.error('Can not display empty notes');
    }
  };
  const handleClick = e => {
    e.preventDefault();
    notification.info({
      message: `Notification`,
      description: `Halo, Welcome to my page, here your message : ${state?.guest_status}`,
      placement : 'topRight',
    });
  };

  return(<>
    <div className="overlay"></div>
    <video playsInline="playsinline" autoPlay muted="muted" loop="loop">
      <source src={Video} type="video/mp4" />
    </video>

  <div className="masthead">
    <div className="masthead-bg"></div>
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-12 my-auto" style={{height:'100vh'}}>
          <div className="masthead-content text-white py-5 py-md-0">
            <h1 className="mb-3" style={{color:'#eee'}}>On Going !</h1>
            <p className="mb-5">Hi, It's me, Riventus from Jakarta, Indonesia, nice to meet you! Thanks for see my landing page. I love <code>programming</code> and improve myself to be great on it. <strong>ENJOY!</strong></p>
            <div className="input-group input-group-newsletter">
              <input type="text" name="guest_status" className="form-control" placeholder="Enter you notes..." aria-label="Enter notes..." aria-describedby="submit-button" onBlur={handleChange} />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" id="submit-button" onClick={handleClick}>Show to me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="social-icons">
    <ul className="list-unstyled text-center mb-0">
      <li className="list-unstyled-item">
        <a href="https://twitter.com/riventusaha" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="list-unstyled-item">
        <a href="https://www.facebook.com/riventus.aritonang" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
      <li className="list-unstyled-item">
        <a href="https://instagram.com/rhivent" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
  </>);
};

export default FrontPage;