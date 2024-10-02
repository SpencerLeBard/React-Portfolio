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
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{new Date(blog.date).toDateString()}</p>
              <p>{blog.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
