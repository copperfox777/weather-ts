import React from "react";
import "./home.scss";
import CitySelector from '../../components/citySelector'
import ShowWeather from '../../components/showWeather'
import {useSelector} from 'react-redux'
import { getWeather } from '../../store/weatherSlice'

export default function Home() {
  const list = useSelector(getWeather)
  return (
    <div className="page">
          <CitySelector/>
          <ShowWeather list={list}/>
    </div>
  );
}
 