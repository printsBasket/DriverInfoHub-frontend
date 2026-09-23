import Head from 'next/head'

export default function Seo({ title, description, url, image }: { title?: string; description?: string; url?: string; image?: string }){
  const metaTitle = title || 'Driver Info Hub'
  const metaDesc = description || 'Download drivers and read guides.'
  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  )
}
