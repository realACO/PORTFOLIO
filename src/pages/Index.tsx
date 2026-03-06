import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CodingProfiles from "@/components/CodingProfiles";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubStats from "@/components/GitHubStats";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen grid-bg relative">
      <Navbar />
      <HeroSection />
      <CodingProfiles />
      <br />
      <br />
      <SkillsSection />
      <br />
      <br />
      <ProjectsSection />
      <br />
      <br />
      <GitHubStats />
      <br />
      <br />
      <JourneySection />
      <br />
      <br />
      <ContactSection />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Index;
