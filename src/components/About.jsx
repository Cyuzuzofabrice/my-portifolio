import { motion } from "framer-motion";

function About() {
  return (
    <div style={styles.wrapper}>
      
      {/* Glow Background */}
      <div style={styles.glow}></div>

      <div style={styles.container}>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          About Me
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={styles.subtitle}
        >
          I am a passionate Frontend Developer focused on building modern,
          clean, and scalable web applications using React and modern UI design principles.
        </motion.p>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={styles.card}
        >
          <h2> Profile</h2>
          <p>Frontend Developer | React Specialist</p>
          <p> Kigali, Rwanda</p>
          <p> Goal: Build world-class web applications</p>
        </motion.div>

        {/* Skills */}
        <div style={styles.section}>
          <h2> Skills</h2>

          <Skill name="React" level="90%" />
          <Skill name="JavaScript" level="85%" />
          <Skill name="HTML / CSS" level="95%" />
          <Skill name="UI Design" level="80%" />
        </div>

        {/* Timeline */}
        <div style={styles.section}>
          <h2> Journey</h2>

          <motion.div style={styles.item} whileHover={{ scale: 1.02 }}>
            Software Engineering Student
          </motion.div>

          <motion.div style={styles.item} whileHover={{ scale: 1.02 }}>
             Built multiple React projects
          </motion.div>

          <motion.div style={styles.item} whileHover={{ scale: 1.02 }}>
             Learning Full Stack Development
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={styles.contact}
        >
          <h2> Contact</h2>
          <p> +250798842328</p>
          <p> fabricecyuzuzo2@gamil.com</p>
        </motion.div>

      </div>
    </div>
  );
}

/* SKILL COMPONENT */
function Skill({ name, level }) {
  return (
    <div style={styles.skillBox}>
      <p>{name}</p>
      <div style={styles.bar}>
        <div style={{ ...styles.fill, width: level }}></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "60px 20px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },

  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(0,123,255,0.3), transparent 70%)",
    filter: "blur(90px)",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },

  container: {
    maxWidth: "800px",
    zIndex: 1,
    textAlign: "center",
    color: "white",
  },

  title: {
    fontSize: "42px",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: "10px",
    color: "#aaa",
    fontSize: "18px",
    lineHeight: "1.6",
  },

  card: {
    marginTop: "30px",
    padding: "20px",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "15px",
  },

  section: {
    marginTop: "40px",
    textAlign: "left",
  },

  skillBox: {
    marginTop: "15px",
  },

  bar: {
    height: "8px",
    background: "#222",
    borderRadius: "10px",
  },

  fill: {
    height: "8px",
    background: "#4da3ff",
    borderRadius: "10px",
  },

  item: {
    marginTop: "10px",
    padding: "15px",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "10px",
  },

  contact: {
    marginTop: "40px",
    padding: "20px",
    background: "#111",
    borderRadius: "15px",
    border: "1px solid #333",
  },
};

export default About;