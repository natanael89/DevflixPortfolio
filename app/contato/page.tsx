'use client'
import Link from 'next/link'
import { FaArrowLeft, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function ContatoPage() {
    return (
        <main className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Back button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    Voltar para Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Entre em Contato
                </h1>

                <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
                    <div className="flex flex-col items-center space-y-8">
                        {/* Social Links */}
                        <div className="flex justify-center space-x-8">
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={32} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={32} />
                            </a>
                            <a
                                href="mailto:your.email@example.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaEnvelope size={32} />
                            </a>
                        </div>

                        {/* Contact Form */}
                        <form className="w-full max-w-lg space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-300 mb-2">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-300 mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
