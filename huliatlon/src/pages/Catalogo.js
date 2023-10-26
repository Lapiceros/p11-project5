import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LogoImg from "../components/Logo";
import Gorras from "../components/Gorras";


const Catalogo = () =>{
    return(
        <div>
            <LogoImg />
            <Navbar />
            <h2>Catalogo</h2>
            <Gorras />
            <footer>
            <Footer />
            </footer>
        </div>
    );
    
}


export default Catalogo;