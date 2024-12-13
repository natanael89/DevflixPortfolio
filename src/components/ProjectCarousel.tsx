'use client'
import { useState, useEffect } from 'react'
import { usePortfolio } from '@/src/context/PortfolioContext'
import { Project } from '../context/PortfolioContext'
import ProjectCard from './ProjectCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface ProjectCardProps {
    project: Project
    featured?: boolean
}

function ProjectCarousel() {
    const { projects } = usePortfolio()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1) // Mobile: 1 item
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2) // Tablet: 2 items
            } else {
                setItemsPerPage(3) // Desktop: 3 items
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => {
            const newIndex = prev - itemsPerPage
            return newIndex >= 0 ? newIndex : projects.length - itemsPerPage
        })
    }

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((prev) => {
            const newIndex = prev + itemsPerPage
            return newIndex < projects.length ? newIndex : 0
        })
    }

    if (!projects.length) {
        return (
            <div className="text-center py-8">
                <p className="text-gray-400">Nenhum projeto disponível no momento.</p>
            </div>
        )
    }

    const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerPage)
    const totalPages = Math.ceil(projects.length / itemsPerPage)
    const currentPage = Math.floor(currentIndex / itemsPerPage)

    return (
        <div className="relative px-4 max-w-7xl mx-auto">
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="w-full">
                            <ProjectCard project={project} featured />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
                <button
                    onClick={handlePrevious}
                    className="z-10 p-3 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors pointer-events-auto"
                    aria-label="Previous projects"
                >
                    <FaChevronLeft size={24} />
                </button>
                <button
                    onClick={handleNext}
                    className="z-10 p-3 rounded-full bg-gray-800/70 text-white hover:bg-gray-700 transition-colors pointer-events-auto"
                    aria-label="Next projects"
                >
                    <FaChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-6">
                <div className="flex justify-center space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * itemsPerPage)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentPage ? 'bg-red-500' : 'bg-gray-400'
                            }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCarousel
