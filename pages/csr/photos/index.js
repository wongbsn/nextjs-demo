import axios from "axios";
import { useQuery } from "react-query";
import PhotosView from "@views/Photos";

const fetchPhotos = async () => {
  const { data } = await axios.get(`/api/photos`);

  return data;
};

export default function PhotosPage() {
  const { data } = useQuery("photos", fetchPhotos);

  return <PhotosView data={data} />;
}
