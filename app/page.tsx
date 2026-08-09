import { Bio } from "@/components/home/bio";
import { Experience } from "@/components/home/experience";
import { TechStack } from "@/components/home/tech-stack";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ContactSection } from "@/components/home/contact-section";
import { ScrollToHash } from "@/components/scroll-to-hash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <Bio />
      <Experience />
      <TechStack />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
