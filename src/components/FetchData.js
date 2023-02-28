import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function FetchData() {
     const [posts,setPosts] = useState([])
  
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => { 
         console.log(res.data)
            setPosts (res.data)


        } )
         .catch((err) => {
            console.log(err)

         })   
        //  exception
    },[])

  return (
    <div>
         { <ul>
      {
        
        posts.map(post => <li key ={post.id}> {post.title}</li>)
      
      }
      </ul> }
      
    </div>
  )
}
