import { create } from "zustand"


export const useTodoStore = create((set) => ({
    todos: [],

    addTodo: (text) => 
        set((state) => ({
            todos: [...state.todos, { text: text, done: false, id: Date.now() }]
        })),
    toggle: (id) => 
        set((state) => ({
            todos: state.todos.map((t) => 
                t.id === id ? {...t, done: !t.done} : t
            )
        })),
    remove: (id) => 
        set((state) => ({
            todos: state.todos.filter((t) => t.id !== id)
        }))
}))