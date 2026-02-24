import React from "react";

import "./Contacts.css";
import networkImg from "../assets/images/network.jpg"; // restaurant image component
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contacts = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.phone.match(/^\d{9,}$/))
      newErrors.phone = "Invalid phone number";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  // Removed duplicate handleSubmit function

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // Reset form or send to backend
    }
  };

  return (
    <div className="Contact-container">
      <div className="about-header">
        <div className="about-title">
          <h2>Have any questions?</h2>
          <p>we're here to help reach out for any question or concern</p>
        </div>
        <div className="about-image">
          <img src={networkImg} alt="Healthy meal" />
        </div>
      </div>

      <div className="div">
        <div className="conatctinfo">
          <h2>Contatct Form</h2>
          <div className="infos">
            <div className="infos-2">
              <input type="email" placeholder="Email" name="" id="" />
            </div>
            <div className="infos-2">
              <input type="phone" placeholder="Phone" name="" id="" />
            </div>
            <div className="infos-2">
              <input type="address" placeholder="Address" name="" id="" />
            </div>
          </div>
        </div>

        {/* Contact inFOs */}
        {/*  <div className="conatctinfo">
        <h2>Contatct Form</h2>
        <div className="infos">
          <div className="infos-2">
            <label htmlFor="name">your name</label>
            <input type="text" placeholder="Enter your name" name="" id="" />
          </div>
          <div className="infos-2">
            <label htmlFor="email">your Email</label>
            <input type="email" placeholder="Enter your email" name="" id="" />
          </div>
          <div className="infos-2">
            <textarea name="text" id=""></textarea>
          </div>
        </div>
        <button type="submit">Submit</button>
      </div> */}
        <div className="contactinfo">
          <h2>Contact Form</h2>
          <div className="infos">
            <div className="infos-2">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {errors.name && <span className="error">{errors.name}</span>}
            <div className="infos-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="infos-2">
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="infos-2">
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <button type="submit" onClick={handleSubmit} className="button">
              {submitted ? "Submitted!" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="footer">
        <div className="links">
          <div className="policy">privacy policy</div>
          <div className="terms">terms and conditions</div>
          <div className="contact">contact us</div>
        </div>
      </div>
      <div className="icons-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            style={{ fontSize: 30, color: "#4267B2", marginRight: "10px" }}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ fontSize: 30, color: "#E1306C" }} />
        </a>
      </div>
    </div>
  );
};
export default Contacts;
