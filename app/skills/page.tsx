'use client'
import Link from 'next/link'
import SkillsSection from '@/src/components/SkillsSection'

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
            <div className="container mx-auto">
                {/* Back button */}
                <Link 
                    href="/" 
                    className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors"
                >
                   
                    Voltar para Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
                    Minhas Habilidades
                </h1>

                <SkillsSection />
            </div>
        </main>
    )
}
