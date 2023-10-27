import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Catalogo_Img from "../components/Gorras";


const Catalogo = () =>{
    return(
        <div className="catalogo">
            <header>
            <Navbar />
            </header>
            <section >
            <Catalogo_Img />
            </section>
            <footer>
            <Footer />
            </footer>
        </div>
    );
    
}


export default Catalogo;