import { configureStore } from "@reduxjs/toolkit";
// import postReducer from "./postsSlice"
import todoReducer from "./reduxToolkit/todoSlice"


export const store = configureStore ({
    reducer: {
        // postReducer,
        todoReducer
    }
})