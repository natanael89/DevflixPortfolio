'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePortfolio } from '@/src/context/PortfolioContext'

interface Project {
    id: number
    title: string
    description: string
    image: string
    github?: string
    demo?: string
    technologies?: string[]
}

const Hero = () => {
    const { projects } = usePortfolio()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        if (projects.length === 0) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === projects.length - 1 ? 0 : prevIndex + 1
            )
        }, 9000)

        return () => clearInterval(interval)
    }, [projects.length])

    return (
        <div className="relative w-full h-screen">
            {/* Background Images */}
            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        className="object-cover"
                        sizes="100vw"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black opacity-50" />
                </div>
            ))}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
                <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Natanael Carvalho dos Santos
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        Desenvolvedor Full Stack
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={projects.length > 0 ? `/project/${projects[currentImageIndex].id}` : '#'}
                            className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                        >
                            Ver Projeto Atual
                        </Link>
                        <Link
                            href="/projetos"
                            className="px-8 py-3 border text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
                        >
                            Ver Todos Projetos
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex 
                                ? 'bg-white w-4' 
                                : 'bg-gray-400 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero