import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fbf3jp9", "template_2lux13v", form.current, {
        publicKey: "cS3ovpoARGPXh9OC5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent to Nguyen Minh Nam");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact-container">
      <h1>
        <span>Contact</span> Me
      </h1>

      <div className="form-container">
        <div className="form-info">
          <div className="info-item">
            <i class="bx bx-envelope"></i>
            <p>nguyenminhnam1739@gmail.com</p>
          </div>
          <div className="info-item">
            <i class="bx bxl-github"></i>
            <p>github.com/nguyenminhnam11</p>
          </div>
        </div>

        <form ref={form} className="form-field" onSubmit={sendEmail}>
          <div class="item1">
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div class="item2">
            <input type="text" name="city" placeholder="City" />
          </div>
          <div class="item3">
            <input type="email" name="email" placeholder="Your email" />
          </div>
          <div class="item4">
            <input type="text" name="message" placeholder="Message" />
          </div>
          <button type="submit" class="item5">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
