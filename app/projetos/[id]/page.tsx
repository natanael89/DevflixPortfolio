'use client'

import Image from 'next/image'
import { usePortfolio } from '@/src/context/PortfolioContext'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProjectDetailsPage() {
    const { projects } = usePortfolio()
    const params = useParams()
    const id = typeof params.id === 'string' ? parseInt(params.id) : null

    const project = projects.find(p => p.id === id)

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Projeto não encontrado.</p>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
                <Link 
                    href="/projetos" 
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors py-2  rounded-full "
                >
                    Voltar
                </Link>

                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1920}
                        height={1080}
                        className="w-full h-auto"
                    />
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                    <p className="text-gray-400">{project.description}</p>
                </div>
            </div>
        </main>
    )
}