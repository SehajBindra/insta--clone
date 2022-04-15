import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1649119947511-e56da6f1fa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    caption: "Hey jasmine how is this looking?",
  },
  {
    id: "123",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://images.unsplash.com/photo-1629754017443-9630d3030377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    caption: "Hey jasmine How are you..?",
  },
  {
    id: "123",
    username: "sehaj._b18",
    userImg: "https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    img: "https://unsplash.com/photos/Qb7D1xw28Co",
    caption: "Hey jasmine How are you..?",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
