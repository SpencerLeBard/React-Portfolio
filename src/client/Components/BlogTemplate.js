import React from "react";

const BlogTemplate = ({ title, date, author, content }) => {
  return (
    <div className="blog-post">
      <h1>{title}</h1>
      <p>
        <strong>Date:</strong> {new Date(date).toDateString()}
      </p>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <div>{content}</div>
    </div>
  );
};

export default BlogTemplate;
