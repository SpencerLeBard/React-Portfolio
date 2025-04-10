import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./client/pages/Blogs";
import Home from "./client/pages/Home";
import Portfolio from "./client/pages/Portfolio";
import ContactMe from "./client/pages/ContactMe";
import BlogDetail from "./client/Components/BlogDetail";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/Blogs/:id" element={<BlogDetail />} />
    </Routes>
    // </Router>
  );
}

export default App;
