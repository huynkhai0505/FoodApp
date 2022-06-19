import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./screen/home/HomeSlice";

export default store = configureStore({
    reducer: {
        home: homeReducer
    }
})

//Buoc 1: tao ra store.js de khai bao reducer can su dung
//Buoc 2: tao ra file Slice ( noi khai bao action va reducer)