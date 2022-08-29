import { configureStore } from '@reduxjs/toolkit';
import photoSlice from './photoSlice';

const rootReducer = {
    photos: photoSlice.reducer
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;