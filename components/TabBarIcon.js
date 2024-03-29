import React from "react";
import {Image} from 'react-native'

const TabBarIcon = (focused, name) => {
  let iconTmagePath;
  if(name === "채팅"){
    iconTmagePath = require ('../Screen/assets/chat.png')
  }else if(name === "메인"){
    iconTmagePath = require ('../Screen/assets/Home.png')
  }else if (name === "정보"){
    iconTmagePath = require ('../Screen/assets/User.png')
  }

  return(
    <Image style = {{
      width: focused ? 24:20,
      height: focused ? 24:20,
    }}
    source = {iconTmagePath}
    />
  )
}

export default TabBarIcon