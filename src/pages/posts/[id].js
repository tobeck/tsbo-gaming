import Head from 'next/head'
import { NextSeo } from 'next-seo'
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
      <NextSeo
        title={postData.title}
        description={postData.title}
        //canonical="www.example.com/next-seo-blog"
        openGraph={{
          type: 'article',
          article: {
            //publishedTime: '2022-06-21T23:04:13Z',
            //modifiedTime: '2022-01-21T18:04:43Z',
            //authors: [
            //  'https://www.example.com/authors/@firstnameA-lastnameA',
            //  'https://www.example.com/authors/@firstnameB-lastnameB',
            //],
            //tags: ['Tag A', 'Tag B', 'Tag C'],
          },
          //url: 'www.example.com/next-seo-blog',
          // images: {
          //   url: 'https://www.test.ie/images/cover.jpg',
          //   width: 850,
          //   height: 650,
          //   alt: 'Photo of text',
          // },
          site_name: 'TSBO Gaming',
        }}
      />
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
