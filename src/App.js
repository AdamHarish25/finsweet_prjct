import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Routes/Home';

function App() {
  return (
    <div id="App" className='overflow-hidden'>
      <Home />
      
      <Navbar/>
    </div>
  );
}

export default App;