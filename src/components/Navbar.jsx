import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-lg px-4 py-2"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
        borderBottom: "2px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* ===== Brand Name ===== */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            fontSize: "1.5rem",
            background: "linear-gradient(90deg, #00e5ff, #ff4081)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
            textShadow: "0 0 8px rgba(255,255,255,0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Delhi Rise Webwork
        </Link>

        {/* ===== Dropdown Menu ===== */}
        <div className="dropdown">
          <button
            className="btn btn-dark border-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              background: "linear-gradient(90deg, #ff4081, #00bcd4)",
              borderRadius: "50%",
              padding: "10px",
              transition: "transform 0.4s ease, box-shadow 0.3s ease",
              boxShadow: "0 0 10px rgba(0,188,212,0.5)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "rotate(90deg) scale(1.1)";
              e.target.style.boxShadow = "0 0 15px rgba(255,64,129,0.8)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotate(0deg) scale(1)";
              e.target.style.boxShadow = "0 0 10px rgba(0,188,212,0.5)";
            }}
          >
            <img
              src="/images/menu.svg"
              alt="menu"
              style={{
                height: "28px",
                width: "28px",
                filter: "invert(100%)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>

          {/* ===== Dropdown Items ===== */}
          <ul
            className="dropdown-menu shadow border-0 rounded-3"
            style={{
              right: "10px",
              left: "auto",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,240,0.9))",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <li>
              <Link className="dropdown-item fw-semibold" to="/">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-semibold" to="/services">
                💼 Services
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-semibold" to="/contact">
                📞 Contact
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-semibold" to="/feedback">
                💬 Feedback
              </Link>
            </li>
            <li>
              <Link className="dropdown-item fw-semibold" to="/about">
                ℹ️ About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Inline Animations & Mobile Fix ===== */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-menu a {
          color: #333;
          border-radius: 8px;
          margin: 3px 8px;
          transition: all 0.3s ease;
        }

        .dropdown-menu a:hover {
          background: linear-gradient(90deg, #00bcd4, #ff4081);
          color: #fff !important;
          transform: translateX(6px);
          box-shadow: 0 0 8px rgba(0,0,0,0.2);
        }

        /* ===== MOBILE FIX ===== */
        @media (max-width: 768px) {
          .dropdown-menu {
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
            width: 80vw !important;
            text-align: center !important;
          }
        }
      `}</style>
    </nav>
  );
}
