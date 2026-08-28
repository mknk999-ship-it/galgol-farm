export type Rule = {
  no: string;
  keyword: string;
  title: string;
  desc: string;
};

export const rules: Rule[] = [
  {
    no: "01",
    keyword: "국산 100%",
    title: "경북 영양에서만.",
    desc: "직접 재배한 고추만 상품으로 씁니다.",
  },
  {
    no: "02",
    keyword: "직접 재배",
    title: "밭부터 수확까지.",
    desc: "남에게 맡기지 않고 농장에서 직접 합니다.",
  },
  {
    no: "03",
    keyword: "위생관리",
    title: "씻어서 말립니다.",
    desc: "세척기로 씻은 뒤 열풍건조기에 넣습니다.",
  },
  {
    no: "04",
    keyword: "산지 직송",
    title: "중간 유통 없이.",
    desc: "농가에서 소비자에게 바로 보내드립니다.",
  },
];
