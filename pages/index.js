import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getSortedFirstData } from '../lib/first';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const allFirstData = getSortedFirstData();
  return {
    props: {
      allPostsData,
      allFirstData,
    },
  };
}

export default function Home({ allPostsData, allFirstData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.portContainer}`}>
        <div>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <p>Ut enim ad minim ut labore et dolore.</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <Image
                priority
                src={'/images/handonhead.jpg'}
                className={''}
                height={140}
                width={115}
                alt=""
              />
          </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, image }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            <Link href={`/posts/${id}`}>
            <Image
                priority
                src={image}
                className={''}
                height={600}
                width={600}
                alt=""
              />
            </Link>
          </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Test</h2>
        <ul className={utilStyles.list}>
          {allFirstData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/first/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

      <Link href={`/test/test`}>Test Page</Link>
    </Layout>
  );
}