import React /*, { useEffect, useState }*/ from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import blogData from "./BlogData"; // NEW: hardcoded blog data

function BlogDetail() {
  const { id } = useParams(); // Extract the blog ID from the URL

  // const [blog, setBlog] = useState(null); // Initialize state to hold the blog data

  // useEffect(() => {
  //   // Fetch the blog details from the backend
  //   axios
  //     .get(`http://localhost:5000/api/blogs/${id}`)
  //     .then((response) => {
  //       setBlog(response.data); // Update the state with the fetched blog data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching blog details:", error);
  //     });
  // }, [id]); // Re-run this effect whenever the blog ID changes

  const blog = blogData.find((b) => b.id === parseInt(id)); // NEW: lookup from static data

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    ); // Can show "Not Found" message instead if preferred
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">{blog.title}</h1>
      <div className="flex items-center text-gray-500 text-sm mb-8">
        <span className="mr-4 flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* Calendar icon */}
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 012 0v1h4V2a1 1 0 112 0v1h1a2 2 0 012 2v2H3V5a2 2 0 012-2h1V2zM3 9h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              clipRule="evenodd"
            />
          </svg>
          {new Date(blog.date).toLocaleDateString()}
        </span>
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-1 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {/* User icon */}
            <path d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z" />
          </svg>
          {blog.author}
        </span>
      </div>
      <div className="prose prose-lg text-gray-700">{blog.content}</div>
    </div>
  );
}

export default BlogDetail;
