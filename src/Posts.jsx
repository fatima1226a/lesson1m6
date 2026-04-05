import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { fetchPosts } from "./postsSlice"
import { usePostsStore } from "./usePostsStore"



export const Posts = () => {

    // const {data, loading, error} = useSelector((state) => state.postReducer)
    // // const data = useSelector((state) => state.postReducer.data)
    // const dispatch = useDispatch()

    // useEffect ( () => {
    //     dispatch(fetchPosts())
    // }, [])


    

    const {data, loading, error, fetchPosts} = usePostsStore()

    useEffect (() => {
        fetchPosts()
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
  
    return (
    <>
        <h2>Posts</h2>
        {data.map((item) => (
            <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        ))}
    </>
  )
}
