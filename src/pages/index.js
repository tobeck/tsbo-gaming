import Head from 'next/head'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons'

import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>TSBO Gaming</title>
      </Head>
      <div className="grid place-items-center min-h-screen">
        <div className="grid xs:grid-cols-2">
          <div className="xs:col-span-2 bg-hero_bg_image h-[300px]">
            <h1 className="text-4xl font-extrabold text-golden">TSBO Gaming</h1>
            <h2 className="text-golden">Strategy and Survival Gaming</h2>
          </div>
          <div className="bg-parchment_bg text-text_on_parchment">
            <h3 className="text-xl">Featured post</h3>
            <p>{allPostsData[0].title}</p>
            <small>
              <Date dateString={allPostsData[0].date.toString()} />
            </small>
          </div>
          <div>
            <div className="grid xs:grid-cols-3 bg-gradient-to-r from-brown_grad_from to-brown_grad_to text-text_on_brown">
              <h3 className="text-xl">Let&apos;s Play</h3>
              <h3 className="text-xl">Reviews</h3>
              <h3 className="text-xl">Tutorials</h3>
              <p>Let&apos;s play some games!</p>
              <p>Reviews for games</p>
              <ul>
                <li>Civilization 6</li>
                <li>Old World</li>
                <li>Distant World 2</li>
              </ul>
            </div>
            <div className="grid xs:grid-cols-2 bg-brown_bg text-text_on_brown">
              <Link
                className="place-items-center fa-5x"
                href="https://www.youtube.com/@TSBOGaming"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
              <Link
                className="place-items-center fa-5x"
                href="https://www.twitch.tv/tsbogaming"
              >
                <FontAwesomeIcon icon={faTwitch} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
