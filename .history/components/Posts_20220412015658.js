import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "sehaj._b18",
    userImg: "https://links.papareact.com/3ke",
    img: "https://images.unsplash.com/photo-1647174447035-3039fffa92b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    caption: "Hey jasmine how is this looking?",
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
