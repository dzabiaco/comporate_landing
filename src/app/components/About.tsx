import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function About(){

    return (
        <section id="about" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">ABOUT ME</h3>
                            {/* <p className="text-uppercase small">A Lead UX & UI designer based in Canada</p> */}
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 m-15px-tb">
                        <div className="about-me-img box-shadow">
                            <Image src="/static/images/main_1.jpg" width="450" height="450"  title="" alt="Me"/>
                                {/*<div className="nav social-icon">*/}
                                {/*    <Link href="#"><FontAwesomeIcon icon={faFacebookF} /></Link>*/}
                                {/*    <Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link>*/}
                                {/*    <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>*/}
                                {/*    <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>*/}
                                {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-lg-7 m-15px-tb">
                        <div className="about-me">
                            <h4>I'M Madlen Lifari</h4>
                            {/* <h6>A Lead <span className="theme-color">UX & UI</span> designer based in <span
                                className="theme-color">Canada</span></h6> */}
                            <p>Bună! Sunt Madlen, am 25 de ani și o dorință arzătoare de a schimba această lume spre bine!</p>
                            <p>Hippocrates spunea că: <b>“Înainte de a vindeca pe cineva, întreabă-l dacă e gata să renunțe la ceea ce l-a îmbolnăvit”</b>.</p>
                            <p>În lucrul nostru este important să creăm o atmosferă de încredere, unde vă puteți simți confortabil să discutați deschis orice subiect. Vom lucra împreună asupra obiectivelor dvs, explorând diferite strategii și găsind soluții individuale.</p>
                            <p>Psihologia este un instrument puternic pentru creșterea și dezvoltarea personală. Sunt gata să vă ajut pe acest drum, unde împreună putem construi o viață pe care o doriți.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>Chisinau</p>
                                    </div>
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p><Link href="mailto:Lifarimadlenpsiholog@gmail.com">Lifarimadlenpsiholog@gmail.com</Link></p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p><Link href="tel:+37360340323">+37360340323</Link></p>
                                    </div>
                                    <div className="media">
                                        <label>Viber</label>
                                        <p>+37360340323</p>
                                    </div>
                                    <div className="media">
                                        <label>Telegram</label>
                                        <p><Link href="https://t.me/MadlenCherry">Contact me</Link></p>
                                    </div>
                                    <div className="media">
                                        <label>Whatsapp</label>
                                        <p><Link href="https://api.whatsapp.com/send?phone=37360340323">Contact Me</Link></p>
                                    </div>
                                </div>
                                {/*<div className="col-md-6">*/}
                                {/*    <div className="media">*/}
                                {/*        <label>Skype</label>*/}
                                {/*        <p>skype.0404</p>*/}
                                {/*    </div>*/}
                                {/*    <div className="media">*/}
                                {/*        <label>Freelance</label>*/}
                                {/*        <p>Available</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className="btn-bar">
                                <a className="m-btn m-btn-theme" href="#work">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}