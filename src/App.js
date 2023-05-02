import { Route, Routes, useNavigate} from 'react-router-dom';
import './App.css';
import Footbar from './Components/Footbar';
import { Navbar } from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Features from "./Routes/Features";
import Work from "./Routes/Work";
import Pricing from "./Routes/Pricing";
import Contact from "./Routes/Contact";
import ScrollToTop from './Components/ScrollToTop';
import Histories from './Components/History';
import WorkCase from './Routes/WorkCase';
import { DataStorage } from './Datas/DataStorage';
import Blog from './Routes/Blog';
import BlogCase from './Routes/BlogCase';




function App() {

  var navigate = useNavigate();

  navigate(0);

  const WorkData = DataStorage.workCase;

  const BlogData = DataStorage.blogCase;
  
  return (
    <div id="App" className="overflow-hidden relative">
      <ScrollToTop history={Histories}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />}/>
          {WorkData.map((data, index) => (
            <Route key={index} path={`/Work/page${index+1}`} element={<WorkCase data={data.case}/>}/>
          ))}
          
          {BlogData.map((data, index) => (
            <Route key={index} path={`/Blog/page${index+1}`} element={<BlogCase data={data.case}/>}/>
          ))}
        </Routes>
      </ScrollToTop>

      <Navbar />
      <div className="w-screen h-20 invisible mt-80" />
      <Footbar />
    </div>
  );
}

export default App;
