import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const posts = [

  {
    id: "123",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    caption: "Hey jasmine how is this looking?",
  },
  {
    id: "124",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1649119947511-e56da6f1fa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    caption: "Hey jasmine how is this looking?",
  },
  {
    id: "125",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1629754017443-9630d3030377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    caption: "Hey How are you..?",
  },
  {
    id: "126",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80",
    caption: "Hey  How are you..?",
  },
  {
    id: "127",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    caption: "Music is love..?",
  },
];

function Posts() {
  const [posts ,  setPosts] = useState([]);
     useEffect(() => {
      onSnapshot(query(collection(db, 'posts' ), orderBy('timestamp' , 'desc' )), snapshot => {
        setPosts(snapshot.docs);
      })

       
      

     }, [db])

     console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;