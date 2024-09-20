import React from "react";
import { useParams } from "react-router-dom";
import blogData from "./BlogData";
import BlogTemplate from "./BlogTemplate";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found!</p>;
  }

  return (
    <BlogTemplate
      title={post.title}
      date={post.date}
      author={post.author}
      content={post.content}
    />
  );
};

export default BlogDetail;
