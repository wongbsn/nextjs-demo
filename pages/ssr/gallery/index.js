import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { css } from "styled-components";

import Photo from "@components/Photo";
import Link from "@components/Link";
import { Hero, Main, Section } from "@components/Pages/gallery";

export default function GalleryPage() {
  const router = useRouter();

  return (
    <Main>
      <Head>
        <title>Next.js Demo | Gallery</title>
      </Head>
      <Hero>
        <Hero.Content>
          <h1>Image Demo</h1>
        </Hero.Content>
        <Hero.Image layoutId={`photo-${router.query.id}`}>
          <Image
            src={
              router.query.id ? `/gallery/${router.query.id}.jpg` : "/hero.jpg"
            }
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
          />
        </Hero.Image>
      </Hero>
      <Section>
        <Section.Content>
          <h2>Summary</h2>
          <p>
            Using the Next.js Image component, images are optimized by default.
            Next.js takes care of the complexities around resizing, optimizing,
            and serving the most optimized version of your image based on the
            type of browser and specific viewports.
          </p>
          <p>
            <b>Read more about it here:</b>{" "}
            <a
              href="https://nextjs.org/docs/basic-features/image-optimization"
              target="_blank"
            >
              https://nextjs.org/docs/basic-features/image-optimization
            </a>
          </p>
        </Section.Content>
      </Section>
      <Section>
        <Section.ImageContent>
          {Array.from({ length: 20 }).map((_, i) => {
            const id = i + 1;

            return (
              <Link key={id} href={`/ssr/gallery/${id}`}>
                <Photo src={`/gallery/${id}.jpg`} width={250} height={250} />
              </Link>
            );
          })}
        </Section.ImageContent>
      </Section>
    </Main>
  );
}
