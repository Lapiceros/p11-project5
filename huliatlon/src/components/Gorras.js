import './Gorras.css'
import Test from './test.json';

let Imagenes = ({product}) => (
        <div className='card'>
                <img src={product.image} alt={product.name} className='product-image'/>
                <p className='price'>{product.price} €</p>
                <h3>{product.name}</h3>
        </div>
)

function Catalogo_Img(){
        return (
                <div className='container'>
                        {Test.products.map(product => (
                                <Imagenes id={product.id} product={product} />
                        ))}
                </div>
        );
}

export default Catalogo_Img;