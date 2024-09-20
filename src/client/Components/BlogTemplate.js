import React from "react";

const BlogTemplate = ({ title, date, author, content }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-4">
        {date} by <span className="font-semibold">{author}</span>
      </p>
      <div className="text-gray-700 leading-relaxed">{content}</div>
    </div>
  );
};

export default BlogTemplate;
