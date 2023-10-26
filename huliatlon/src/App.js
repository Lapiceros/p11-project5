import './App.css';
import LogoImg from './components/Logo';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Principal from './pages/Principal';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index Component={Principal} />
        <Route path='/pages/Catalogo' Component={Catalogo} />
      </Routes>
    </div>
  );
}

export default App;
