import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  
  let result = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
  result = await result.json()

  return {
    paths: result.data.map(doc => ({
      params: { id: doc.documentId },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${params.id}`);
  const postData = await res.json();

  return {
    props: {
      postData: postData.data
    },
  };
};

export default function Post({ postData }) {
  console.log(postData)
  console.log(postData.draft)
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <h1>{postData.title}</h1>
      <p>{postData.description}</p>
      <div className={styles.post}>
      </div>
    </>
  );
}