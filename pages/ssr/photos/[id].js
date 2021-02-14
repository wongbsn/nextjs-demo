import axios from "axios";
import PhotoDetailsView from "@views/PhotoDetails";

export async function getServerSideProps({ req, params }) {
  const protocol = req.protocol === "https" ? "https:" : "http:";
  let data = null;

  try {
    const response = await axios.get(
      `${protocol}//${req.headers.host}/api/photos?id=${params.id}`
    );

    data = response.data[0];
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      data,
    },
  };
}

export default function PhotosPage(props) {
  return <PhotoDetailsView {...props} />;
}
