import React from 'react';
import {Space} from 'antd'
export interface WeatherItem {
    id: string;
    date: string;
    temp: number;
    description:string; 
}

export interface ShowWeatherProps {
  list: WeatherItem[]
}

 const ShowWeather: React.FC<ShowWeatherProps> = ({list}) => {
    return (
      <div>
        {list.map((item)=>
        <div key={item.id} className="weather-item">
          <Space>
            <div className="date">{item.date}</div>
            <div className="temp">{item.temp}</div>
            <div className="description">{item.description}</div>
          </Space>
        </div>
        )}
      </div>
    )
}

export default ShowWeather