import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_k2qawqh', 'template_c6rkpn6', formRef.current, 'X7K7ebhIeOy3YwHki')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>me@noumanhayat.com</h5>
            <a href="mailto:mekomerikomg@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="Your Full Name" name="user_name" required />
          <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your Email" name="user_email" required/>
          <textarea onChange={(e)=>{setMessage(e.target.value)}} placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" onClick={()=>{alert("Please enter your")}} className="btn btn-primary">Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact