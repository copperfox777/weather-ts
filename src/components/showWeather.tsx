import React from 'react';
import { getWeataher, getHistory } from '../store/weatherSlice'
export interface WeatherItem {
  date: string;
  temp: number;
  description:string;
}

export interface ShowWeatherProps {
  list: WeatherItem[]
}

 const ShowWeather: React.FC<ShowWeatherProps> = (props) => {
    return (
      <div>
        1
      </div>
    )
}

export default ShowWeather