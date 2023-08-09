import React from "react";
import { PostProps } from "../types/types";
import PostCard from "./PropsCard";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (res.ok) {
    return res.json();
  }
  throw new Error("Error fetching posts");
}

const PostList = async () => {
  const data: PostProps[] = await getPosts();
  return (
    <div>
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
