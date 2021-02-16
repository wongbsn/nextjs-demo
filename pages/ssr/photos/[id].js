import PhotoDetailsView from "@views/PhotoDetails";
import photosData from "../../../data/photos.json";

export async function getServerSideProps({ params }) {
  const data = photosData.filter(({ id }) => id === params.id);

  return {
    props: {
      data: data[0],
    },
  };
}

export default function PhotosPage({ data }) {
  return <PhotoDetailsView data={data} />;
}
