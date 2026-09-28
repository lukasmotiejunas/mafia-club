import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { TeamsPreview } from "@/components/home/TeamsPreview";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <TeamsPreview />
      <UpcomingEvents />
      <CTASection />
    </>
  );
}
