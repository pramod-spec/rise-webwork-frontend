import { motion } from "framer-motion";



export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "linear-gradient(180deg, #e0f7fa, #fff, #fce4ec)",
        color: "#333",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* ===== Hero Section ===== */}
      <motion.header
        className="text-center py-5 mb-5"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
        style={{
          background: "linear-gradient(135deg, #00bcd4, #7b1fa2)",
          color: "#fff",
        }}
      >
        <motion.img
          src="/images/logo.jpg"
          alt="Delhi Rise Webwork Logo"
          className="img-fluid mb-3 rounded-4 shadow-lg bg-white p-2"
          style={{
            height: "120px",
            maxWidth: "90vw",
            objectFit: "contain",
          }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />

        <motion.h1
          className="fw-bold py-2 px-4 rounded-pill shadow-sm d-inline-block"
          style={{
            color: "#fff",
            background: "linear-gradient(90deg, #ff4081, #2196f3)",
          }}
          whileHover={{ scale: 1.05 }}
        >
          We Code Your Vision into Reality 🚀
        </motion.h1>
      </motion.header>

      {/* ===== Navbar ===== */}
      

      {/* ===== Who We Are Section ===== */}
      <motion.section
        className="row align-items-center my-5 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <div
          className="col-sm-6 p-4 text-center rounded-4 shadow-lg"
          style={{
            background: "linear-gradient(145deg, #ffffff, #d0f8ce)",
            border: "2px solid #4caf50",
          }}
        >
          <h2 className="fw-bold mb-3 text-success">
            <span style={{ fontSize: "40px" }}>❓</span> Who We Are
          </h2>
          <hr style={{ width: "70px", border: "2px solid #4caf50", margin: "auto" }} />
          <p className="lead mt-3">
            🌐 Welcome to <strong>Delhi Rise Webwork</strong> — your trusted
            partner for creating beautiful, user-friendly, and powerful digital
            experiences.
            <br /><br />
            We believe your website is the <b>digital heart</b> of your brand —
            the first impression and connection to your audience.
            <br /><br />
            Our passionate team crafts <b>modern, responsive</b>, and
            high-performance websites tailored to your goals.
          </p>
        </div>

        

        <motion.div
          className="col-sm-6 text-center mt-4 mt-sm-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/images/who.png"
            alt="Who We Are"
            className="img-fluid rounded-4 shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* ===== About Us Section ===== */}
      <motion.section
        className="row align-items-center my-5 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="col-sm-6 text-center mb-4 mb-sm-0"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/images/about.jpg"
            alt="About Us"
            className="img-fluid rounded-4 shadow-lg"
            style={{ maxHeight: "400px", objectFit: "cover" }}
            loading="lazy"
          />
        </motion.div>

        <div
          className="col-sm-6 p-4 text-center rounded-4 shadow-lg"
          style={{
            background: "linear-gradient(145deg, #ffffff, #e1bee7)",
            border: "2px solid #9c27b0",
          }}
        >
          <h2 className="fw-bold mb-3 text-primary">
            <span style={{ fontSize: "40px" }}>💡</span> About Us
          </h2>
          <hr style={{ width: "70px", border: "2px solid #9c27b0", margin: "auto" }} />
          <p className="lead mt-3">
            💻 At <strong>Delhi Rise Webwork</strong>, we turn creativity into
            functionality.
            <br /><br />
            Our team combines innovation and expertise to build
            <b> high-quality websites</b>, web apps, and digital experiences.
            <br /><br />
            Whether you’re a startup or a growing business, we code your dreams
            into <b>clean, modern, and scalable solutions</b>.
          </p>
        </div>
      </motion.section>

      {/* ===== Our Services Section ===== */}
      <motion.section
        className="my-5 px-4 py-4 rounded-4 shadow-lg"
        style={{
          background: "linear-gradient(145deg, #bbdefb, #e3f2fd)",
          border: "2px solid #2196f3",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="row align-items-center">
          <div className="col-sm-6 text-center text-sm-start mb-4 mb-sm-0">
            <h2 className="fw-bold mb-4 text-primary d-flex align-items-center justify-content-center justify-content-sm-start">
              <img
                src="/images/service.jpg"
                alt="Services"
                style={{ width: "50px", marginRight: "10px" }}
              />
              Our Services
            </h2>
            <hr style={{ width: "70px", border: "2px solid #2196f3", margin: "0 auto 20px auto" }} />

            {[
              {
                img: "wd.jpg",
                title: "Web Development",
                text: "Responsive and high-performing websites using React.js & Django.",
                color: "#009688",
              },
              {
                img: "ui.jpg",
                title: "UI/UX Design",
                text: "Beautiful, intuitive, and user-focused designs.",
                color: "#e91e63",
              },
              {
                img: "seo.jpg",
                title: "SEO & Optimization",
                text: "Boost your visibility and reach the right audience.",
                color: "#ff9800",
              },
              {
                img: "support.jpg",
                title: "Maintenance & Support",
                text: "Keep your website secure, updated, and running smoothly.",
                color: "#3f51b5",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="mt-4 p-3 rounded-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <p className="fs-5 fw-bold" style={{ color: service.color }}>
                  <img
                    src={`/images/${service.img}`}
                    alt={service.title}
                    style={{ width: "40px", marginRight: "10px" }}
                    loading="lazy"
                  />
                  {i + 1}. {service.title}
                </p>
                <p>{service.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="col-sm-6 text-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <video
              src="/images/video.mp4"
              className="rounded-4 shadow-lg w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
              muted
              loop
              playsInline
              controls
            ></video>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== Contact Section ===== */}
      <motion.section
        className="text-center py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(135deg, #00acc1, #8e24aa)",
          color: "#fff",
        }}
      >
        <h2 className="fw-bold mb-3">📬 Contact Us</h2>
        <hr style={{ width: "70px", border: "2px solid #fff", margin: "auto" }} />
        <ul className="list-unstyled lead mt-3">
          <li>🚀 Ready to start your next project?</li>
          <li>We’d love to hear from you!</li>
          <li>
            ✉️ Email us at: <u>pramod200419@gmail.com</u>
          </li>
        </ul>
      </motion.section>

      {/* ===== Footer ===== */}
      <motion.footer
        className="text-center py-3 mt-0"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 1 }}
        style={{
          background: "linear-gradient(90deg, #2196f3, #e91e63)",
          color: "#fff",
          letterSpacing: "0.5px",
          fontSize: "15px",
        }}
      >
        © {new Date().getFullYear()} <strong>Delhi Rise Webwork</strong> — All Rights Reserved.
      </motion.footer>

      {/* ===== Responsive Adjustments ===== */}
      <style>{`
        @media (max-width: 576px) {
          section {
            padding: 2rem 1rem !important;
          }
          h1, h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

      
    </div>
    
  );
}

