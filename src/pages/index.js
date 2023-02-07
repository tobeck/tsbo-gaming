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
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-2">
          <div className="col-span-2 xs:grid xs:grid-col-2 bg-yellow-200">
            <h1 className="text-4xl font-extrabold">TSBO</h1>
            <h2 className="text-xl">Strategy Gaming</h2>
          </div>
          <div className="h-16 bg-blue-500"></div>
          <div className="h-16 bg-blue-500"></div>
        </div>
        <div>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
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
    </>
  )
}
