import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the backend API
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        setBlogs(response.data); // Update state with the fetched blog data
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error); // Handle any errors
      });
  }, []); // Empty array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center mt-6">
      <ul className="w-full max-w-4xl">
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-6">
            <Link
              to={`/blogs/${blog.id}`}
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform no-underline text-black"
            >
              <h2 className="text-2xl font-semibold mb-3 font-sans">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(blog.date).toDateString()}
              </p>
              <p className="text-base text-gray-600 font-medium">
                {blog.author}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
