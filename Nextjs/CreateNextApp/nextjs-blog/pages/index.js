import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps(context) {
  const postsData = getSortedPostsData();
  return {
    props: {postsData}, // will be passed to the page component as props
  }
}


export default function Home({ postsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          [Hello, I'm Jon. I'm a sofware engineer and writter. You can contact
          me on <a href="">Twitter</a>]
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>{console.log(postsData)}</ul>
      </section>
    </Layout>
  );
}
