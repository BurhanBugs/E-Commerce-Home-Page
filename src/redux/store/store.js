
import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slices/sliderSlice';
import dataReducer from './slices/dataSlice'

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        data: dataReducer,
    },
});
