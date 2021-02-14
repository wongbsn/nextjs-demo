import Head from "next/head";
import Image from "next/image";
import Link from "@components/Link";
import SEO from "@components/SEO";
import { Main, Section, ImageItem } from "./components";

export default function PhotoDetailPage({
  data: { id, photographer, description },
}) {
  return (
    <Main>
      <SEO
        pageTitle={`Next.js Demo | Photo ${id}`}
        description="Next.js Images Demo"
        previewImage={`/photos/${id}.jpg`}
      />
      <Section>
        <Section.Content>
          <ImageItem>
            <ImageItem.ImageContainer>
              <Image
                src={`/photos/${id}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </ImageItem.ImageContainer>
            <ImageItem.TextContainer>
              <h1>Photo {id}</h1>
              <ImageItem.Label>Taken by: {photographer}</ImageItem.Label>
              <p>{description}</p>
              <Link href={`/ssr/photos?id=${id}`}>Back to Photos</Link>
            </ImageItem.TextContainer>
          </ImageItem>
        </Section.Content>
      </Section>
    </Main>
  );
}
