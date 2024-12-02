'use client'

import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { usePortfolio } from '@/src/context/PortfolioContext'
import ProjectCard from '@/src/components/ProjectCard'

export default function ProjectsList() {
    const { projects } = usePortfolio()

    return (
        <div className="container mx-auto">
            <Link 
                href="/" 
                className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
            >
                <FaArrowLeft className="mr-2" />
                Voltar para Home
            </Link>

            <section>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    Projetos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </div>
    )
}
