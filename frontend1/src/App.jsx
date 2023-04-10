
import { useState, useEffect } from 'react'
import './App.css'
import Post from "./components/Post.jsx"
import Inputform from './components/Inputform/Inputform.jsx'

function App() {

  const [posts, setPosts] = useState([]) 
  

  //const posts = [] - gleich wie Zeile 6
  useEffect(() =>  {
    fetch("http://localhost:6969/api/v1/getData")
    .then(res => res.json())
    .then(data => {setPosts(data)
    console.log(data)
    })
   } ,[])
  
  return (
    <div className="App">
     <Inputform setPosts={setPosts}/>
   {posts.map((post, index) => {
return <Post key = {index} gest={post}/>
    })} 
    </div>
  )
}

export default App
