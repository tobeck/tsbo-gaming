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

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>TSBO Blog</title>
      </Head>
      <div>
        <div className="grid place-items-center">
          <h2>Blog</h2>
          <div>
            <ul className="p-4 max-w-5xl gap-2 grid xs:grid-cols-2">
              {allPostsData.map(({ id, date, title }) => (
                <li key="{title}">
                  <h1>{title}</h1>
                  <br />
                  <small>
                    <Date dateString={date} />
                  </small>
                  <br />
                  <Link href={`/posts/${id}`}>Read Post</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
