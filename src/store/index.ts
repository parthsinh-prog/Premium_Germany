import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // Add more slices here as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 