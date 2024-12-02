'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Project } from '../context/PortfolioContext'

interface ProjectCardProps {
    project: Project & {
        github?: string
        demo?: string
    }
    featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <Link 
            href={`/projetos/${project.id}`} 
            className={`group relative w-full block overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 rounded-xl ${
                featured ? 'h-[400px]' : 'h-[300px]'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex gap-4">
                        {project.github && (
                            <Link
                                href={String(project.github)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-red-500 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    window.open(project.github, '_blank')
                                }}
                            >
                                <FaGithub size={24} />
                            </Link>
                        )}
                        {project.demo && (
                            <Link
                                href={String(project.demo)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-red-500 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    window.open(project.demo, '_blank')
                                }}
                            >
                                <FaExternalLinkAlt size={24} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    )
}
