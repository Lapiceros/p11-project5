import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar (){
    return(<div>
        <div className="navbar">
            <Link to="/pages/catalogo">Deportes</Link>
            <a href="/">Mujer</a>
            <a href="/">Hombre</a>
            <a href="/">Infantil</a>
            <a href="/">Equipamiento</a>
            <a href="/">Nutrición y salud</a>
            <a href="/">Descuentos</a>
        </div>
        </div>
    );
}

export default Navbar;

