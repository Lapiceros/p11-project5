import Logo from '../images/decaclon.png'
import './Logo.css'
import { Link } from 'react-router-dom';


function LogoImg(){
    return(
        <Link to="/">
                    <img className="deca_logo" src={Logo} alt="Logo Decaclon" />
        </Link>
    );
}


export default LogoImg;