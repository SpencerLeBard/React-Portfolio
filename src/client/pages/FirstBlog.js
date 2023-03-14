import React from 'react';
import Navigation from '../components/Navigation';

function FirstBlog() {
  return (
<div> 
<Navigation />
<div className="TopHalf relative row">
  <div className="LeftSide absolute left-10 top-10 col-3">
    <h1> Featured Blog Post Title</h1>
    <h6>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </h6>
    <h4> By: Spencer LeBard</h4>
    <h4> LinkedinBox|GithubBox|TwitterBox|OtherSocalBox</h4>
    </div>
    <div className="RightSide absolute bg-black w-64 h-64 rounded-2 text-white right-10 top-10 col-3"> picture </div>
  </div>  
  <div className="BottomHalf row absolute bottom-10 justify-center">
  <div className="row outline"> row</div>
  <h3 className="col-4">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. </h3> 
  </div>
</div>
  );
}

export default FirstBlog;