import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ExperienceSection from "../sections/ExperienceSection";
import CertificationsSection from "../sections/CertificationsSection";
import GithubSection from "../sections/GithubSection";
import ResumeSection from "../sections/ResumeSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import FooterSection from "../sections/FooterSection";
import BackToTopButton from "../components/BackToTopButton";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <GithubSection />
      <ResumeSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <BackToTopButton />
    </>
  );
}
