import { configureStore } from '@reduxjs/toolkit';
import levelOne from './questionsSlice';

export const store = configureStore({
  reducer: {
    levelOne,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch