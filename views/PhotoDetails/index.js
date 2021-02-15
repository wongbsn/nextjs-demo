import { useRouter } from "next/router";
import Image from "next/image";
import Link from "@components/Link";
import SEO from "@components/SEO";
import { Main, Section, ImageItem } from "./components";

export default function PhotoDetailPage({ data }) {
  const router = useRouter();
  const renderType = router.pathname.split("/")[1];

  if (!data) return null;

  return (
    <Main>
      <SEO
        pageTitle={`Next.js Demo | Photo ${data.id}`}
        description="Next.js Images Demo"
        previewImage={`/photos/${data.id}.jpg`}
      />
      <Section>
        <Section.Content>
          <ImageItem>
            <ImageItem.ImageContainer>
              <Image
                src={`/photos/${((parseInt(data.id) - 1) % 20) + 1}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </ImageItem.ImageContainer>
            <ImageItem.TextContainer>
              <h1>Photo {data.id}</h1>
              <ImageItem.Label>Taken by: {data.photographer}</ImageItem.Label>
              <p>{data.description}</p>
              <Link href={`/${renderType}/photos?id=${data.id}`}>
                Back to Photos
              </Link>
            </ImageItem.TextContainer>
          </ImageItem>
        </Section.Content>
      </Section>
    </Main>
  );
}
