import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Link from "@components/Link";
import SEO from "@components/SEO";
import { Hero, Main, Section } from "./components";

export default function PhotosView({ data }) {
  const router = useRouter();
  const renderType = router.pathname.split("/")[1];
  const heroImage = router.query.id
    ? `${((parseInt(router.query.id) - 1) % 20) + 1}.jpg`
    : "hero.jpg";

  if (!data) {
    return null;
  }

  return (
    <Main>
      <SEO
        pageTitle="Next.js Demo | Photos"
        description="Next.js Images Demo"
        previewImage={`/photos/social-${heroImage}`}
      />
      <Hero>
        <Hero.Content>
          <h1>Image Demo</h1>
        </Hero.Content>
        <Hero.Image>
          <Image
            src={`/photos/${heroImage}`}
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
          {data.map(({ id }) => {
            return (
              <Link key={id} href={`/${renderType}/photos/${id}`}>
                <Image
                  alt=""
                  src={`/photos/${((parseInt(id) - 1) % 20) + 1}.jpg`}
                  layout="fixed"
                  width={250}
                  height={250}
                />
              </Link>
            );
          })}
        </Section.ImageContent>
      </Section>
    </Main>
  );
}
