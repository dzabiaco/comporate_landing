import Image from "next/image";
import {useTranslations} from "next-intl";


export default function HomeSection(){
    return (
        <section id="home" className="home-banner-01">
            <div className="container">
                <div className="row full-screen align-items-center p-100px-tb">
                    <div className="col-md-6">
                        <div className="ht-text">
                            <h6>Hello there...</h6>
                            <h1>Madlen Lifari</h1>
                            {/* <h2>I Am Passionate <span id="type-it"></span></h2> */}
                            <h2>I Am Passionate <span id="type-it">Psiholog</span></h2>
                            <p>Bună! Sunt Madlen, am 25 de ani și o dorință arzătoare de a schimba această lume spre bine!</p>
                            <div className="btn-bar go-to">
                                <a className="m-btn m-btn-theme" href="#work">my work</a>
                                <a className="m-btn m-btn-t-theme" href="#contactus">Hire Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image src="/static/images/main.jpg" width="400" height="400"  title="" alt="Me"/>
                    </div>
                </div>
            </div>
            <div className="go-to go-to-next">
                <a href="#about">
                    <span></span>
                </a>
            </div>
        </section>
    );
}