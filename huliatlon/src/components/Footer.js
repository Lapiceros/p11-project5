import './Footer.css'
import Fb from '../icons/carelibro.png'
import Android from '../icons/android.svg'
import Apple from '../icons/apple.svg'
import Pinterest from '../icons/pinterest.png'
import Twitter from '../icons/twitter.png'
import Yt from '../icons/youtube.png'


function Footer(){
    return(
        <section className="footer">
            <div className="list">
                <h3>DECATHLON EMPRESA</h3>
                
                <a href="/">Quienes somos</a>
                <a href="/">Canal etico</a>
                <a href="/">Trabaja con nosotros</a>
                <a href="/">Sala de Empresa</a>
                <a href="/">Decathlon Marketplace</a>
                <a href="/">Vende en Decathlon.es</a>
                <a href="/">Sostenibilidad</a>
                <a href="/">Innovacion</a>
                
            </div>
            <div className="list">
                <h3>COMPRA</h3>
                <a href="/">Metodo de entrga/Gasto de envio</a>
                <a href="/">Métodos de pago</a>
                <a href="/">Preguntas frecuentes</a>
                <a href="/">Envio Canarias/Ceuta/Melilla/Andorra</a>
                <a href="/">Single Day</a>
                <a href="/">Regalos para deportistas</a>
                <a href="/">Rebajas</a>
                <a href="/">Botas de futbol</a>
                
            </div>
            <div className="list">
                <h3>POST COMPRA</h3>
                
                <a href="/">Cambios y devoluciones</a>
                <a href="/">Factura formato electronico</a>
                <a href="/">Tu opinion cuenta</a>
                <a href="/">Comunicados de seguridad</a>
                <a href="/">Tax free</a>
                <a href="/">Clasificacion de nuestros productos</a>
                <a href="/">Servicio de montaje</a>

            </div>
            <div className="list">
                <h3>SERVICIOS</h3>
                
                    <a href ="/">Alquiler</a>
                    <a href ="/">Soporte tecnico</a>
                    <a href ="/">Tarjeta de regalo</a>
                    <a href ="/">Clubes, colegios y empresas</a>
                    <a href ="/">Personalizacion</a>
                    <a href ="/">Financiacion</a>
                    <a href ="/">Extension de garantia</a>
                    <a href ="/">Equipaciones clubes</a>
                    <a href ="/">Postventa</a>

            </div>
            <div className="list">
                <h3>VENTAJAS</h3>
                
                <a href="/">Decathlon Live</a>
                <a href="/">Ventajas y servicios</a>
                <a href="/">Decathlon segunda vista</a>
                <a href="/">Revender mis productos</a>
                
            </div>
            <div>
                <h3>PREGÚNTANOS LO QUE QUIERAS</h3>
                
                <p>Lo sentimos, en estos momentos el <br /> servicio no está disponible o estamos fuera del horario de atención al cliente (lunes a sábado de 10:00h-22:00h).</p>
            </div>
            <div>
                <h3>App Decathlon</h3>
            </div>
            <div>
                <h3>REDES SOCIALES</h3>

                <img src={Fb} alt="facebook_icon" />
                <img src={Android} alt="facebook_icon" />
                <img src={Yt} alt="facebook_icon" />
                <img src={Apple} alt="facebook_icon" />
                <img src={Twitter} alt="facebook_icon" />
                <img src={Pinterest} alt="facebook_icon" />
            </div>
            <div>
                <h3>PARTNER</h3>
            </div>
        </section>
    );
}

export default Footer;