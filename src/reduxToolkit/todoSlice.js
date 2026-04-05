import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push ({
                id: Date.now(),
                text: action.payload,
                done: false
            })
        },
        toggle: (state, action) => {
            const todo = state.find((t) => t.id === action.payload)
            if (todo) todo.done = !todo.done
        },
        remove: (state, action) => {
            return state.filter((t) => t.id !== action.payload)
        }
    }
})

export const { addTodo, toggle, remove } = todoSlice.actions
export default todoSlice.reducer