import { motion } from "framer-motion";
import { Compass, Code, Trophy, GitBranch } from "lucide-react";

const steps = [
  {
    title: "Learning Full Stack Development",
    desc: "Deep diving into React, Node.js, databases, and modern web technologies.",
    icon: Code,
    color: "#8b5cf6",
  },
  {
    title: "Competitive Programming Practice",
    desc: "Solving algorithmic challenges on CodeChef, Codeforces, and LeetCode.",
    icon: Trophy,
    color: "#ec4899",
  },
  {
    title: "Building Developer Tools",
    desc: "Creating tools that improve developer productivity and workflows.",
    icon: Compass,
    color: "#14b8a6",
  },
  {
    title: "Open Source Contributions",
    desc: "Contributing to the open source community and collaborating with developers worldwide.",
    icon: GitBranch,
    color: "#f59e0b",
  },
];

const JourneySection = () => (
  <section id="journey" className="py-32 relative overflow-hidden">
    {/* Background decoration */}
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full"
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-hover mb-6"
        >
          <Compass size={16} className="text-accent" />
          <span className="text-sm font-mono-code">Current Path</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A continuous adventure of learning, building, and growing as a
          developer
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="flex gap-8 group"
          >
            {/* Vertical Timeline */}
            <div className="flex flex-col items-center relative">
              {/* Timeline dot with icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 relative z-10"
                style={{
                  backgroundColor: `${s.color}20`,
                  boxShadow: `0 0 30px ${s.color}30`,
                }}
              >
                <s.icon size={28} style={{ color: s.color }} />
              </motion.div>

              {/* Animated connecting line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.5, duration: 0.8 }}
                  className="w-[2px] flex-1 mt-4 relative"
                  style={{
                    background: `linear-gradient(to bottom, ${s.color}60, transparent)`,
                  }}
                />
              )}
            </div>

            {/* Content card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-hover rounded-3xl p-8 mb-12 flex-1 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 0% 50%, ${s.color}15, transparent 70%)`,
                }}
              />

              {/* Side accent bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                style={{ backgroundColor: s.color }}
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.4, duration: 0.6 }}
              />

              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JourneySection;
