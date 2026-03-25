import { useState } from "react";
import emailjs from  '@emailjs/browser';

// import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form values:", form);

    const serviceID = 'service_sy8grdq'
    const templateID = 'template_0l076b8'
    const publicKEY = 'ApFn3APB4jFIdiB9c'
    emailjs.send(
      serviceID,
      templateID,
      {
        name: form.name,
        email:form.email,
        message:form.message
      },
      publicKEY
    )
    .then((result)=>{
      console.log('send message successfully!!')
      alert('send message successfully!!')
    },(error)=>{
      console.log(error)
      alert('Sorry, Something went wrong!!!')

    })
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-wrapper">
      <div className="noise" />

      <div className="contact-card">
        <div className="card-header">
          <span className="tag">GET IN TOUCH</span>
          <h1 className="heading">
            Let's <em>talk</em>
          </h1>
          <p className="subtext">
            Drop us a message and we'll get back to you.
          </p>
        </div>

        <div className="form-body">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            className={`submit-btn ${submitted ? "sent" : ""}`}
            onClick={handleSubmit}
          >
            <span className="btn-text">
              {submitted ? "✓ Message Sent" : "Send Message"}
            </span>
            <span className="btn-glow" />
          </button>
        </div>

        <div className="accent-bar" />
      </div>
    </div>
  );
}