import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Head from "next/head";
import Image from "next/image";
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
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${params.id}?populate=*`);
  const postData = await res.json();

  console.log(postData.data)

  return {
    props: {
      postData: postData.data,
      fileUrl: process.env.FILE_URL || ''
    },
  };
};

export default function Post({ postData, fileUrl }) {
  
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
          src={fileUrl + postData.cover.url}
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