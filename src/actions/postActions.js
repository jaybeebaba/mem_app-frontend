import axios from "axios"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await axios.get("http://localhost:5000/posts")
        dispatch({ type: "FETCH_ALL", posts: data })

    } catch (error) {
        console.log(error)
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:5000/posts", post)
        dispatch({ type: "CREATE", post: data })

    } catch (error) {
        console.log(error)
    }
}