import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import ServiceSection from "./components/sections/ServiceSection";
import SkillsSection from "./components/sections/SkillsSection";
import TimelineSection from "./components/sections/TimelineSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden">
      <Navbar />
      <Hero />
      <ServiceSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
