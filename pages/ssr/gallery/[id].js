import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Photo from "@components/Photo";
import Link from "@components/Link";
import { Main, Section, ImageItem } from "@components/Pages/gallery-item";

export default function GalleryPhotoPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Main>
      <Head>
        <title>Next.js Demo | Photo {id}</title>
      </Head>
      <Section>
        <Section.Content>
          <ImageItem>
            <ImageItem.ImageContainer>
              <Image
                src={`/gallery/${id}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </ImageItem.ImageContainer>
            <ImageItem.TextContainer>
              <h1>Photo {id}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <Link href={`/ssr/gallery?id=${id}`}>Back to Gallery</Link>
            </ImageItem.TextContainer>
          </ImageItem>
        </Section.Content>
      </Section>
    </Main>
  );
}
