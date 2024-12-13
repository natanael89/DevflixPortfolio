import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center space-x-4">
                            <Link href="https://github.com/natanael89" target="_blank" 
                                className="hover:text-white transition-colors">
                                <FaGithub className="text-2xl" />
                            </Link>
                            <Link href="https://linkedin.com/in/natanael-santos-879568b7/" target="_blank"
                                className="hover:text-white transition-colors">
                                <FaLinkedin className="text-2xl" />
                            </Link>
                            <Link href="mailto:natanaelc7@gmail.com"
                                className="hover:text-white transition-colors">
                                <FaEnvelope className="text-2xl" />
                            </Link>
                        </div>
                
                <div className="mt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Natanael Carvalho dos Santos. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer