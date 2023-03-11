import React from 'react';
import Navigation from '../components/Navigation';

function FirstBlog() {
  return (
<div className="FirstBlog">
<Navigation />
<div className="TopHalf relative h-32 w-32 ">
  <div className="LeftSide absolute left-0 top-0 h-16 w-16bsolute left-0 top-0 h-16 w-16">
    <h1> Featured Blog Post Title</h1>
    <h4>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </h4>
    <h4> By: Spencer LeBard</h4>
    <h4> LinkedinBox|GithubBox|TwitterBox|OtherSocalBox</h4>
    </div>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-end">
    <div className="bg-white w-75 h-75 rounded-2xl">picture</div>
    </div>
  </div>  
</div>
  );
}

export default FirstBlog;