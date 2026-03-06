import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";

const profiles = [
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/realaco",
    color: "#5B4638",
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/realaco",
    color: "#1F8ACB",
  },
  {
    name: "LeetCode",
    url: "https://www.leetcode.com/a_c_o",
    color: "#FFA116",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/csh23062",
    color: "#00EA64",
  },
  {
    name: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/realaco",
    color: "#2F8D46",
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/realACO",
    color: "#2196F3",
  },
  {
    name: "Coding Ninjas",
    url: "https://www.naukri.com/code360/profile/realACO",
    color: "#F96D00",
  },
  {
    name: "Codolio",
    url: "https://codolio.com/profile/realACO",
    color: "#8B5CF6",
  },
];

const CodingProfiles = () => (
  <section id="profiles" className="py-32 relative overflow-hidden">
    {/* Enhanced Background */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 12, repeat: Infinity }}
      className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          Coding <span className="gradient-text">Platforms</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Actively solving problems and competing across multiple coding
          platforms
        </p>
        <br />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -10, rotateY: 5, scale: 1.03 }}
            className="relative group"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="glass-hover rounded-3xl p-6 h-full relative overflow-hidden transition-all duration-500">
              {/* Animated background glow with pulse effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${p.color}25, transparent 70%)`,
                  filter: "blur(25px)",
                }}
              />

              {/* Top accent bar with gradient */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, ${p.color}80)`,
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${p.color}20`,
                      boxShadow: `0 0 30px ${p.color}40`,
                    }}
                  >
                    <Trophy size={24} style={{ color: p.color }} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.div>
                </div>

                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
