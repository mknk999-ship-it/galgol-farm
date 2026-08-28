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
  { src: "43.jpg", out: "pepper-plant.webp", maxWidth: 1600 },
  { src: "48.jpg", out: "harvest.webp", maxWidth: 1600 },
  { src: "8.jpg", out: "washing.webp", maxWidth: 1200 },
  { src: "3.jpg", out: "drying-house.webp", maxWidth: 1600 },
  { src: "9.jpg", out: "sorting.webp", maxWidth: 1200 },
  { src: "5.jpg", out: "dried-pepper.webp", maxWidth: 1200 },
  { src: "6.jpg", out: "facility.webp", maxWidth: 1600 },
  // --- 아래부터 신규 추가 (재배 여정 + WHY 영양 배너) ---
  { src: "24.jpg", out: "journey-tilling.webp", maxWidth: 1600 },
  { src: "29.jpg", out: "journey-mulching.webp", maxWidth: 1600 },
  { src: "31.jpg", out: "journey-planting.webp", maxWidth: 1600 },
  { src: "38.jpg", out: "journey-covering.webp", maxWidth: 1600 },
  { src: "40.jpg", out: "journey-growing.webp", maxWidth: 1600 },
  { src: "45.jpg", out: "journey-fruiting.webp", maxWidth: 1600 },
  { src: "53.jpg", out: "yeongyang-pride.webp", maxWidth: 1920 },
  // farmer-cover.webp, farmer-face.webp, dried-pepper-product.webp,
  // gochugaru.webp 는 photos/ 번호 사진이 아니라 채팅으로 받은 사진을
  // 직접 변환해 public/images/ 에 넣은 것이라 이 목록에 없다.
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
