import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`);
  const result = await resulting.json();

  console.log(result)

  return {
    props: {
      result: result.data,
      fileUrl: process.env.FILE_URL
    },
  };
};

export default function Home({ result, fileUrl }) {
  return (
    <>
      <Head>
        <title>thisBlog</title>
        <meta title="description" content="This is an example of our blog" />
      </Head>
      <div className={styles.container}>
        <h1>Blog Posts</h1>

        <div className={styles.card}>
          {result.map(post => {
            return (
              <div className={styles.flexing} key={post.id}>
                <Link href={`/blog/${post.documentId}`}>
                  <Image
                    src={fileUrl + post.cover.url}
                    alt="blog-post"
                    priority={true}
                    className="rounded-full"
                    width={300}
                    height={300}
                  />
                  <h2>{post.title}</h2>
                  <div>
                    <p>{post.description}</p>
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