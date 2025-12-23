import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= LOAD FROM LOCAL STORAGE ================= */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setRecent(stored);
  }, []);

  /* ================= SUBMIT HANDLER (MYSQL CONNECTED) ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name.trim()) return setError("Name is required");
    if (!message.trim()) return setError("Message is required");

    setLoading(true);

    const payload = {
      name,
      email,
      rating,
      message,
    };

    try {
      // 🔴 SEND DATA TO NODE + MYSQL
      const res = await fetch("http://localhost:5000/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Server error");

      // 🟢 KEEP LOCAL UI DATA
      const localPayload = {
        ...payload,
        createdAt: new Date().toISOString(),
      };

      const updated = [localPayload, ...recent];
      setRecent(updated);
      localStorage.setItem("feedbacks", JSON.stringify(updated));

      setSuccess("Feedback submitted successfully! 🎉");
      setName("");
      setEmail("");
      setMessage("");
      setRating(5);
    } catch (err) {
      setError("Failed to submit feedback ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <motion.h2
        className="text-center fw-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          background: "linear-gradient(45deg, #ff6b6b, #845ef7, #4dabf7)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: "2.5rem",
        }}
      >
        💬 Share Your Feedback
      </motion.h2>

      <div className="row g-4">
        {/* ================= FORM ================= */}
        <div className="col-lg-7">
          <motion.div
            className="card shadow-lg border-0"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: "linear-gradient(135deg, #ffffff, #e3f2fd)",
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-4">
              <motion.h3 className="mb-3 fw-bold" style={{ color: "#0d6efd" }}>
                We Value Your Thoughts 🌈
              </motion.h3>

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Rating */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Rating *</label>
                  <select
                    className="form-select"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} Star{n > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message *</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-100 py-2 fw-bold"
                  disabled={loading}
                  style={{
                    background:
                      "linear-gradient(90deg, #ff6b6b, #f06595, #845ef7)",
                    border: "none",
                    fontSize: "1.1rem",
                  }}
                >
                  {loading ? "Submitting..." : "Submit Feedback 🚀"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* ================= RECENT FEEDBACK ================= */}
        <div className="col-lg-5">
          <motion.div
            className="card shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #fff4e6, #ffe8cc)",
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-4">
              <h4 className="fw-bold" style={{ color: "#d9480f" }}>
                Recent Feedback ⭐
              </h4>

              {recent.length === 0 && (
                <p className="text-muted">No feedback yet.</p>
              )}

              <ul className="list-group border-0">
                {recent.slice(0, 10).map((f, i) => (
                  <motion.li
                    key={i}
                    className="list-group-item border-0 shadow-sm my-2 p-3 rounded"
                    style={{
                      background: "white",
                      borderLeft: "5px solid #ff922b",
                    }}
                  >
                    <div className="d-flex justify-content-between">
                      <strong style={{ color: "#e8590c" }}>{f.name}</strong>
                      <span className="fw-bold text-warning">
                        {f.rating}★
                      </span>
                    </div>
                    <p className="mb-0 small mt-1">{f.message}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
