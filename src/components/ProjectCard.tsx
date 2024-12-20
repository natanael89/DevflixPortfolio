'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../context/PortfolioContext'

interface ProjectCardProps {
    project: Project
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
            onClick={() => setIsHovered(false)}
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
                isHovered ? 'opacity-100' : 'md:opacity-0 opacity-100'
            }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                        {project.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}
