'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleClick = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [isMenuOpen])

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-gray-900 shadow-lg fixed w-full z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-red-500">
                        DevFlix
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-gray-300"
                        aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-white hover:text-red-500 transition-colors">
                            Home
                        </Link>
                        <Link href="/projetos" className="text-white hover:text-red-500 transition-colors">
                            Projetos
                        </Link>
                        <Link href="/skills" className="text-white hover:text-red-500 transition-colors">
                            Habilidades
                        </Link>
                        <Link href="/sobre" className="text-white hover:text-red-500 transition-colors">
                            Sobre Mim
                        </Link>
                        <Link href="/contato" className="text-white hover:text-red-500 transition-colors">
                            Contato
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col space-y-4">
                        <Link 
                            href="/" 
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/projetos" 
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projetos
                        </Link>
                        <Link 
                            href="/skills" 
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Habilidades
                        </Link>
                        <Link 
                            href="/sobre" 
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sobre Mim
                        </Link>
                        <Link 
                            href="/contato" 
                            className="text-white hover:text-red-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contato
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header