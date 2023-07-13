import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "teste_ls",
        "template_s8njyei",
        form.current,
        "raXue5XbnS4PZi53q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="small">Fill out the form and we'll be in touch as soon as possible.
"*" indicates required fields</div>
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-name">
        <input type="text" name="user_name" placeholder="Full Name*" />
      </div>
      <div className="form-mail">
        <input type="email" name="user_email" placeholder="Email*"/>
      </div>
      <div className="form-phone">
        <input type="tel" name="user_phone" placeholder="Phone"/>
      </div>
      <div>
      <textarea name="message" className="form-text" placeholder="Enter your message here.*"/>
      </div>
      <div className="form-submit">
        <button type="submit"> Send</button>
      </div>
    </form>
    </div>
  );
}

export default ContactPage;
