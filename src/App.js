import { Route, Routes} from 'react-router-dom';
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




function App() {

  return (
    <div id="App" className="overflow-hidden relative">
      <ScrollToTop history={Histories}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>

      <Navbar />
      <div className="w-screen h-20 invisible mt-80" />
      <Footbar />
    </div>
  );
}

export default App;
