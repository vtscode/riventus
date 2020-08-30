import React from "react";
import { Drawer } from "antd";

export default (props) => {
  const { menuOpt,setmenuOpt, type,others = {} } = props;

  return(
  <Drawer
    placement="bottom"
    onClose={() => setmenuOpt({...menuOpt, [type] : false})}
    visible={menuOpt[type]}
    key="bottom"
    height="30em"
    {...others}
  >
    {props.children}
  </Drawer>
  );
};