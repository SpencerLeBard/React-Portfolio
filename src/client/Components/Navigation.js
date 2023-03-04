import React from 'react'
import { Link } from "react-router-dom";

function Navigation() {
  return (
<div className="Navigation">
    <div className="container font-mono">
      <div className="row">
        <div className="col-3">
            Spencer's Blog and Portfolio
        </div>
        <div className="col-4 decoration-black">
        <Link style={{textDecoration: 'none'}} to="/Portfolio">Portfolio</Link>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Navigation;