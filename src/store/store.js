import { configureStore  } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';

export default configureStore({
  reducer: {
    table: weatherSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
