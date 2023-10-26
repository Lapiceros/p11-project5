import './Navbar.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar (){
    return(<div>
        <div className="navbar">
            <a href="/">Deportes</a>
            <a href="/">Mujer</a>
            <Link to="/pages/catalogo">Hombre</Link>
            <a href="/">Infantil</a>
            <a href="/">Equipamiento</a>
            <a href="/">Nutrición y salud</a>
            <a href="/">Descuentos</a>
        </div>
        </div>
    );
}

export default Navbar;