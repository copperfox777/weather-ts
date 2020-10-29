import React from "react";
import "./history.scss";
import ShowHistory from '../../components/showHistory'
import {useSelector} from 'react-redux'
import {getHistory} from '../../store/weatherSlice'

export default function Home() {
  const list = useSelector(getHistory)
  return (
    <div className="page">
          <ShowHistory list={list}/>
    </div>
  );
}
 