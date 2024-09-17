import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navbar bg-primary text-primary-content">
      <a className="btn btn-ghost normal-case text-xl">
        <Link
          className="col-4"
          style={{ textDecoration: "none" }}
          to="/BlogHome"
        >
          Blog Home
        </Link>
        <Link className="col-8" style={{ textDecoration: "none" }} to="/">
          Home
        </Link>
        Spencer LeBard's Blog and Portfolio
      </a>
    </div>
  );
}

export default Navigation;
