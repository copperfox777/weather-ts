import { configureStore  } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';

export default configureStore({
  reducer: {
    weatherSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
