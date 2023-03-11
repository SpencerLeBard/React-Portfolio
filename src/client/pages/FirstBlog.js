import React from 'react';
import Navigation from '../components/Navigation';

function FirstBlog() {
  return (
<div className="FirstBlog">
<Navigation />
<div className="TopHalf row relative">
  <div className="LeftSide absolute left-0 top-0 col-3">
    <h1> Featured Blog Post Title</h1>
    <h6>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </h6>
    <h4> By: Spencer LeBard</h4>
    <h4> LinkedinBox|GithubBox|TwitterBox|OtherSocalBox</h4>
    </div>
    <div className="absolute bg-black w-64 h-64 rounded-2 text-white right-0 top-0 col-3"> picture </div>
  </div>  
  <div className="BottomHalf absolute bottom-10 outline-5 outline-red outline-double row">
  <h6>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </h6> </div>
</div>
  );
}

export default FirstBlog;