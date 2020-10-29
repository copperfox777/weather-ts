import React,  { useState } from 'react';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom'

export default function ShowWeather(){

    let history = useHistory();
    
    return (
      <Menu className="menu" mode="horizontal">
        <Menu.Item onClick = {()=>history.push('/home')} key="mail">
          Home
        </Menu.Item>
        <Menu.Item onClick = {()=>history.push('/history')} key="app" >
          History
        </Menu.Item>
      </Menu>
    );
  
}