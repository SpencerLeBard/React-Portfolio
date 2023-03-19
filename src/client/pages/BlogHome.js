import React from 'react';
import { Link } from "react-router-dom";
import Navigation from '../components/Navigation';
class BlogHome extends React.Component {
render() {
  return (
    <div className="BlogHome">
<Navigation />
<main class="container">
    {/* ANCHOR Main Box */}
  <div class="p-5 rounded text-bg-dark flex flex-col space-y-5 ">
    <div class="col-12 p-2 border rounded">
      <h1 class="display-4 fst-italic">First Blog Title</h1>
      <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      {/* ANCHOR LINK TO FIRST BLOG */}
      <Link to="/FirstBlog">Continue Reading ...</Link>
  </div>

    <div class="col-12">
      <div class="row g-0 border rounded shadow-md h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">Second Blog Post Tag</strong>
          <h3 class="mb-0">Second Post</h3>
          <div class="mb-1 text-muted">March 19, 2023</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="www.google.com" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="www.google.com55595c"/><text x="50%" y="50%" fill="www.google.comeceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="www.google.com" class="stretched-link">Continue reading</a>
        </div>
      </div>
  </div>
</main>
</div>
    )
  }
}


export default BlogHome 