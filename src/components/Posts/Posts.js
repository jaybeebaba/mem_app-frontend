import Post from "./Post/Post";
import { useSelector } from "react-redux"

function Posts() {

  const posts = useSelector((state)=>{
    return state.posts
  })

  console.log(posts)
    return (
      <div>
       <h1>POSTS</h1>
       <Post />
       <Post />
       <Post />
      </div>
    );
  }
  
  export default Posts;