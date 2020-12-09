import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7wbfogp', 'template_y6k6ezo', e.target, 'user_asrTodBmpM0sMI7eJoBKQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        document.getElementById("contactForm").reset();
    }

    return <>
        <form id="contactForm" className="contact-form" onSubmit={sendEmail}>
            <div className="row form-group">
                <input className="col mx-2 form-control" type="text" name="user_name" placeholder="your name" />
                <input className="col mx-2 form-control" type="email" name="user_email" placeholder="your email" />
            </div>
            <div className="row form-group">
                <textarea className="col mx-2 form-control" name="message" placeholder="your message" />
            </div>
            <div className="row form-group">
                <input id="submitButton" className="btn btn-light" type="submit" value="Send Message" />
            </div>
        </form>
    </>
}