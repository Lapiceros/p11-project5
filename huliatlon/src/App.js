import './App.css';
import LogoImg from './components/Logo';
import Navbar from './components/Navbar';
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoImg />
        <Navbar />
      </header>
      <div className="baner">
      <Banner />
      </div>
      
    </div>
  );
}

export default App;
