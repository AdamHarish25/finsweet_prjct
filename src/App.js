import './App.css';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import Home from './Routes/Home';

function App() {
  return (
    <div id="App" className='overflow-hidden relative'>
      <Home />
      

      <Navbar/>
      <div className='w-screen h-20 invisible mt-80'/>
      <Footer/>
    </div>
  );
}

export default App;
