import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={styles.footer}
    >
      <p style={styles.text}>
        © 2026 <span style={styles.name}>Cyuzuzo Fabrice</span> · software engineer
      </p>

      <p style={styles.subText}>
        Built with React  · Designed for modern web experiences
      </p>
    </motion.footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "30px 20px",
    borderTop: "1px solid #222",
    marginTop: "60px",
    background: "#0a0a0a",
  },

  text: {
    fontSize: "14px",
    color: "#aaa",
    marginBottom: "8px",
  },

  name: {
    color: "white",
    fontWeight: "bold",
  },

  subText: {
    fontSize: "12px",
    color: "#666",
  },
};

export default Footer;