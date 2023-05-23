import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./features/weatherSlice";
import stadiumReducer from "./features/stadiumSlice"

const store = configureStore({
    reducer: {
        weather: weatherReducer,
        stadium: stadiumReducer
    }
})

export default store;