import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    axios.get(`/api/server/blogs/${id}`)
      .then(res => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error fetching blog ${id}:`, err);
        setError('Failed to load blog post.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading post…</p>;
  if (error)   return <p>{error}</p>;
  if (!blog)   return <p>Post not found.</p>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>
        <em>{blog.date}</em> by <strong>{blog.author}</strong>
      </p>
      <article>
        {blog.content}
      </article>
    </div>
  );
};

export default BlogDetail;
