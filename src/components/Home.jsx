import { motion } from "framer-motion";

function Hero() {
  return (
    <div style={styles.wrapper}>
      
      {/* Background Glow */}
      <div style={styles.glow}></div>

      <div style={styles.container}>
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.badge}
        >
          Available for opportunities
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.title}
        >
          Hi, I'm{" "}
          <span style={styles.name}>Cyuzuzo Fabrice</span>
          <br />
          Frontend Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.subtitle}
        >
          I build modern, fast, and visually stunning web applications using React.
          Focused on clean UI, smooth UX, and scalable frontend systems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.buttons}
        >
          <a href="/projects" style={styles.primaryBtn}>
            View Projects
          </a>

          <a href="/contact" style={styles.secondaryBtn}>
            Contact Me
          </a>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={styles.tech}
        >
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>UI/UX</span>
        </motion.div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "40px 20px",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(0,123,255,0.4), transparent 70%)",
    filter: "blur(80px)",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },

  container: {
    textAlign: "center",
    zIndex: 1,
    maxWidth: "800px",
  },

  badge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "20px",
    background: "#111",
    border: "1px solid #333",
    fontSize: "14px",
    marginBottom: "20px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    lineHeight: "1.2",
  },

  name: {
    color: "#4da3ff",
  },

  subtitle: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#aaa",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 20px",
    background: "#4da3ff",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "12px 20px",
    background: "transparent",
    color: "white",
    borderRadius: "10px",
    border: "1px solid #333",
    textDecoration: "none",
  },

  tech: {
    marginTop: "30px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
    color: "#aaa",
    fontSize: "14px",
  },
};

export default Hero;