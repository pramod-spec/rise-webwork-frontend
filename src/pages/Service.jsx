import React from "react";
import { motion } from "framer-motion";

export default function Service() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay },
    }),
  };

  const imageHover = { scale: 1.06, rotate: 0.5 };
  const imageTap = { scale: 0.98 };

  const cardStyle = {
    borderRadius: 14,
    padding: "22px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        fontFamily: "'Poppins', sans-serif",
        lineHeight: 1.6,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={sectionVariants}
        style={{
          textAlign: "center",
          marginBottom: 30,
          padding: "28px",
        }}
      >
        <h1 style={{ fontWeight: 800, fontSize: 34, marginBottom: 8 }}>
          💼 Our Services
        </h1>
        <p style={{ color: "#333", maxWidth: 980, margin: "0 auto" }}>
          At **Delhi Rise Web Work Solutions**, we believe your website isn’t
          just a digital presence — it’s your brand’s voice, personality, and
          first impression.
        </p>
        <p style={{ color: "#333", maxWidth: 980, margin: "8px auto" }}>
          We combine creativity, technology, and strategy to deliver web
          solutions that drive results, strengthen your identity, and elevate
          your business in the digital world.
        </p>
        <p style={{ color: "#333", maxWidth: 980, margin: "8px auto" }}>
          Whether you’re a startup looking to build your presence or an
          established brand aiming to expand your reach, our services are
          designed to meet every digital need with precision and passion.
        </p>
      </motion.div>

      {/* Website Design & Development - Blue Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.05}
        variants={sectionVariants}
        className="row align-items-center mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(224,243,255,1) 0%, rgba(245,249,255,1) 100%)",
          borderLeft: "6px solid #2b8cff",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-6">
          <h2>🌐 Website Design & Development</h2>
          <p>
            Your website is the heart of your online presence — and we make sure
            it beats beautifully.
          </p>
          <p>
            Our design and development team crafts responsive, dynamic, and
            visually stunning websites that capture your brand essence and
            deliver seamless user experiences.
          </p>
          <p>
            We focus on both aesthetics and functionality, ensuring your site
            looks great on every screen and performs flawlessly.
          </p>
          <br />
          <ul>
            **What We Offer:**
            <li>Custom website design tailored to your business goals</li>
            <li>Static and dynamic website development</li>
            <li>Corporate and business website solutions</li>
            <li>Portfolio and personal brand websites</li>
            <li>Blog, news, and magazine-style sites</li>
            <li>Mobile-friendly and SEO-optimized layouts</li>
            <br />
            **
              ✨ We don’t just build websites — we build digital stories that
              engage and inspire.
            **
          </ul>
        </div>

        <div className="col-sm-6 text-center">
          <motion.img
            src="/images/wdd.png"
            alt="Website"
            className="img-fluid"
            style={{
              maxHeight: 220,
              borderRadius: 12,
              boxShadow: "0 8px 20px rgba(43,140,255,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
        </div>
      </motion.div>

      {/* E-Commerce Solutions - Orange / Pink Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.1}
        variants={sectionVariants}
        className="row align-items-center mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,241,215,1) 0%, rgba(255,244,241,1) 100%)",
          borderLeft: "6px solid #ff7a18",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-6">
          <h2>🛍️ E-Commerce Solutions</h2>
          <p>Launch your online store with confidence and creativity.</p>
          <p>
            Our e-commerce development service helps you sell products and
            services effectively through stunning, easy-to-navigate, and secure
            online platforms.
          </p>
          <ul>
            **Our E-Commerce Expertise Includes:**
            <li>Custom online store design (React, WordPress, Shopify, etc.)</li>
            <li>Product listing, inventory, and order management systems</li>
            <li>Integrated secure payment gateways</li>
            <li>Shopping cart and checkout customization</li>
            <li>Customer account and loyalty systems</li>
            <li>Analytics and conversion tracking</li>
            <br />
            **
              🛒 We help you transform visitors into loyal customers and sales
              into long-term success.
            **
          </ul>
        </div>

        <div className="col-sm-6 d-flex flex-wrap justify-content-center gap-2">
          <motion.img
            src="/images/ec.png"
            alt="ecom"
            className="img-fluid m-1"
            style={{
              maxHeight: 110,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(255,122,24,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
          <motion.img
            src="/images/ereact.png"
            alt="React"
            className="img-fluid m-1"
            style={{
              maxHeight: 110,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(255,122,24,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
          <motion.img
            src="/images/eshop.png"
            alt="Eshop"
            className="img-fluid m-1"
            style={{
              maxHeight: 110,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(255,122,24,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
          <motion.img
            src="/images/ewp.png"
            alt="Wordpress"
            className="img-fluid m-1"
            style={{
              maxHeight: 110,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(255,122,24,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
        </div>
      </motion.div>

      {/* Digital Marketing & SEO - Purple Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
        variants={sectionVariants}
        className="row align-items-center mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(247,243,255,1) 0%, rgba(255,250,255,1) 100%)",
          borderLeft: "6px solid #8e44ad",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-6">
          <h2>📱 Digital Marketing & SEO</h2>
          <p>Visibility is everything — and we make sure you stand out.</p>
          <p>
            Our digital marketing team uses powerful strategies to increase your
            reach, boost engagement, and drive meaningful traffic to your
            website.
          </p>
          <br />
          <ul>
            **Our Marketing & SEO Services:**
            <li>Search Engine Optimization (On-page & Off-page)</li>
            <li>Google Ads & Paid Campaigns</li>
            <li>Social Media Marketing (Facebook, Instagram, LinkedIn, YouTube)</li>
            <li>Content Marketing & Blogging</li>
            <li>Email Marketing Campaigns</li>
            <li>Brand Awareness & Online Reputation Building</li>
            <br />
            **
              🚀 From content to clicks — we help your business rise to the top.
            **
          </ul>
        </div>

        <div className="col-sm-6 d-flex justify-content-center">
          <motion.img
            src="/images/ads.png"
            alt="Ads"
            className="img-fluid m-1"
            style={{
              maxHeight: 160,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(142,68,173,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
          <motion.img
            src="/images/socialmedia.jpg"
            alt="Social Media"
            className="img-fluid m-1"
            style={{
              maxHeight: 160,
              borderRadius: 10,
              boxShadow: "0 8px 20px rgba(142,68,173,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
        </div>
      </motion.div>

      {/* Branding & Graphic Design - Pink Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.2}
        variants={sectionVariants}
        className="row align-items-center mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,238,242,1) 0%, rgba(255,250,250,1) 100%)",
          borderLeft: "6px solid #ff2d95",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-6">
          <h2>🎨 Branding & Graphic Design</h2>
          <p>
            Your brand identity is the soul of your business. We create designs
            that not only look good but also speak your story.
          </p>
          <br />
          <ul>
            **Our Design Capabilities:**
            <li>Logo design & brand identity creation</li>
            <li>Business cards, brochures & marketing materials</li>
            <li>Social media post & banner design</li>
            <li>UI/UX design for websites & apps</li>
            <li>Rebranding & visual storytelling</li>
            <br />
            **
              🎯 Our designs are creative, memorable, and crafted to leave a
              lasting impact.
            **
          </ul>
        </div>

        <div className="col-sm-6 text-center">
          <motion.img
            src="/images/ui.jpg"
            alt="UserInterface"
            className="img-fluid"
            style={{
              maxHeight: 260,
              borderRadius: 12,
              boxShadow: "0 8px 20px rgba(255,45,149,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
        </div>
      </motion.div>

      {/* Custom Web Applications - Teal Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.25}
        variants={sectionVariants}
        className="row align-items-center mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(235,255,251,1) 0%, rgba(247,255,254,1) 100%)",
          borderLeft: "6px solid #00b894",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-6">
          <h2>🧩 Custom Web Applications</h2>
          <p>
            When your business needs more than a traditional website, we bring
            innovation to life through advanced web applications.
          </p>
          <br />
          <ul>
            **We Build:**
            <li>Admin dashboards & CRM systems</li>
            <li>Booking & management portals</li>
            <li>Educational platforms</li>
            <li>Real estate, travel, and healthcare apps</li>
            <li>AI-integrated web tools</li>
            <li>Custom workflow and automation systems</li>
            <br />
            **
              💻 We build powerful, scalable, and future-ready web applications
              to meet your unique goals.
            **
          </ul>
        </div>

        <div className="col-sm-6 text-center">
          <motion.img
            src="/images/crm.png"
            alt="Crm"
            className="img-fluid"
            style={{
              maxHeight: 220,
              borderRadius: 12,
              boxShadow: "0 8px 20px rgba(0,184,148,0.12)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={imageHover}
            whileTap={imageTap}
          />
        </div>
      </motion.div>

      {/* Hosting, Maintenance & Support - Blue-Green Gradient */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.3}
        variants={sectionVariants}
        className="row align-items-center my-5 p-4 rounded shadow-lg"
        style={{
          background: "linear-gradient(to right, #e1f5fe, #fff)",
          borderLeft: "8px solid #03a9f4",
        }}
      >
        <div className="col-md-6">
          <h2 style={{ color: "#0288d1" }}>☁️ Hosting, Maintenance & Support</h2>
          <p>
            Once your website is live, our relationship doesn’t end — it begins.
          </p>
          <p>
            We provide ongoing maintenance, hosting, and tech support so your digital presence stays
            secure, fast, and always up-to-date.
          </p>
          <ul>
            **Our Maintenance Services Include:**
            <li>Reliable hosting setup</li>
            <li>Regular website backups & updates</li>
            <li>Speed optimization & bug fixes</li>
            <li>24/7 technical support</li>
            <li>Security monitoring and malware protection</li>
            <br />
            <strong style={{ color: "#e63946" }}>
              🛠️ We manage the backend, so you can focus on growing your business.
            </strong>
          </ul>
        </div>

        {/* Image on the same line */}
        <motion.div
          className="col-md-6 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <img
            src="/images/hosting.png"
            alt="Hosting"
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>

      {/* Our Process */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.35}
        variants={sectionVariants}
        className="row align-items-start mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,249,240,1) 0%, rgba(255,255,255,1) 100%)",
          borderLeft: "6px solid #ffb400",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-12">
          <h2>💡 Our Process</h2>
          <ul>We follow a transparent, collaborative, and result-driven process:</ul>
          <ol type="number">
            <li>
              **Discovery:** Understanding your goals, audience,
              and vision.
            </li>
            <li>
              **Planning:** Creating a detailed strategy and design
              roadmap.
            </li>
            <li>
              **Design & Development:** Turning ideas into reality
              with creativity and code.
            </li>
            <li>
              **Testing & Launch:** Ensuring flawless functionality
              before going live.
            </li>
            <li>
              **Support & Growth:** Continuous improvements and
              performance tracking.
            </li>
          </ol>
        </div>
      </motion.div>

      {/* Why Choose */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        variants={sectionVariants}
        className="row align-items-start mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(240,248,255,1) 0%, rgba(255,255,255,1) 100%)",
          borderLeft: "6px solid #6a1b9a",
          marginBottom: 30,
          ...cardStyle,
        }}
      >
        <div className="col-sm-12">
          <h2>🌟 Why Choose Delhi Rise Web Work Solutions</h2>
          <p>We’re not just another web agency — we’re your digital growth partners.</p>
          <br />
          <p>✅ Passionate & skilled professionals</p>
          <p>✅ Transparent pricing with no hidden costs</p>
          <p>✅ Timely delivery with top-tier quality</p>
          <p>✅ 100% client satisfaction guarantee</p>
          <p>✅ Creative designs, cutting-edge technology</p>
          <p>✅ Ongoing support & long-term partnership</p>
        </div>
      </motion.div>

      {/* Contact & Map */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.45}
        variants={sectionVariants}
        className="row align-items-start mb-4"
        style={{
          background:
            "linear-gradient(90deg, rgba(245,255,249,1) 0%, rgba(255,255,255,1) 100%)",
          borderLeft: "6px solid #00b894",
          marginBottom: 30,
          padding: 22,
          borderRadius: 14,
          boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        }}
      >
        <div className="col-sm-6">
          <h2>✨ Let’s Build Something Extraordinary</h2>
          <p>
            Your digital journey starts here. Let’s collaborate, innovate, and
            create something that leaves a mark.
          </p>
          <br />
          <p>
            **📩 Email:**{" "}
            <a
              href="mailto:pramod200419@gmail.com"
              style={{ textDecoration: "none", color: "red" }}
            >
              <u>delhirisewebwork@gmail.com</u>
            </a>
          </p>
          <p>
            **📞 Phone:**{" "}
            <a
              href="tel:+917838095673"
              style={{ textDecoration: "none", color: "red" }}
            >
              7838095673
            </a>
          </p>
        </div>

        <div
          className="col-sm-6"
          //style={{ width: "100%", height: "450px", paddingLeft: 12 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112081.87334807194!2d77.2308992!3d28.613017599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762791037916!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.5}
        variants={sectionVariants}
        className="row mb-4"
        style={{ textAlign: "center" }}
      >
        <div className="col-sm-3">
          <motion.a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, rotate: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/images/fb.png"
              alt="Facebook"
              className="img-fluid"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            />
          </motion.a>
        </div>

        <div className="col-sm-3">
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/images/ins.jpg"
              alt="Instagram"
              className="img-fluid"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            />
          </motion.a>
        </div>

        <div className="col-sm-3">
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, rotate: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/images/linked.png"
              alt="Linkedin"
              className="img-fluid"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            />
          </motion.a>
        </div>

        <div className="col-sm-3">
          <motion.a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src="/images/yt.png"
              alt="Youtube"
              className="img-fluid"
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
              }}
            />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}