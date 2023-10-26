import Baner from "../components/Banner";
import Footer from "../components/Footer";
import LogoImg from "../components/Logo";
import Navbar from "../components/Navbar";

function Principal(){
    return(
        <div>
            <header className="App-header">
                <LogoImg />
                <Navbar />
            </header>
            <Baner/>
            <footer>
                <Footer/>
            </footer>
        </div>
    )

}

export default Principal;