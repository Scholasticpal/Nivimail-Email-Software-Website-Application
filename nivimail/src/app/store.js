import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice';
import mailReducer from '../features/mailSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
