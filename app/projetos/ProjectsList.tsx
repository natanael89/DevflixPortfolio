'use client'

import Link from 'next/link'
import { usePortfolio } from '@/src/context/PortfolioContext'
import ProjectCard from '@/src/components/ProjectCard'
import { FaArrowLeft } from 'react-icons/fa'

export default function ProjectsList() {
    const { projects } = usePortfolio()

    // Get the top 10 most recent projects
    const featuredProjects = projects.slice(0, 10)
    // Get the remaining projects
    const otherProjects = projects.slice(10)

    return (
        <div className="container mx-auto px-4 py-8">
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
            >
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                Voltar para Home
            </Link>

            {/* Featured Projects Section */}
            <section className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Projetos em Destaque
                </h1>
                <p className="text-gray-400 mb-8 text-lg">
                    Meus projetos mais recentes e relevantes
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            featured={true}
                        />
                    ))}
                </div>
            </section>

            {/* Other Projects Section */}
            {otherProjects.length > 0 && (
                <section>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Outros Projetos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project) => (
                            <ProjectCard 
                                key={project.id} 
                                project={project}
                            />
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}
