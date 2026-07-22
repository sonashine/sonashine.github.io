import { ThemeToggle } from "../components/ThemeToggle";
import {Navbar} from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    
    <ThemeToggle />

    <Navbar />

    <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
    </main>
    <Footer />
    </div>
  );
};