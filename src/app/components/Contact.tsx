"use client";

import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef, useState} from "react";

export default function Contact() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();

    async function sendEmail() {
        const name = (nameRef.current as HTMLInputElement).value;
        const email = (emailRef.current as HTMLInputElement).value;
        const subject = (subjectRef.current as HTMLInputElement).value;
        const message = (messageRef.current as HTMLInputElement).value;

        if (!name || !email || !subject || !message) {
            setError(true);
        }

        const emailData = {
            email, subject, message
        };

        try {
            const response = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });

            if(response.ok){
                setError(false);
                setSuccess(true);
            }
        }
        catch (e){
            setSuccess(false);
            setError(true);
        }


        console.log(emailData);

    }

    return (
        <section id="contactus" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Get in touch</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 m-15px-tb">
                        <div className="contact-form box-shadow">
                            <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
                            <form id="contact-form" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Name" id="name" placeholder="Name *" className="form-control"
                                                   type="text" ref={nameRef as string}/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Email" id="email" placeholder="Email *"
                                                   className="form-control" type="email" ref={emailRef as string}/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="Subject" id="subject" placeholder="Subject *"
                                                   className="form-control" type="text" ref={subjectRef as string}/>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" placeholder="Your message *" rows="3"
                                                      className="form-control" ref={messageRef as string}></textarea>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="m-btn m-btn-theme" onClick={sendEmail} type="button"
                                                    value="Send"> send message
                                            </button>
                                        </div>
                                        {success && <span id="suce_message" className="text-success">Message Sent Successfully</span>}
                                        {error && <span id="err_message"
                                                        className="text-danger">Message Sending Failed</span>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4 m-15px-tb">
                        {/*<div className="contact-info media box-shadow">*/}
                        {/*    <div className="icon">*/}
                        {/*        /!*<i className="ti-location-pin"></i>*!/*/}
                        {/*        <FontAwesomeIcon icon={faFlag} />*/}
                        {/*    </div>*/}
                        {/*    <div className="media-body">*/}
                        {/*        <h6 className="dark-color font-alt">Our Address</h6>*/}
                        {/*        <p>123 Stree New York City , United States Of America 750065.</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                {/*<i className="ti-mobile"></i>*/}
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <div className="media-body">
                                <h6 className="dark-color font-alt">Our Phone</h6>
                                <p>Office: +004 44444 44444<br/>
                                    Office: +004 44444 44444<br/></p>
                            </div>
                        </div>
                        <div className="contact-info media box-shadow">
                            <div className="icon">
                                {/*<i className="ti-email"></i>*/}
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <div className="media-body">
                                <h6 className="dark-color font-alt">Our Email</h6>
                                <p>info@domainname.com<br/>contact@domainname.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}