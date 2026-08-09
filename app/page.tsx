import { Bio } from "@/components/home/bio";
import { Experience } from "@/components/home/experience";
import { TechStack } from "@/components/home/tech-stack";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ContactSection } from "@/components/home/contact-section";
import { ScrollProgressIndex } from "@/components/home/scroll-progress-index";
import { ScrollToHash } from "@/components/scroll-to-hash";

export default function Home() {
  return (
    <>
      <ScrollToHash />
      <ScrollProgressIndex />
      <Bio />
      <Experience />
      <TechStack />
      <FeaturedProjects />
      <ContactSection />
    </>
  );
}
