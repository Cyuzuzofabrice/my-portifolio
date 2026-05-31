import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={styles.nav}
    >
      <h2 style={styles.logo}>MyPortfolio</h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </div>
    </motion.nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px",
    position: "sticky",
    top: 0,
    zIndex: 1000,

    // 🔥 Glass effect (Apple style)
    background: "rgba(10,10,10,0.7)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #222",
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "#aaa",
    fontSize: "14px",
    transition: "0.3s",
  },
};

// Hover effect (simple JS way alternative is CSS but MVP safe)
document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "A") {
    e.target.style.color = "white";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "A") {
    e.target.style.color = "#aaa";
  }
});

export default Navbar;