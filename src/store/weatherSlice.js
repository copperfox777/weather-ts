import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { client } from '../api/client'

const initialState = {
  data: [],
  status: "idle", 
  error: null,
  history:[],
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
  let data = await client('https://api.openweathermap.org/data/2.5/forecast?appid=ce1fe59a97e1d3ca691fd2a7a7a2db8a&q=Moscow&units=metric&lang=ru')
  console.log(data)
  return data;
});


export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  
  extraReducers: {
  
    [fetchWeather.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.status = "idle"
      console.log(action.payload)
      state.data = action.payload
    },
    [fetchWeather.rejected]: (state, action) => {
      state.data=[]
      state.status = 'failed'
      state.error = action.error.message
    },

  },
});

export const getWeataher = (state) => state.weather.data
export const getHistory = (state) => state.weather.history

export default weatherSlice.reducer;
