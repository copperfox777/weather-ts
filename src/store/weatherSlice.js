import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  status: "idle", 
  error: null,
  history:[],
}

const fetchWeatherThunk = createAsyncThunk('weatherSlice/fetchWeather', async (city,{ rejectWithValue }) => {
  try {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=ce1fe59a97e1d3ca691fd2a7a7a2db8a&q=${city}&units=metric&lang=ru`)
  if (response.ok) {
      const data = await response.json()
      const processedData = data.list.reduce((acc, item) =>{
        return acc.concat({id:nanoid(),temp:item.main.temp,description:item.weather[0].description,date:item.dt_txt})
    },[])
    
    return {data:processedData,city}
    
  }  
  } catch(e) {
    return rejectWithValue({error:e.message,city})
  }
});


export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  
  extraReducers: {
  
    [fetchWeatherThunk.pending]: (state, action) => {
      state.status = 'pending'
    },
    [fetchWeatherThunk.fulfilled]: (state, action) => {
      state.status = "idle"
      state.data = action.payload.data
      state.history.unshift({history:action.payload.city,id:nanoid()})
    },
    [fetchWeatherThunk.rejected]: (state, action) => {
      state.data=[]
      state.status = 'failed'
      state.history.unshift({history:action.payload.city,id:nanoid()})
      state.error = action.payload.error
    },

  },
});

export const getWeather = (state) => state.weatherSlice.data
export const getHistory = (state) => state.weatherSlice.history
export const getStatus = (state) => state.weatherSlice.status
export const fetchWeather = (args) => fetchWeatherThunk(args)
export default weatherSlice.reducer;
