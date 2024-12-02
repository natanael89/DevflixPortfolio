import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export default function SEO({
  title = 'DevFlix Portfolio',
  description = 'Portfolio pessoal desenvolvido com Next.js, React, TypeScript e TailwindCSS. Desenvolvedor Full Stack com foco em criar soluções web modernas e responsivas.',
  image = '/og-image.jpg', // Adicione uma imagem OG na pasta public
  url = 'https://seu-portfolio.vercel.app', // Atualize com seu domínio
}: SEOProps) {
  const seoTitle = `${title} | DevFlix Portfolio`

  return (
    <Head>
      {/* Metadados Básicos */}
      <title>{seoTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Outros metadados importantes */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
      <link rel="canonical" href={url} />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  )
}
