import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './components/weather/weatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});
