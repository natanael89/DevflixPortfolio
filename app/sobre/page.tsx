// Sobre mim
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description: 'Conheça mais sobre minha jornada como desenvolvedor Full Stack, experiências e objetivos profissionais.',
  openGraph: {
    title: 'Sobre Mim | DevFlix Portfolio',
    description: 'Conheça mais sobre minha jornada como desenvolvedor Full Stack, experiências e objetivos profissionais.',
  }
}

export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Sobre Mim</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Quem Sou Eu</h2>
          <p className="text-gray-300 leading-relaxed">
            Olá! Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras.
            Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam
            por trás das telas, e desde então, venho me dedicando a aprender e evoluir constantemente
            nesta área fascinante.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Minha Jornada</h2>
          <p className="text-gray-300 leading-relaxed">
            Ao longo dos anos, tenho me especializado em desenvolvimento web, trabalhando com diversas
            tecnologias modernas como React, Next.js, Node.js e TypeScript. Minha experiência abrange
            desde o desenvolvimento de interfaces responsivas até a implementação de APIs robustas
            e escaláveis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Filosofia de Trabalho</h2>
          <p className="text-gray-300 leading-relaxed">
            Acredito que o desenvolvimento de software vai além de apenas escrever código. É sobre
            resolver problemas reais e criar experiências que impactam positivamente a vida das pessoas.
            Busco sempre manter-me atualizado com as melhores práticas e novas tecnologias, sem perder
            o foco na qualidade e na experiência do usuário.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Objetivos Profissionais</h2>
          <p className="text-gray-300 leading-relaxed">
            Meu objetivo é continuar crescendo como desenvolvedor, contribuindo para projetos
            desafiadores e inovadores. Estou sempre em busca de oportunidades para aprender novas
            tecnologias e metodologias, compartilhar conhecimento com a comunidade e criar soluções
            que façam a diferença.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Fora do Trabalho</h2>
          <p className="text-gray-300 leading-relaxed">
            Quando não estou codando, gosto de me manter atualizado sobre novas tecnologias,
            participar de comunidades de desenvolvimento e contribuir para projetos open source.
            Acredito que o equilíbrio entre vida profissional e pessoal é fundamental para
            manter a criatividade e a produtividade.
          </p>
        </section>
      </div>
    </div>
  );
}
