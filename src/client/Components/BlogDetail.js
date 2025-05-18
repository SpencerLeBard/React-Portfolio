import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p className="text-center mt-10 text-lg text-gray-500">Loading post…</p>;
  if (error)   return <p className="text-center mt-10 text-lg text-red-500">{error}</p>;
  if (!blog)   return <p className="text-center mt-10 text-lg text-gray-500">Post not found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-2 relative">
      <Link
        to="/Blogs"
        className="fixed top-2 left-2 sm:top-6 sm:left-6 z-50 text-black hover:text-gray-700 transition-colors"
        aria-label="Back to Blogs"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </Link>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden p-8">
        <h1 className="text-4xl font-bold text-black tracking-wide mb-4 text-center">{blog.title}</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <span className="text-gray-500 text-sm">{blog.date && (new Date(blog.date).toLocaleDateString())}</span>
          {blog.author && <span className="text-gray-400 text-sm">&middot; {blog.author}</span>}
        </div>
        <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          {blog.content}
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
