import type { Metadata, Viewport } from 'next'
import ProjectsList from './ProjectsList'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Explore meus projetos de desenvolvimento web, incluindo aplicações React, Next.js e muito mais.',
  openGraph: {
    title: 'Projetos | DevFlix Portfolio',
    description: 'Explore meus projetos de desenvolvimento web, incluindo aplicações React, Next.js e muito mais.',
  }
}

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-gray-900 pt-24 pb-16 px-4">
      <ProjectsList />
    </main>
  )
}
