import Hero from "@/src/components/Hero";
import ProjectCarousel from "@/src/components/ProjectCarousel";
import SkillsSection from "@/src/components/SkillsSection";


export default function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <section id="projects" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Meus Projetos
          </h2>
          <ProjectCarousel />
        </section>
        <section id="/skills" className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Minhas Habilidades
          </h2>
          <SkillsSection />
        </section>
      </div>
    </div>
  );
}


