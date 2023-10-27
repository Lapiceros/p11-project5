import './Gorras.css'
import Test from './test.json';

let Imagenes = ({product}) => (
        <div className='product-card'>
                <img src={product.image} alt={product.name} className='product-image'/>
                <div>
                <p className='price'>{product.price} €</p>
                </div>
                <h3>{product.name}</h3>
        </div>
)

function Catalogo_Img(){
        return (
                <div className='product-container'>
                        {Test.products.map(product => (
                                <Imagenes key={product.id} product={product} />
                        ))}
                </div>
        );
}

export default Catalogo_Img;