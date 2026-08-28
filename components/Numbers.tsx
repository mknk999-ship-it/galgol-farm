import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import CountUpNumber from "./CountUpNumber";

const stats = [
  { key: "국산 비율", to: 100, unit: "%", note: "경북 영양산" },
  { key: "관리 공정", to: 7, unit: "단계", note: "재배부터 출고까지" },
  { key: "취급 품목", to: 3, unit: "가지", note: "고추 · 고춧가루 · 사과" },
  { key: "햇고춧가루", to: 600, unit: "g", note: "한 봉 18,000원" },
];

export default function Numbers() {
  return (
    <section className="bg-green py-[76px] text-white md:py-[120px]">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading
            light
            eyebrow="NUMBERS"
            title={
              <>
                남의 손을
                <br />
                거치지 않습니다.
              </>
            }
            desc="밭에서 키우고, 씻고, 말리고, 골라 담아 보내는 일까지 영양군 청기면 농장에서 직접 합니다."
          />
        </Reveal>
        <Reveal className="mt-[42px] flex flex-col gap-[30px] md:mt-[58px] md:grid md:grid-cols-4 md:gap-x-5 md:gap-y-0">
          {stats.map((s) => (
            <div key={s.key} className="text-center">
              <div className="mx-auto flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full bg-ivory md:h-[156px] md:w-[156px]">
                <div className="text-[11.5px] leading-[1.4] font-bold tracking-[0.09em] text-[#6D8574]">
                  {s.key}
                </div>
                <div className="tabular-num mt-[6px] text-[33px] leading-[1.05] font-extrabold tracking-[-0.055em] text-[#22331F] md:text-[38px]">
                  <CountUpNumber to={s.to} />
                  <i className="ml-[2px] text-sm font-bold text-red not-italic">
                    {s.unit}
                  </i>
                </div>
              </div>
              <div className="mt-[13px] text-[13.5px] leading-[1.5] text-white/68">
                {s.note}
              </div>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
