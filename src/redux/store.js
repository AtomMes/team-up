import { configureStore } from '@reduxjs/toolkit';
import levelOne from './questionsSlice';

export const store = configureStore({
  reducer: {
    levelOne,
  },
});
