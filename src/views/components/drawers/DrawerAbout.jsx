import React from "react";
import DrawerContainer from "./DrawerContainer";
import mypict from "../../../vendor/media/image/mypict.jpeg";
import { Typography } from "antd";
import '../styles/drwabout.scss';

export default (props) => {
  return(<DrawerContainer {...props}>
    <center>
      <div style={{display:'grid',width:'70%'}}>
        <figure>
          <img src={mypict} alt="mypict" style={{borderRadius:'50%'}} />
        </figure>
        <Typography.Title level={4}>Riventus AHA</Typography.Title>
        <Typography.Text strong>FrontEnd Developer</Typography.Text>
        <Typography.Paragraph>
          After +1 year on programming career, I am really excited to build more project with more benefit to the people and make something valuable with modern tech stack. Prefer work on web based environment including web design using HTML, CSS, ReactJS.
        </Typography.Paragraph>
      </div>
    </center>
  </DrawerContainer>)
};