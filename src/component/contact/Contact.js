import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gao407m', 'template_onhnl2w', form.current, 'YK0PIqYAgAKtl4w7k').then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>Folarin Junior</h5>
              <a href="mailto:folarinjunior2@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className="contact__option">
              <BsLinkedin className='contact__option-icon'/>
              <h4>LinkedIn</h4>
              <h5>Folarin Junior</h5>
              <a href="https://linkedin.com/in/junior-folarin-5a4962212/" target="_blank" rel="noreferrer">Send a message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>Folarin Jr</h5>
              <a href="https://api.whatsapp.com/send?phone=+2347045672725" target="_blank" rel="noreferrer">Send a message</a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact