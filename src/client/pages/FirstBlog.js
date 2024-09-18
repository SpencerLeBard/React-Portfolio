import React from "react";

const FirstBlog = () => {
  const posts = [
    {
      title: "First Blog Post",
      date: "January 1, 2024",
      content: "This is the first blog post content...",
    },
    {
      title: "Second Blog Post",
      date: "February 15, 2024",
      content: "This is the second blog post content...",
    },
    // Add more posts
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.date}</p>
              <p className="mt-2 text-gray-600">{post.content}</p>
              <a
                href="#"
                className="inline-block mt-4 text-blue-500 hover:text-blue-700"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBlog;
