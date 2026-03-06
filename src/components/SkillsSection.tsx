import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
    color: "#8b5cf6",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Backend / Database",
    icon: Database,
    skills: ["Firebase", "MySQL", "NodeJS", "MongoDB"],
    color: "#14b8a6",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vite"],
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-hover mb-6"
        >
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm font-mono-code">Tech Stack</span>
        </motion.div> */}

        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          TECHNICAL <span className="gradient-text">STACK</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A curated collection of technologies I leverage to build exceptional
          digital experiences
        </p>
        <br />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className="glass-hover rounded-3xl p-6 h-full relative overflow-hidden transition-all duration-500">
              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${cat.color}20, transparent 70%)`,
                }}
              />

              {/* Top accent gradient bar */}
              <motion.div
                className={`absolute top-0 left-0 h-1 rounded-t-3xl bg-gradient-to-r ${cat.gradient}`}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.15 + 0.3, duration: 0.8 }}
              />

              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center relative"
                    style={{
                      backgroundColor: `${cat.color}20`,
                      boxShadow: `0 0 30px ${cat.color}30`,
                    }}
                  >
                    <cat.icon size={26} style={{ color: cat.color }} />
                  </motion.div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills with stagger animation */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: ci * 0.15 + 0.5 + idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.15,
                        y: -3,
                        backgroundColor: `${cat.color}20`,
                      }}
                      className="px-4 py-2 rounded-xl bg-secondary/80 text-sm font-medium border border-border/50 hover:border-primary/50 transition-all cursor-default"
                      style={{
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      {skill}
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

export default SkillsSection;
