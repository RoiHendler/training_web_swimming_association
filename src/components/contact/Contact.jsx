import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>


          <button type="submit">Send</button>
          {message && <span>Thanks, the message has been sent :)</span>}
        </form>
        <h3>The tutorial and app were developed by Roi Hendler, Daniel Dayan and Nir Bagizada</h3>
          <h3>students at Bar Ilan University</h3>
          <h3>As part of are final project - In the Department of Computer Science</h3>
      </div>
    </div>
  );
}
