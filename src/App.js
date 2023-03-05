import './App.css';
import BlogHome from './client/components/BlogHome.js'
import FirstBlog from './client/pages/FirstBlog' 
import { Routes, Route} from "react-router-dom";
import Navigation from "./client/components/Navigation";
import Footer from './client/components/Footer'
import Portfolio from "./client/pages/Portfolio";

function App() {
  return (
<div className="App">
    <Navigation />
    <Routes>
    <Route path="/" element={ <BlogHome/> } />
    <Route path="FirstBlog" element={ <FirstBlog/> } />
    <Route path="Portfolio" element={ <Portfolio/> } />
    </Routes>
    <Footer />
</div>
  );
}


export default App;
