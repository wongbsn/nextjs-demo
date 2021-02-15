import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import PhotoDetailsView from "@views/PhotoDetails";

const fetchPhotoById = async (id) => {
  let data = null;

  if (id) {
    const response = await axios.get(`/api/photos?id=${id}`);

    data = response.data[0];
  }

  return data;
};

export default function PhotosPage() {
  const router = useRouter();
  const { data } = useQuery(["id", router.query.id], () =>
    fetchPhotoById(router.query.id)
  );

  return <PhotoDetailsView data={data} />;
}
