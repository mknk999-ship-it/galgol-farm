export type ProcessStep = {
  no: string;
  title: string;
  headline: string;
  image: string | null;
  alt?: string;
  tag?: string;
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "재배",
    headline: "영양의 밭에서 키웁니다.",
    image: "/images/pepper-plant.webp",
    alt: "고추밭에서 자라는 고추",
  },
  {
    no: "02",
    title: "수확",
    headline: "붉게 익은 것만 땁니다.",
    image: "/images/harvest.webp",
    alt: "붉게 익은 고추",
  },
  {
    no: "03",
    title: "세척",
    headline: "말리기 전에 씻습니다.",
    image: "/images/washing.webp",
    alt: "고추 세척 작업",
    tag: "위생관리",
  },
  {
    no: "04",
    title: "건조",
    headline: "열풍건조기로 말립니다.",
    image: "/images/drying-house.webp",
    alt: "건조장에 널린 고추",
  },
  {
    no: "05",
    title: "선별",
    headline: "하나씩 확인합니다.",
    image: "/images/sorting.webp",
    alt: "고추 선별 작업",
  },
  {
    no: "06",
    title: "포장",
    headline: "상하지 않게 담습니다.",
    image: "/images/packing.webp",
    alt: "상자에 포장된 고춧가루",
  },
  {
    no: "07",
    title: "출고",
    headline: "산지에서 바로 보냅니다.",
    image: "/images/shipping.webp",
    alt: "차량에 상자를 싣는 모습",
  },
];
