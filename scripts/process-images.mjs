// photos/ 원본을 public/images/ 로 옮기면서 이름을 바꾸고 WebP로 변환한다.
// 요구사항.md 5번 대응표 기준. 11(명함)/12(합성 홍보이미지)/4/7 은 사용하지 않는다.
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";

const photosDir = path.resolve(import.meta.dirname, "..", "photos");
const outDir = path.resolve(import.meta.dirname, "..", "public", "images");
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: "1.jpg", out: "hero-farm.webp", maxWidth: 1920 },
  { src: "2.jpg", out: "pepper-plant.webp", maxWidth: 1600 },
  { src: "10.jpg", out: "harvest.webp", maxWidth: 1600 },
  { src: "8.jpg", out: "washing.webp", maxWidth: 1200 },
  { src: "3.jpg", out: "drying-house.webp", maxWidth: 1600 },
  { src: "9.jpg", out: "sorting.webp", maxWidth: 1200 },
  { src: "5.jpg", out: "dried-pepper.webp", maxWidth: 1200 },
  { src: "6.jpg", out: "facility.webp", maxWidth: 1600 },
  {
    // 대표가 엄지 든 가로 사진 → 상하만 잘라 와이드 배너 비율(3:1)로. 인물이 화면 오른쪽
    // 3분의 2 지점, 세로로는 위쪽 1/3 부근에 있어 그 위치를 중심으로 세로만 자른다.
    src: "13.jpg",
    out: "farmer-cover.webp",
    maxWidth: 1440,
    crop: { ratio: 3, focusY: 0.37 },
  },
  {
    // 대표 얼굴 사진 → 얼굴 중심 정사각으로 미리 크롭 (프로필 원형용)
    src: "14.jpg",
    out: "farmer-face.webp",
    maxWidth: 480,
    crop: { square: true, focusX: 0.53, focusY: 0.36 },
  },
];

for (const job of jobs) {
  const input = path.join(photosDir, job.src);
  const output = path.join(outDir, job.out);
  const image = sharp(input);
  const meta = await image.metadata();

  let pipeline = image;

  if (job.crop?.ratio) {
    const targetH = Math.round(meta.width / job.crop.ratio);
    const top = Math.min(
      Math.max(Math.round(meta.height * job.crop.focusY - targetH / 2), 0),
      meta.height - targetH
    );
    pipeline = pipeline.extract({ left: 0, top, width: meta.width, height: targetH });
  } else if (job.crop?.square) {
    const side = Math.round(Math.min(meta.width, meta.height) * 0.78);
    const left = Math.min(
      Math.max(Math.round(meta.width * job.crop.focusX - side / 2), 0),
      meta.width - side
    );
    const top = Math.min(
      Math.max(Math.round(meta.height * job.crop.focusY - side / 2), 0),
      meta.height - side
    );
    pipeline = pipeline.extract({ left, top, width: side, height: side });
  }

  await pipeline
    .resize({ width: job.maxWidth, withoutEnlargement: true })
    .webp({ quality: 75, effort: 6 })
    .toFile(output);

  const { size } = fs.statSync(output);
  console.log(`${job.src} -> ${job.out} (${(size / 1024).toFixed(0)}KB)`);
}
