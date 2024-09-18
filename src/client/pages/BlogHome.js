import React from "react";

const BlogHome = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Welcome to My Blog
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Explore the latest posts and articles about tech, design, and more!
      </p>
      <div className="text-center">
        <a
          href="/blog"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Blog
        </a>
      </div>
    </div>
  );
};

export default BlogHome;
