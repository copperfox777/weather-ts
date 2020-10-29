import React from 'react';
export interface HistoryItem {
    id: string;
    history: string;
}

export interface ShowHistoryProps {
  list: HistoryItem[]
}

 const ShowHistory: React.FC<ShowHistoryProps> = ({list}) => {
    return (
      <div>
        {list.map((item)=>
        <div key={item.id} className="weather-item">
          {item.history}
        </div>
        )}
      </div>
    )
}

export default ShowHistory