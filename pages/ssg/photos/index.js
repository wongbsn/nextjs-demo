import axios from "axios";
import PhotosView from "@views/Photos";
import photosData from "../../../data/photos.json";

export async function getStaticProps({ params }) {
  return {
    props: {
      data: photosData,
    },
  };
}

export default function PhotosPage({ data }) {
  return <PhotosView data={data} />;
}
