export type WhyItem = {
  icon: "seal" | "store" | "globe" | "map";
  title: string;
  desc: string;
};

export const whyYeongyangItems: WhyItem[] = [
  {
    icon: "seal",
    title: "지리적표시 제5호",
    desc: "2005년 영양고춧가루가 국가 지리적표시 제5호로 등록되며 산지로서 명성을 인정받았습니다.",
  },
  {
    icon: "store",
    title: "백화점 입점 상품",
    desc: "영양산 고추가 갤러리아·롯데·현대백화점 명품관에 입점한 사례가 있습니다.",
  },
  {
    icon: "globe",
    title: "미국·일본·유럽 수출",
    desc: "영양고추는 미국, 일본, 유럽 등 해외 시장으로도 수출되고 있습니다.",
  },
  {
    icon: "map",
    title: "대한민국 대표 산지",
    desc: "1955년 국내 최초 고추 주산단지로 조성된 이후 지금까지 이어지는 고추 산지입니다.",
  },
];
