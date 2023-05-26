import Head from 'next/head'

export default function Layout({ children, title }) {
  const t = `${title} - Aprende +`

  return (
    <article style={{ position: 'relative' }}>
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta property="og:title" content="" />
          </Head>
        )}
        {children}
      </>
    </article>
  )
}
