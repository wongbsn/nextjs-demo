import { createCanvas, loadImage } from "canvas";
import path from "path";
import fs from "fs";
import getConfig from "next/config";
import photosData from "../../data/photos.json";

async function drawImage(filePath, text = "", color = "white") {
  const canvas = createCanvas(1200, 600);
  const ctx = canvas.getContext("2d");
  const image = await loadImage(filePath);
  const fontSize = 90;
  const lineHeight = fontSize * 0.8;

  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color.replace("@", "#");
  ctx.textAlign = "center";
  ctx.font = `${fontSize}px Lato`;
  ctx.shadowColor = "black";
  ctx.shadowBlur = 7;
  ctx.lineWidth = 5;

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
      const { serverRuntimeConfig } = getConfig();
      const filePath = path.join(
        serverRuntimeConfig.PROJECT_ROOT,
        `./public/photos/social-${data[0].id}.jpg`
      );

      const canvas = await drawImage(filePath, req.query.text, req.query.color);

      res.setHeader("Content-Type", "image/png");

      canvas.createJPEGStream().pipe(res);
    }
  }
}
