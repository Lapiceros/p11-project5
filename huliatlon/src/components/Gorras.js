import Test from './test.json';

let Imagenes = Test.products.map(data => data.image)

function Gorras(){
        return (
                <img src={Imagenes} alt="imagen de producto" />
        );
    }


export default Gorras;