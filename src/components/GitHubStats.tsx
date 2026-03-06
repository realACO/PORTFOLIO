import { motion } from "framer-motion";
import { Github, Activity } from "lucide-react";

const widgets = [
  {
    title: "Contribution Streak",
    src: "https://streak-stats.demolab.com?user=realaco&theme=github-dark&hide_border=true",
  },
  {
    title: "GitHub Stats",
    src: "https://github-profile-summary-cards.vercel.app/api/cards/stats?username=realaco&theme=github_dark",
  },
  {
    title: "Contribution Graph",
    src: "https://github-readme-activity-graph.vercel.app/graph?username=realaco&theme=github-compact",
    wide: true,
  },
];

const GitHubStats = () => (
  <section id="github" className="py-32 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          GitHub <span className="gradient-text">Activity</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tracking my coding journey and contributions to the developer
          community
        </p>
        <br />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {widgets
          .filter((w) => !w.wide)
          .map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-hover rounded-3xl p-6 relative overflow-hidden transition-all duration-500">
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, #8b5cf620, transparent 70%)",
                  }}
                />

                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 h-1 rounded-t-3xl bg-gradient-to-r from-primary to-accent"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3, duration: 0.8 }}
                />

                <div className="relative z-10">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-muted-foreground">
                    <Github size={16} />
                    {w.title}
                  </h3>
                  <div className="rounded-2xl overflow-hidden bg-secondary/20 p-3">
                    <img
                      src={w.src}
                      alt={w.title}
                      className="w-full rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8">
        {widgets
          .filter((w) => w.wide)
          .map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative"
            >
              <div className="glass-hover rounded-3xl p-6 relative overflow-hidden transition-all duration-500">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, #ec489920, transparent 70%)",
                  }}
                />

                {/* Animated top border */}
                <motion.div
                  className="absolute top-0 left-0 h-1 rounded-t-3xl bg-gradient-to-r from-accent to-primary"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1 }}
                />

                <div className="relative z-10">
                  <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-muted-foreground">
                    <Activity size={16} />
                    {w.title}
                  </h3>
                  <div className="rounded-2xl overflow-hidden bg-secondary/20 p-3">
                    <img
                      src={w.src}
                      alt={w.title}
                      className="w-full rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  </section>
);

export default GitHubStats;
