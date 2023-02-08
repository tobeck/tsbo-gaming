import Head from 'next/head'
import Link from 'next/link'
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
        <div className="p-4 max-w-5xl gap-2 grid xs:grid-cols-2">
          <div className="xs:col-span-2">
            <h1 className="text-4xl font-extrabold">TSBO</h1>
            <h2 className="text-xl">Strategy Gaming</h2>
          </div>
          <div>
            <h3 className="text-xl">Featured post</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div>
            <div className="grid xs:grid-cols-3">
              <h3 className="text-xl">Let's Play</h3>
              <h3 className="text-xl">Reviews</h3>
              <h3 className="text-xl">Tutorials</h3>
              <p>Let's play some games!</p>
              <p>Reviews for games</p>
              <ul>
                <li>Civilization 6</li>
                <li>Old World</li>
                <li>Distant World 2</li>
              </ul>
            </div>
            <div className="grid xs:grid-cols-2">
              <h3 className="text-xl">YouTube</h3>
              <h3 className="text-xl">Twitch</h3>
              <p>The YouTube Channel!</p>
              <p>The Twitch Channel!</p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid place-items-center">
            <h2>Blog</h2>
            <div>
              <ul className="p-4 max-w-5xl gap-2 grid xs:grid-cols-2">
                {allPostsData.map(({ id, date, title, slug }) => (
                  <li key="{title}">
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
