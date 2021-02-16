import { createCanvas, loadImage, registerFont } from "canvas";
import path from "path";
import photosData from "../../data/photos.json";

registerFont(path.resolve("./public", "fonts", "Cabin-SemiBold.ttf"), {
  family: "Cabin",
});

async function drawImage(filePath, text = "", fontSize = 90, color = "white") {
  const canvas = createCanvas(1200, 600);
  const ctx = canvas.getContext("2d");
  const image = await loadImage(filePath);
  const lineHeight = fontSize * 0.75;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color.replace("@", "#");
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Cabin`;
  ctx.shadowColor = "black";
  ctx.shadowBlur = 8;
  ctx.lineWidth = 2;

  const lines = text.split("\\n");
  const x = 600;
  const y = 300;

  for (var i = 0; i < lines.length; i++) {
    const values = [
      lines[i],
      x,
      y +
        i * lineHeight -
        (lines.length - i - 1) *
          ((lineHeight / lines.length) * (lines.length - 1)),
    ];

    ctx.strokeText(...values);
    ctx.fillText(...values);
  }

  return canvas;
}

export default async function (req, res) {
  if (!req.query.id) {
    res.statusCode = 400;
    res.end(`Please enter id query`);
  } else {
    const data = req.query.id
      ? photosData.filter(({ id }) => id === req.query.id)
      : photosData;

    if (!data.length) {
      res.statusCode = 404;
      res.end(`Photo ${req.query.id} not found`);
    } else {
      const filePath = path.join(
        path.resolve("./public", "photos", `social-${data[0].id}.jpg`)
      );

      const canvas = await drawImage(
        filePath,
        req.query.text,
        req.query.fontSize,
        req.query.color
      );

      res.setHeader("Content-Type", "image/png");

      canvas.createJPEGStream().pipe(res);
    }
  }
}
