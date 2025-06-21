import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getImageSrc } from "../../utils";

export const getStaticPaths = async () => {
  
  let result = await fetch(`${process.env.STRAPI_URL}/blogs`);
  result = await result.json()

  return {
    paths: result.data.map(doc => ({
      params: { id: doc.documentId },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  
  const res = await fetch(`${process.env.STRAPI_URL}/blogs/${params.id}?populate=*`);
  const postData = await res.json();

  return {
    props: {
      postData: postData.data
    },
    revalidate: 60,
  };
};

export default function Post({ postData }) {
  
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <div className={styles.post}>
        <h1>{postData.title}</h1>
        <p>{postData.description}</p>
        
        <Image
          src={getImageSrc(postData.cover.url)}
          alt="blog-post"
          priority={true}
          className="rounded-full"
          width={600}
          height={400}
        />
        <BlocksRenderer content={postData.draft} />
      </div>
    </>
  );
}