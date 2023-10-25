import Banner from '../images/banner.jpg'
import './Banner.css'
import product1 from '../images/producto1.png'
import product2 from '../images/producto2.png'
import product3 from '../images/producto3.png'
import product4 from '../images/producto4.png'


function Baner() {
    return(
        <div className="body">

            <div className="banner">
            <img src={Banner} alt="banner" />
            </div>

            <h1>Top ventas del momento</h1>
            
            <div className="products">
                <img src={product1} alt="products"/>
                <img src={product2} alt="products"/>
                <img src={product3} alt="products"/>
                <img src={product4} alt="products"/>
            </div>

        </div>
    );
}

export default Baner;