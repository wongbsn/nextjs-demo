import React from "react";
import Head from "next/head";

const SITE_URL = `https://nextjs-demo-git-master.wongbsn.vercel.app`;

const SEO = ({ pageTitle, description, previewImage, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:url" content={SITE_URL} key="ogurl" />
        {previewImage && (
          <meta property="og:image" content={previewImage} key="ogimage" />
        )}
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twcard"
        />
        <meta property="og:site_name" content="Next.js Demo" key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      {children}
    </>
  );
};

export default SEO;
