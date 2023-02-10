import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="TSBO Gaming"
        description="TSBO Gaming is a strategy and survival game blog and tutorial site."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://tsbogaming.com/',
          siteName: 'tsbogaming',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
