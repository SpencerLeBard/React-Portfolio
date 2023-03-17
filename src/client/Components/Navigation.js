import React from 'react'
import { Link } from "react-router-dom";


function Navigation() {
  return (
<div className="Navigation  h-7 bg-marble">
    <div className="container font-mono ">
      <div className="row">
        <div className="col-3">
            Spencer's Blog and Portfolio
        </div>
        <div className="col-4 decoration-black">
        <Link style={{textDecoration: 'none'}} to="/BlogHome"> Blog Home </Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navigation;