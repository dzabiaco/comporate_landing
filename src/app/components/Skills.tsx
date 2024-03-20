"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCompactDisc, faFlag, faMugHot, faTrophy} from '@fortawesome/free-solid-svg-icons';
import {useEffect} from "react";

export default function Skills(){

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll<HTMLElement>(".skill-bar .skill-bar-in") // QuerySelectorAll<Element>
                .forEach((element: HTMLElement) => { // Explicitly set type to HTMLElement
                    const bottomObject = element.offsetTop + element.offsetHeight;
                    const bottomWindow = window.scrollY + window.innerHeight;
                    const progressWidth = `${element.getAttribute('aria-valuenow')}%`;
                });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <section className="section">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Skills</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-6 m-15px-tb">

                        <div className="skill-lt">
                            <h6 className="dark-color">HTML5</h6>
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow={92}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>92%</span>
                                </div>
                            </div>
                        </div>

                        <div className="skill-lt">
                            <h6 className="dark-color">WordPress</h6>
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow={72}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>

                        <div className="skill-lt">
                            <h6 className="dark-color">Magento</h6>
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow={86}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>86%</span>
                                </div>
                            </div>
                        </div>

                        <div className="skill-lt">
                            <h6 className="dark-color">UI/UX</h6>
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow={88}
                                     aria-valuemin={0} aria-valuemax={100}>
                                    <span>88%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 m-15px-tb">
                        <div className="row">
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        {/*<i className="fas fa-compact-disc"></i>*/}
                                        <FontAwesomeIcon icon={faCompactDisc} />
                                    </div>
                                    <div className="media-body">
                                        <h5>80 Albumes Listened</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        {/*<i className="fas fa-trophy"></i>*/}
                                        <FontAwesomeIcon icon={faTrophy} />
                                    </div>
                                    <div className="media-body">
                                        <h5>15 Awards Won</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        {/*<i className="fas fa-mug-hot"></i>*/}
                                        <FontAwesomeIcon icon={faMugHot} />
                                    </div>
                                    <div className="media-body">
                                        <h5>1 000 Cups of coffee</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-2 media align-items-center">
                                    <div className="icon">
                                        {/*<i className="fas fa-flag"></i>*/}
                                        <FontAwesomeIcon icon={faFlag} />
                                    </div>
                                    <div className="media-body">
                                        <h5>10 Countries Visited</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}