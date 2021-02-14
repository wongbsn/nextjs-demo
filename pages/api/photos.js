import photosData from "../../data/photos.json";

export default (req, res) => {
  const data = req.query.id
    ? photosData.filter(({ id }) => id === req.query.id)
    : photosData;

  if (!data.length) {
    res.statusCode = 404;
    res.end(`Photo ${req.query.id} not found`);
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(data));
  }
};
