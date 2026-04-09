import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reduxToolkit/todoSlice"


export const store = configureStore ({
    reducer: {
        todoReducer
    }
})