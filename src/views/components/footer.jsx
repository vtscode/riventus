import React from "react";
import { Button, Space, notification } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import ModalBlog from "./drawers/ModalBlog";
import DrawerNews from "./drawers/DrawerNews";
import DrawerWork from "./drawers/DrawerWork";
import DrawerAbout from "./drawers/DrawerAbout";
import DrawerContainer from "./drawers/DrawerContainer";
import "./styles/footer.style.scss";
import oProvider from "../../providers/oprovider";
import moment from 'moment';

export const DataFooter = React.createContext({});

export default () => {
  const [menuOpt,setmenuOpt] = React.useState({
    about : false,
    blog : false,
    news : false,
    mobile: false,
    work : false,
  });
  const [state,setState] = React.useState({});

  const handleClickMenu = (type = '') => {
    switch (type) {
      case '':
        setmenuOpt({});
        break;
      default:
        setmenuOpt({...menuOpt, [type]:true});
        break;
    }
  };

  const handleInput = (e)=> {
    e.preventDefault(); 
    if(e?.target?.value){
      notification.success({
        message:  e.target.value,
        description:
          '',
      });
    }else{
      notification.error({
        message: 'TIDAK ADA PESAN',
        description:
          '',
      });
    }
  };

  const propsDrawerMenu = {menuOpt,setmenuOpt};
  
  React.useEffect(() => {
    const callingData = async () => {
      const fromDate = moment().subtract(1, 'months').format('YYYY-MM-DD');
      const toDate = moment().format('YYYY-MM-DD');

      try{
        const [
          { articles : mainstory },
          { articles : technology },
          { articles : trending },
        ] = await Promise.all([
          oProvider.newsapi('top-headlines?country=id'),
          oProvider.newsapi('top-headlines?country=us&category=technology'),
          oProvider.newsapi(`everything?language=en&q=trending&from=${fromDate}&to=${toDate}&sortBy=popularity&pageSize=20`),
        ]);
  
        setState(state => ({...state,mainstory,technology,trending}));
      }catch(error) {
        console.log(error?.message);
      }
    };
    callingData();
  },[]);

  return(<DataFooter.Provider value={state}>
    <div className="border-bottom-menu bottom-position">
      <div className="fadeIn-element" id="menu">
        <nav className="menu">
          <ul>
            <li>
            <Button type='text' style={{color:'#fff'}}>Home</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('news')} style={{color:'#fff'}}>News</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('about')} style={{color:'#fff'}}>About</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('blog')} style={{color:'#fff'}}>Blog</Button>
            </li>
            <li>
            <Button type='text' onClick={() => handleClickMenu('work')} style={{color:'#fff'}}>Work</Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <DrawerAbout {...propsDrawerMenu} type="about" />
    <ModalBlog {...propsDrawerMenu} type="blog" />
    <DrawerNews {...propsDrawerMenu} type="news" />
    <DrawerWork {...propsDrawerMenu} type="work" />

    {/* footer for mobile */}
    <div className="border-bottom bottom-position">
      <div className="menu-mobile">
        <nav className="menu" id="menu-mobile">
          <ul>
            <li>
              {window.screen.width < 644 ?
                <Button 
                  type='text'
                  onClick={() => handleClickMenu('mobile')}
                  icon={<EllipsisOutlined />} 
                  className="menu-trigger ion-android-menu" 
                  style={{transform:'translateY(1em)'}}
                ></Button>
              : null}
            </li>
          </ul>
        </nav>
      </div>
      <div className="copyright fadeIn-element">
        <a href="https://rhivent.github.io">Customized by Riventus</a>
      </div>
      <div id="subscribe-wrapper">
        <div id="newsletter">
          <div className="newsletter fadeIn-element">
            <form id="subscribe" name="subscribe" onSubmit={(e) => {e.preventDefault(); e.stopPropagation(); }}>
              <input 
                className="subscribe-requiredField subscribe-email"
                id="subscribe-email" 
                name="subscribeemail" 
                placeholder="Email" 
                type="text" 
                onBlur={handleInput}
              />
              <button type="button" className="btn btn-padding btn-pc c-btn c-btn-inverse"><span className="btn-label">Whisp me !</span></button> 
              <button type="button" className="btn btn-padding btn-mobile c-btn c-btn-inverse"><span className="btn-label"><i className="ion-android-send"></i></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    <DrawerContainer
      {...propsDrawerMenu}
      type="mobile"
      others={{
        height:"4.375em",
        closable:false
      }}
      >
      <Space>
        <Button type='text'>Home</Button>
        <Button type='text' onClick={() => handleClickMenu('news')}>News</Button>
        <Button type='text' onClick={() => handleClickMenu('about')}>About</Button>
        <Button type='text' onClick={() => handleClickMenu('blog')}>Blog</Button>
        <Button type='text' onClick={() => handleClickMenu('work')}>Works</Button>
      </Space>
    </DrawerContainer>
  </DataFooter.Provider>);
};