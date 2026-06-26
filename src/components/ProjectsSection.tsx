import { motion } from "framer-motion";
import { Github, Code2 } from "lucide-react";

const projects = [
  {
    title: "CodeMeet",
    desc: "A real-time video interview platform for coding interviews. Features: video calling, live code editor, screen sharing, collaborative coding.",
    tags: ["React", "NodeJs", "MongoDB"],
    github: "https://github.com/realACO/CodeMeet",
    live: "https://codemeet-8wk7.onrender.com",
    color: "#6C5CE7",
  },
  {
    title: "Spotify Clone",
    desc: "A music streaming UI clone replicating Spotify interface with playback controls and responsive layout.",
    tags: ["React", "CSS", "JavaScript"],
    github: "https://github.com/realACO/Spotify-Clone",
    live: "https://acospotify.onrender.com",
    color: "#1DB954",
  },
  {
    title: "1UP-LEARN",
    desc: "gamified learning platform for kids featuring educational games, XP/reward systems, leaderboards, parent dashboards",
    tags: ["Python", "Terminal", "FFmpeg"],
    github: "https://github.com/realACO/1UP-LEARN",
    live: "https://1-up-learn.vercel.app/",
    color: "#FFD700",
  },
  {
    title: "GameHub",
    desc: "A gaming platform UI displaying games, ratings, and categories with modern React interface.",
    tags: ["React", "TypeScript", "API"],
    github: "https://github.com/realACO/GameHub",
    live: "https://game-hub-vert-tau-46.vercel.app/",
    color: "#FF6B6B",
  },
  {
    title: "Terminal Video Player",
    desc: "A web-based video player with a terminal-inspired interface, mimicking classic command-line aesthetics.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/realACO/Terminal-video-player",
    live: "https://realaco.github.io/Terminal-video-player/",
    color: "#FFA500",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Showcasing my passion for building intuitive, scalable, and visually
          stunning applications
        </p>
        <br />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            role="link"
            tabIndex={0}
            aria-label={`Open ${p.title} live site`}
            onClick={() => window.open(p.live, "_blank", "noreferrer")}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.open(p.live, "_blank", "noreferrer");
              }
            }}
            className="group relative cursor-pointer outline-none"
          >
            <div className="glass-hover rounded-3xl p-8 h-full relative overflow-hidden transition-all duration-500 cursor-pointer">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${p.color}15, transparent 70%)`,
                }}
              />

              {/* Top accent line with animation */}
              <motion.div
                className="absolute top-0 left-0 h-1 rounded-t-3xl"
                style={{ backgroundColor: p.color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8 }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${p.color}20`,
                          boxShadow: `0 0 20px ${p.color}30`,
                        }}
                      >
                        <Code2 size={24} style={{ color: p.color }} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="relative z-20 w-10 h-10 flex items-center justify-center rounded-full glass-hover text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {p.tags.map((t, idx) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 rounded-xl bg-secondary/80 text-sm font-medium border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
