import { motion } from "framer-motion";

function Contact() {
  return (
    <div style={styles.wrapper}>

      {/* Glow background */}
      <div style={styles.glow}></div>

      <div style={styles.container}>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.title}
        >
          Contact Me
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={styles.subtitle}
        >
          Let’s work together — feel free to reach out anytime.
        </motion.p>

        {/* Contact Cards */}
        <div style={styles.cards}>

         

        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.form}
        >

          <input style={styles.input} placeholder="Your Name" />
          <input style={styles.input} placeholder="Your Email" />
          <textarea style={styles.textarea} placeholder="Your Message" />

          <button style={styles.button}>
            Send Message
          </button>

        </motion.div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  glow: {
    position: "absolute",
    width: "450px",
    height: "450px",
    background: "radial-gradient(circle, rgba(0,123,255,0.25), transparent 70%)",
    filter: "blur(100px)",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },

  container: {
    maxWidth: "700px",
    width: "100%",
    textAlign: "center",
    zIndex: 1,
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "10px",
    marginBottom: "30px",
  },

  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },

  card: {
    background: "#111",
    border: "1px solid #333",
    padding: "15px 20px",
    borderRadius: "12px",
    minWidth: "200px",
  },

  text: {
    color: "#aaa",
    marginTop: "5px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    background: "#111",
    padding: "20px",
    borderRadius: "15px",
    border: "1px solid #333",
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#000",
    color: "white",
    outline: "none",
  },

  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#000",
    color: "white",
    height: "120px",
    outline: "none",
  },

  button: {
    padding: "12px",
    background: "#4da3ff",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
};

export default Contact;