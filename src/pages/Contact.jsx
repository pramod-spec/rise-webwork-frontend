import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "linear-gradient(135deg, #f9f9ff, #e3f2fd, #fff3e0)",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* Header Section */}
        <motion.div
          className="text-center mb-5 p-4 rounded-4 shadow"
          style={{
            background: "linear-gradient(90deg, #00bcd4, #8e24aa, #ff7043)",
            color: "white",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fw-bold">
            📞 Get in Touch with <span style={{ color: "#ffeb3b" }}>Delhi Rise Web Work</span>
          </h2>
          <p className="fs-5">
            We’d love to hear from you! Whether you’re starting a new project, need a website makeover,
            or just want to know how we can help your business grow — we’re just a message away.
          </p>
        </motion.div>

        {/* Contact Info and Map */}
        <div className="row align-items-center mb-5">
          {/* Left */}
          <motion.div
            className="col-md-6 mb-4 mb-md-0 p-4 rounded-4 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #ffecb3, #fff9c4, #ffe0b2)",
            }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="fw-semibold text-success">💬 Let’s Connect</h3>
            <p className="mt-3">
              <strong>📍 Office Address:</strong><br />
              Delhi Rise Web Work Solutions <br />
              North West Delhi, India
            </p>
            <p className="mt-3">
              <strong>📧 Email:</strong> <br />
              <a href="mailto:pramod200419@gmail.com" className="text-decoration-none fw-semibold" style={{ color: "#e91e63" }}>
                contact@delhirisewebwork.com
              </a>
            </p>
            <p>
              <strong>📞 Phone:</strong> <br />
              <a href="tel:+917838095673" className="text-decoration-none fw-semibold" style={{ color: "#1976d2" }}>
                +91 78380 95673
              </a>
            </p>
            <p className="mb-0">
              <strong>🕒 Working Hours:</strong> <br />
              Monday – Saturday: 9:00 AM – 7:00 PM <br />
              Sunday: <span style={{ color: "red" }}>Closed</span>
            </p>
          </motion.div>

          {/* Right - Map */}
          <motion.div
            className="col-md-6 p-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="fw-semibold mb-3" style={{ color: "#6a1b9a" }}>
              📍 Our Location
            </h3>
            <iframe
              title="Delhi Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112081.87334807194!2d77.2308992!3d28.6130176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762531037352!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{
                border: 0,
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-3" style={{ color: "#555" }}>
              Visit us at our Delhi office or find us easily using Google Maps.
            </p>
          </motion.div>
        </div>

        {/* Message Section */}
        <motion.div
          className="text-center mb-5 p-4 rounded-4 shadow-sm"
          style={{
            background: "linear-gradient(90deg, #42a5f5, #66bb6a, #ffb74d)",
            color: "white",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fw-bold">✉️ Send Us a Message</h2>
          <p className="fs-5">
            Have a question, idea, or project in mind? Tell us about your goals — we’ll reach out
            within 24 hours with a personalized response.
          </p>
          <p className="fw-semibold fst-italic">
            👉 “At Delhi Rise Web Work, every message matters. Let’s build something amazing together!”
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="text-center p-4 rounded-4 shadow"
          style={{
            background: "linear-gradient(135deg, #e1bee7, #bbdefb, #c8e6c9)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="fw-bold mb-3" style={{ color: "#ff5722" }}>
            🌐 Connect with Us Online
          </h2>
          <p className="fs-5 mb-4 text-dark">
            <b>Follow us on:</b>
          </p>

         <div className="row justify-content-center">
  {[
    {
      src: "/images/fb.png",
      alt: "Facebook",
      bg: "#1877f2",
      link: "https://www.facebook.com/DelhiRiseWebWork", // replace with your page
    },
    {
      src: "/images/ins.jpg",
      alt: "Instagram",
      bg: "#e4405f",
      link: "https://www.instagram.com/DelhiRiseWebWork", // replace with your profile
    },
    {
      src: "/images/linked.png",
      alt: "LinkedIn",
      bg: "#0077b5",
      link: "https://www.linkedin.com/company/DelhiRiseWebWork", // replace with your LinkedIn
    },
    {
      src: "/images/yt.png",
      alt: "YouTube",
      bg: "#ff0000",
      link: "https://www.youtube.com/@DelhiRiseWebWork", // replace with your YouTube channel
    },
  ].map((icon, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.1 }}
      className="col-3 col-md-2 mb-3"
    >
      <a
        href={icon.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            background: icon.bg,
            borderRadius: "50%",
            padding: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s",
          }}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="img-fluid rounded-circle"
            style={{ border: "3px solid white" }}
          />
        </div>
      </a>
    </motion.div>
  ))}

            
          </div>
        </motion.div>
      </div>
    </div>
  );
}
