import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      desc: "Full stack shopping system built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "AI Nutrition App",
      desc: "AI-powered food analysis and calorie tracking system",
      tech: ["React", "AI", "API"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Portfolio Website",
      desc: "Modern developer portfolio with animations and clean UI",
      tech: ["React", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.glow}></div>

      <div style={styles.container}>
        <motion.h1 style={styles.title}>
          My Projects
        </motion.h1>

        <p style={styles.subtitle}>
        
        </p>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(77,163,255,0.35)",
              }}
              style={styles.card}
            >
              {/* IMAGE WRAPPER (FIX) */}
              <div style={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.image}
                />
              </div>

              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.text}>{project.desc}</p>

                <div style={styles.tags}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: "60px 20px",
    position: "relative",
    background: "#0a0a0a",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },

  glow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(0,123,255,0.25), transparent 60%)",
    filter: "blur(120px)",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 0,
  },

  container: {
    maxWidth: "1100px",
    zIndex: 1,
    textAlign: "center",
  },

  title: {
    fontSize: "44px",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#aaa",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },

  /* GLASS CARD */
  card: {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    overflow: "hidden",
    cursor: "pointer",
    zIndex: 2,
  },

  /* 🔥 FIX: IMAGE WRAPPER */
  imageWrapper: {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    position: "relative",
    background: "#111",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    opacity: 1,
    transform: "scale(1.02)",
  },

  content: {
    padding: "15px",
    textAlign: "left",
  },

  cardTitle: {
    fontSize: "18px",
    marginBottom: "5px",
  },

  text: {
    color: "#bbb",
    fontSize: "14px",
  },

  tags: {
    marginTop: "12px",
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },

  tag: {
    fontSize: "11px",
    padding: "4px 8px",
    background: "rgba(77,163,255,0.15)",
    border: "1px solid rgba(77,163,255,0.3)",
    borderRadius: "8px",
    color: "#4da3ff",
  },
};

export default Projects;