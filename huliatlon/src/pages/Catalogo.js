import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LogoImg from "../components/Logo";
import Catalogo_Img from "../components/Gorras";


const Catalogo = () =>{
    return(
        <div>
            <LogoImg />
            <Navbar />
            <h1 className="catalogo-titulo">Gorras para todo tipo de personas porque aqui no se distinguen generos</h1>
            <Catalogo_Img />
            <footer>
            <Footer />
            </footer>
        </div>
    );
    
}


export default Catalogo;