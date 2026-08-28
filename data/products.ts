export type Product = {
  id: string;
  no: string;
  name: string;
  meta: string;
  desc: string;
  price: number | null;
  image: string | null;
  placeholder?: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "gochugaru-600",
    no: "01",
    name: "햇고춧가루",
    meta: "600g · 국내산",
    desc: "직접 재배해 씻어 말린 고추를 빻았습니다.",
    price: 18000,
    image: "/images/gochugaru.webp",
    available: true,
  },
  {
    id: "dried-pepper",
    no: "02",
    name: "햇 건고추",
    meta: "국내산",
    desc: "세척 후 열풍건조한 통고추입니다.",
    price: null,
    image: "/images/dried-pepper-bowl.webp",
    available: true,
  },
];
