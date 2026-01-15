import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/portfolio/hero';
import { ExperienceTimeline } from '@/components/portfolio/experience-timeline';
import { SkillsGraph } from '@/components/portfolio/skills-graph';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ExperienceTimeline />
        <SkillsGraph />
      </main>
      <Footer />
    </div>
  );
}
