import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/server/blogs')
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blog posts…</p>;
  if (error)   return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      {blogs.map(blog => (
        <Link
          key={blog.id}
          to={`/blogs/${blog.id}`}
          className="w-full max-w-2xl mb-6 no-underline"
        >
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform flex flex-col justify-between h-full cursor-pointer">
            <div className="p-6 flex-grow">
              <h3 className="text-4xl font-bold text-black tracking-wide">{blog.title}</h3>
              {blog.snippet && <p className="mt-2 text-gray-600">{blog.snippet}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogList;
