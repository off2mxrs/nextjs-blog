import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/first';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function FirstPost({ postData }) {
  return (
    <Layout>
    <Head>
    <title>{postData.title}</title>
    </Head>
    <h1>{postData.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}