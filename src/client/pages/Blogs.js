import React from "react";
import BlogList from "../components/BlogList";
import Header from "../components/Header";

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <Header /> */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to Spencer's Blog
      </h1>
      <BlogList />
    </div>
  );
};

export default Blogs;
