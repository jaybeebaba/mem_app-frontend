import { useState } from "react"
import { useDispatch } from "react-redux"
import FileBase from "react-file-base64"
import { createPost } from "../../actions/postActions"

function Form() {
  const dispatch = useDispatch()
  const [postData, setPostData] = useState({
    title: "",
    creator: "",
    message: "",
    tags: "",
    selectedFile: ''
  })

  const handleChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    dispatch(createPost(postData))
    e.target.clear()
  }

  return (
    <div>
      <h1>Create Memory</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} placeholder="Title" />
        <input type="text" name="creator" onChange={handleChange} placeholder="Creator" />
        <input type="text" name="message" onChange={handleChange} placeholder="Message" />
        <input type="text" name="tags" onChange={handleChange} placeholder="Tags" />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {

              setPostData({ ...postData, selectedFile: base64 })
            }}
          />
        </div>

        <input type="submit" />
        {/* <button>Clear</button> */}
      </form>
    </div>
  );
}

export default Form;