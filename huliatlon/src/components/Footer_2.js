import Fb from '../icons/carelibro.png'
import Android from '../icons/android.svg'
import Apple from '../icons/apple.svg'
import Pinterest from '../icons/pinterest.png'
import Twitter from '../icons/twitter.png'
import Yt from '../icons/youtube.png'
import Instagram from '../icons/instagram.png'
import Vector from '../icons/vector.png'

function Footer_2(){
    return(
        <section className="listIcons" >
                <div>
                    <h3>PREGÚNTANOS LO QUE QUIERAS</h3>
                    <img className="iconVector" src={Vector} alt="message" />
                    <p>Lo sentimos, en estos momentos el <br /> servicio no está disponible o estamos fuera del <br/>horario de atención al cliente (lunes a sábado de 10:00h-22:00h).</p>
                </div>
                <div>
                    <h3>App Decathlon</h3>
                    <img className="logo" src={Apple} alt="Apple_icon" />
                    <a href="/">Apple Store</a>
                    <img className="logo" src={Android} alt="Android_icon" />
                    <a href="/">Google Play</a>
                </div>
                <div>
                    <h3>REDES SOCIALES</h3>
                    <img className="icon" src={Fb} alt="facebook_icon" />
                    <img className="icon" src={Yt} alt="Youtube_icon" />
                    <img className="icon" src={Instagram} alt="Instagram_icon" />
                    <img className="icon" src={Twitter} alt="Twitter_icon" />
                    <br/>
                    <img className="icon" src={Pinterest} alt="Pinterest_icon" />
                </div>
                <div>
                    <h3>PARTNER</h3>
                    <img className="lemonwayLogo" src="https://contents.mediadecathlon.com/s1019405/k$93953a9329f10f1ce3c741c143839a73/lemonway.svg" alt="lemonway" />
                </div>
        </section>
    
    );

    
}


export default Footer_2;