import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
  const result = await resulting.json();
  return {
    props: {
      result: result.data,
    },
  };
};

export default function Home({ result }) {
  return (
    <>
      <Head>
        <title>thisBlog</title>
        <meta title="description" content="This is an example of our blog" />
      </Head>
      <div className={styles.container}>
        <h1>Blog Post Links:</h1>
        <div className={styles.card}>
          {result.map(result => {
            return (
              <div className={styles.flexing} key={result.id}>
                <Link href={`/blog/${result.documentId}`}>
                  <h2>{result.title}</h2>
                  <div>
                    <p>{result.description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}