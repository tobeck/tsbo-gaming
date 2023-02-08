import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="grid place-items-center p-4 gap-2">
        <h1 className="text-2xl">{postData.title}</h1>
        <small>
          <Date dateString={postData.date} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </>
  )
}
