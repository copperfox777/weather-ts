import React from "react";
import { Select } from "antd";
import {useDispatch,useSelector} from 'react-redux'
import {fetchWeather, getStatus } from '../store/weatherSlice'

const { Option } = Select;

export default function CitySelector() {
  const dispatch = useDispatch()
  const status = useSelector(getStatus)
  return (
    <Select
      disabled={status === 'pending' ? true : false }
      className="select"
      showSearch
      style={{ width: 200 }}
      placeholder="Select city"
      optionFilterProp="children"
      onChange={(value) => dispatch(fetchWeather(value))}
      filterOption={(input, option) =>
        option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="moscow">Moscow</Option>
      <Option value="yekaterinburg">Yekaterinburg</Option>
      <Option value="novosibirsk">Novosibirsk</Option>
      <Option value="kazan">Kazan</Option>
    </Select>
  );
}
