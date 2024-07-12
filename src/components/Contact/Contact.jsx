import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function Contact(props) {
  const {t} = useTranslation()

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
        <span>{t('contact-span')}</span> {t('contact')}
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
            <input type="text" name="name" placeholder={t('name')} />
          </div>
          <div class="item2">
            <input type="text" name="city" placeholder={t('city')} />
          </div>
          <div class="item3">
            <input type="email" name="email" placeholder={t('email')} />
          </div>
          <div class="item4">
            <textarea rows={4} type="text" name="message" placeholder={t('message')} />
          </div>
          <button type="submit" class="item5">
            {t('send-btn')}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
