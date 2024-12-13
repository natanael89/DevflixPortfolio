'use client'

import { usePortfolio } from '@/src/context/PortfolioContext'
import ProjectCard from '@/src/components/ProjectCard'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function ProjetosPage() {
    const { projects } = usePortfolio()

    if (!projects.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <p className="text-gray-400">Nenhum projeto disponível no momento.</p>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
            <div className="container mx-auto">
                {/* Back button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Meus Projetos
                </h1>

                {/* Featured Projects */}
                <section className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                        Projetos em Destaque
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} featured />
                        ))}
                    </div>
                </section>

                {/* All Projects */}
                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                        Todos os Projetos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.slice(3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
