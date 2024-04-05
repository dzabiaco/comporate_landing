"use client"

import Alert from "@/app/components/Alert";
import React, { FormEvent, useState } from "react";
import { useRef } from "react";

export default function Contact() {

    // FORM STATE

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');



    // ALERT STATE

    const [alertTitle, setAlertTitle] = useState<string>('');
    const [alertText, setAlertText] = useState<string>('');
    const [alertType, setAlertType] = useState<string>('');

    const [showAlert, setShowAlert] = useState<boolean>(false);


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("SEND");
        console.log({name, email, message});

        try {
            const res = await fetch(`/api/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, email, message})
            });


            if(res.ok){
                setShowAlert(true);
                setAlertType("alert-success");
                setAlertTitle("Well done!");
                setAlertText("Your message has been successfully sent");

                setTimeout(async ()=> {
                    setShowAlert(false);
                    setAlertType("");
                    setAlertTitle("");
                    setAlertText("");
                },3000);
            }

            if(!res.ok){
                setShowAlert(true);
                setAlertType("alert-danger");
                setAlertTitle("Something went wrong!");

                setTimeout(async ()=> {
                    setShowAlert(false);
                    setAlertType("");
                    setAlertTitle("");
                    setAlertText("");
                },3000);
            }
        }
        catch (e){
            console.log(e);
            setShowAlert(true);
            setAlertType("alert-danger");
            setAlertTitle("Something went wrong!");

            setTimeout(async ()=> {
                setShowAlert(false);
                setAlertType("");
                setAlertTitle("");
                setAlertText("");
            },3000);
        }

    }


    return (
        <section className="section bg-gray py-10" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mx-auto mt-8 custom-form">
                        <h2>Contact Us</h2>
                        {showAlert && <Alert title={alertTitle} text={alertText} type={alertType}/>}
                        <form name="contactForm" id="contactForm" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" onChange = {(event:React.ChangeEvent<HTMLInputElement>)=> setName(event.target.value)} className="form-control" id="name" required placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" onChange = {(event:React.ChangeEvent<HTMLInputElement>)=> setEmail(event.target.value)} className="form-control" id="email" required placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" onChange = {(event:React.ChangeEvent<HTMLTextAreaElement>)=> setMessage(event.target.value)} id="message" rows={3} required placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}