import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
  return (
<div className="Navigation">
    <div className="container">
      <div className="row">
        <div className="col-3">
            Spencer's Blog and Portfolio
        </div>
        <div className="col-4 ">
        <Link to="/Portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navigation;