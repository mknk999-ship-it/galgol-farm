export type JourneyStep = {
  season: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

export const journeySteps: JourneyStep[] = [
  {
    season: "SPRING",
    title: "밭갈이",
    desc: "이른 봄, 관리기로 밭을 갈아엎어 흙을 부드럽게 만듭니다.",
    image: "/images/journey-tilling.webp",
    alt: "관리기로 밭을 가는 모습",
  },
  {
    season: "SPRING",
    title: "멀칭",
    desc: "검은 비닐로 이랑을 덮어 잡초를 막고 지온을 지킵니다.",
    image: "/images/journey-mulching.webp",
    alt: "멀칭이 끝난 이랑",
  },
  {
    season: "SPRING",
    title: "정식",
    desc: "튼튼하게 키운 모종을 하나하나 손으로 옮겨 심습니다.",
    image: "/images/journey-planting.webp",
    alt: "고추 모종을 심는 모습",
  },
  {
    season: "SPRING",
    title: "보온",
    desc: "부직포 터널을 씌워 어린 모종을 늦서리와 냉해로부터 지킵니다.",
    image: "/images/journey-covering.webp",
    alt: "부직포 터널 작업",
  },
  {
    season: "SUMMER",
    title: "생육",
    desc: "여름 볕 아래, 고추가 줄지어 무럭무럭 자랍니다.",
    image: "/images/journey-growing.webp",
    alt: "생육 중인 고추밭",
  },
  {
    season: "SUMMER",
    title: "착과",
    desc: "초록 고추가 알알이 맺히고, 곧 붉게 익어갑니다.",
    image: "/images/journey-fruiting.webp",
    alt: "열매를 맺은 고추",
  },
];
