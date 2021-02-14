import axios from "axios";
import PhotosView from "@views/Photos";

export async function getServerSideProps({ req }) {
  const protocol = req.protocol === "https" ? "https:" : "http:";
  const { data } = await axios.get(
    `${protocol}//${req.headers.host}/api/photos`
  );

  return {
    props: {
      data,
    },
  };
}

export default function PhotosPage(props) {
  return <PhotosView {...props} />;
}
