import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BlogDetail() {
  const { id } = useParams(); // Extract the blog ID from the URL
  const [blog, setBlog] = useState(null); // Initialize state to hold the blog data

  useEffect(() => {
    // Fetch the blog details from the backend
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data); // Update the state with the fetched blog data
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });
  }, [id]); // Re-run this effect whenever the blog ID changes

  if (!blog) {
    return <p>Loading...</p>; // Show loading state if data is not yet available
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>
        <strong>Date:</strong> {new Date(blog.date).toDateString()}
      </p>
      <p>
        <strong>Author:</strong> {blog.author}
      </p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
