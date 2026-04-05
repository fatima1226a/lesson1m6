import { create } from "zustand";


export const usePostsStore = create((set) => ({
    data: [],
    loading: false,
    error: null,

    fetchPosts: async () => {
        set({loading: true, error: null})
        
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            set({data: data, loading: false})
        } catch {
            set({loading: false, error: "Error"})
        }
    }
}) )

