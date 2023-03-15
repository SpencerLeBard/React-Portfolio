import './App.css';
import BlogHome from './client/pages/BlogHome.js'
import FirstBlog from './client/pages/FirstBlog' 
import { Routes, Route} from "react-router-dom";
import Portfolio from "./client/pages/Portfolio";
import Home from "./client/pages/Home";
import ContactMe from './client/pages/ContactMe';

function App() {
  return (
<div className="App">
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="BlogHome" element={ <BlogHome/> } />
    <Route path="FirstBlog" element={ <FirstBlog/> } />
    <Route path="Portfolio" element={ <Portfolio/> } />
    <Route path="ContactMe" element={ <ContactMe/> } />
    </Routes>
</div>
  );
}


export default App;
