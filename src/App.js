import './App.css';
import Nav from "./client/components/Nav";
import Footer from "./client/components/Footer"
import Body from './client/components/Body.js'
import FirstBlog from './client/pages/FirstBlog' 
import { Routes, Route, Outlet, Link, Switch } from "react-router-dom";

function App() {
  return (
<div className="App">
    <Routes>
    <Route path="/" element={ <Body/> } />
    <Route path="FirstBlog" element={ <FirstBlog/> } />
    </Routes>
</div>
  );
}


export default App;
