'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePortfolio } from '@/src/context/PortfolioContext'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import React from 'react'

interface PageProps {
    params: {
        id: string
    }
}

export default function ProjectPage({ params }: PageProps) {
    const { projects } = usePortfolio()
    const [project, setProject] = useState<any>(null)

    useEffect(() => {
        const projectId = parseInt(params.id)
        const foundProject = projects.find(p => p.id === projectId)
        setProject(foundProject)
    }, [params.id, projects])

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
                    href="/#projetos" 
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors py-2  rounded-full "
                >
                    <FaArrowLeft className="mr-2" />
                    Voltar
                </Link>

                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <div className="relative aspect-video">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {project.title}
                            </h1>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Ver no GitHub"
                                    >
                                        <FaGithub className="w-6 h-6" />
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Ver Demo"
                                    >
                                        <FaExternalLinkAlt className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <p className="text-gray-300 mb-8">
                            {project.description}
                        </p>

                        {project.technologies && (
                            <div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Tecnologias Utilizadas
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}