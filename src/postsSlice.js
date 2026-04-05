import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";


export const fetchPosts = createAsyncThunk(
    "post/fetch",
    async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        return res.json()
    }
)



// pending - загрузка, запрос ещё идёт, он не закончился
// fullfilled - запрос закончился успешно, ты получил данные 
// rejected - запрос закончился не успешно, есть ошибка, мы не получаем данные


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.loading = false
                state.error = action.error
            })
    }
})


export default postsSlice.reducer