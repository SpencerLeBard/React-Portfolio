import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../components/BlogData";

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogData.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 text-base mb-4">{post.description}</p>
            <Link
              to={`/Blogs/${post.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
