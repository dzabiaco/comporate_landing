import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 m-10px-tb">
                        <div className="nav justify-content-center justify-content-md-start">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="col-md-6 m-10px-tb text-center text-md-right">
                        <p>© {new Date().getFullYear()} copyright all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}