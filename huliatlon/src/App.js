import './App.css';
import LogoImg from './components/Logo';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoImg />
        <Navbar />
      </header>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
