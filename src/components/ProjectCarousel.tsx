'use client'

import { useState, useEffect } from 'react'
import { usePortfolio } from '@/src/context/PortfolioContext'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ProjectCarousel = () => {
    const { projects } = usePortfolio()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
    }

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
    }

    if (!projects.length) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-400">Nenhum projeto disponível no momento.</p>
            </div>
        )
    }

    if (isMobile) {
        return (
            <div className="relative px-4">
                <div className="overflow-hidden">
                    <div className="transition-transform duration-300 ease-in-out">
                        <ProjectCard project={projects[currentIndex]} />
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between">
                    <button
                        onClick={handlePrevious}
                        className="z-10 p-3 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors"
                        aria-label="Previous project"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="z-10 p-3 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors"
                        aria-label="Next project"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-0 right-0">
                    <div className="flex justify-center space-x-2">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(index)
                                }}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-red-500' : 'bg-gray-400'
                                }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    const featuredProjects = projects.slice(0, 3)

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {featuredProjects.map((project) => (
                    <div key={project.id} className="w-full">
                        <ProjectCard project={project} featured={true} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCarousel
