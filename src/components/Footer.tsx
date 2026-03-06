import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-1 gradient-text">
        ASHISH CHACKO OOMMAN
      </h3>
      {/* <p className="text-muted-foreground text-sm mb-6">
        Full Stack Developer & Competitive Programmer
      </p> */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/realACO"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/ashish-chacko-oomman-213165372"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:ashishoomman@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} ASHISH CHACKO OOMMAN. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
