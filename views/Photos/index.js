import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import queryString from "query-string";

import Link from "@components/Link";
import SEO from "@components/SEO";
import { Hero, Main, Section } from "./components";

const renderTypes = ["csr", "ssg", "ssr"];

export default function PhotosView({ data }) {
  const router = useRouter();
  const renderType = router.pathname.split("/")[1];
  const id = router.query.id
    ? ((parseInt(router.query.id) - 1) % 20) + 1
    : null;
  const heroImage = id ? `${id}.jpg` : "hero.jpg";
  const search = id ? `?${queryString.stringify(router.query)}` : "";
  const previewImage = id ? `/api/image${search}` : heroImage;

  if (!data) {
    return null;
  }

  return (
    <Main>
      <SEO
        pageTitle="Next.js Demo | Photos"
        description="Next.js Images Demo"
        previewImage={previewImage}
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
          <h2>Render Method</h2>
          <p>
            This pages is rendered using the{" "}
            <strong>{renderType.toUpperCase()}</strong> method. Use one of the
            following links to see one of the other render methods:
          </p>
          <nav>
            <ul>
              {renderTypes.map((type) => (
                <li key={type}>
                  <Link
                    href={`/${type}/photos${
                      router.query.id ? `?id=${router.query.id}` : ""
                    }`}
                    disabled={type === renderType}
                  >
                    {type.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Section.Content>
      </Section>
      <Section>
        <Section.ImageContent>
          {data.map(({ id }) => {
            const photoImage = `/photos/${((parseInt(id) - 1) % 20) + 1}.jpg`;

            return (
              <Link key={id} href={`/${renderType}/photos/${id}`}>
                <Image
                  alt=""
                  src={photoImage}
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
