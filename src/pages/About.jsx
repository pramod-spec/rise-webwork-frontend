import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #fff8e1, #e3f2fd)",
        overflow: "hidden",
      }}
    >
      {/* About Section */}
      <motion.section
        className="container text-center py-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          style={{
            color: "#ff6f61",
            fontWeight: "700",
            fontSize: "2.5rem",
            textShadow: "0px 2px 10px rgba(255, 111, 97, 0.5)",
          }}
        >
          ℹ️ About Us
        </motion.h2>

        <motion.p
          className="mt-4 fs-5"
          style={{ color: "#333", maxWidth: "800px", margin: "0 auto" }}
          whileHover={{ scale: 1.02 }}
        >
          Welcome to <b>Delhi Rise Webwork</b> — where creativity meets code.
          We’re a passionate team dedicated to helping brands{" "}
          <b>shine online with powerful digital experiences.</b>
        </motion.p>

        <motion.p
          className="fs-5 mt-3"
          style={{ color: "#555", maxWidth: "800px", margin: "0 auto" }}
          whileHover={{ scale: 1.02 }}
        >
          Our goal is simple: create <b>beautiful, functional, and memorable</b>{" "}
          websites that leave a lasting impact.
        </motion.p>
      </motion.section>

      {/* Vision */}
      <motion.section
        className="container text-center my-5 p-5 rounded-5 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #d1c4e9, #b39ddb)",
          color: "white",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontWeight: "700" }}>👁️ Our Vision</h2>
        <p className="fs-5 mt-3">
          To be recognized for <b>innovation, quality, and reliability</b> while
          helping businesses <b>rise above the competition</b> through creative
          digital experiences.
        </p>
        <motion.img
          src="/images/that.png"
          alt="Vision"
          className="img-fluid rounded-4 mt-4"
          style={{
            maxWidth: "400px",
            boxShadow: "0px 0px 30px rgba(255,255,255,0.6)",
          }}
          whileHover={{ scale: 1.1, rotate: 3 }}
        />
      </motion.section>

      {/* Mission */}
      <motion.section
        className="container text-center my-5 p-5 rounded-5"
        style={{
          background: "linear-gradient(135deg, #b2dfdb, #80cbc4)",
          color: "#004d40",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontWeight: "700" }}>🚀 Our Mission</h2>
        <ul
          className="list-unstyled fs-5 mt-4"
          style={{ lineHeight: "2rem", fontWeight: 500 }}
        >
          <li>🟢 Deliver <b>high-quality websites</b> that captivate users.</li>
          <li>🟢 Provide <b>custom digital solutions</b> for unique goals.</li>
          <li>🟢 Embrace <b>modern technologies</b> and trends.</li>
          <li>🟢 Offer <b>continuous support</b> for your growth.</li>
        </ul>

        <div className="row justify-content-center mt-4">
          {["webapp.png", "custom.png", "trends.png", "suport.png"].map(
            (img, i) => (
              <motion.div
                className="col-6 col-md-3 mb-3"
                key={i}
                whileHover={{ scale: 1.15, rotate: 2 }}
              >
                <img
                  src={`/images/${img}`}
                  alt={img}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    border: "3px solid white",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                />
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* What Makes Us Different */}
      <motion.section
        className="container text-center my-5 p-5 rounded-5"
        style={{
          background: "linear-gradient(135deg, #ffcc80, #ffb74d)",
          color: "#4e342e",
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontWeight: "700" }}>💎 What Makes Us Different</h2>
        <div className="fs-5 mt-4 text-start mx-auto" style={{ maxWidth: "700px" }}>
          <p>🔵 <b>Expert Team:</b> Creativity meets technical mastery.</p>
          <p>🔵 <b>Client Focus:</b> Your success drives ours.</p>
          <p>🔵 <b>Innovation:</b> Fresh ideas and cutting-edge design.</p>
          <p>🔵 <b>Reliability:</b> On-time delivery, every time.</p>
          <p>🔵 <b>Partnership:</b> We build long-term trust.</p>
        </div>
      </motion.section>

      {/* Join the Journey */}
      <motion.section
        className="container text-center p-5 rounded-5 mb-5"
        style={{
          background: "linear-gradient(135deg, #42a5f5, #7e57c2)",
          color: "white",
          boxShadow: "0px 0px 40px rgba(126, 87, 194, 0.5)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          👥 Join the Journey
        </motion.h2>
        <p className="fs-5 mt-3">
          Let’s create something <b>extraordinary together!</b>
        </p>
        <p className="fs-6">
          At <b>Delhi Rise Webwork</b>, we don’t just design — we{" "}
          <b>bring ideas to life.</b>
        </p>
      </motion.section>
    </div>
  );
}
