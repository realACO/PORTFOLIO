import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MessageCircle } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "ashishoomman@gmail.com",
    href: "mailto:ashishoomman@gmail.com",
    color: "#ea4335",
  },
  {
    icon: Github,
    label: "realACO",
    href: "https://github.com/realACO",
    color: "#ffffff",
  },
  {
    icon: Linkedin,
    label: "Ashish Chacko Oomman",
    href: "https://linkedin.com/in/ashish-chacko-oomman-213165372",
    color: "#0077b5",
  },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:ashishoomman@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 blur-[150px] rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Connect With <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have an exciting project or idea? Let's connect and create something
            extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="glass-hover rounded-3xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, #8b5cf615, transparent 70%)",
                }}
              />

              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-primary to-accent" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary/70 focus:bg-secondary/70 focus:outline-none transition-all text-black placeholder:text-black/50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary/70 focus:bg-secondary/70 focus:outline-none transition-all text-black placeholder:text-black/50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50 focus:border-primary/70 focus:bg-secondary/70 focus:outline-none transition-all text-black placeholder:text-black/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const to = "ashishchackooomman@gmail.com";

                    const subject = encodeURIComponent(
                      `Portfolio Contact from ${form.name}`,
                    );

                    const body = encodeURIComponent(
                      `Hi Ashish,

I am ${form.name}.

I would like to discuss the following idea/project:

${form.message}

You can reach me at: ${form.email}`,
                    );

                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
                      "_blank",
                    );
                  }}
                  type="button"
                  className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg flex items-center justify-center gap-3 relative overflow-hidden group/btn"
                >
                  <motion.div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity" />
                  <span className="gradient-text">Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, scale: 1.03 }}
                className="glass-hover rounded-3xl p-6 flex items-center gap-5 group relative overflow-hidden"
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 0% 50%, ${s.color}15, transparent 70%)`,
                  }}
                />

                {/* Side accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                  style={{ backgroundColor: s.color }}
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                />

                <div className="relative z-10 flex items-center gap-5 w-full">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${s.color}20`,
                      boxShadow: `0 0 20px ${s.color}30`,
                    }}
                  >
                    <s.icon size={26} style={{ color: s.color }} />
                  </motion.div>
                  <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                    {s.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
