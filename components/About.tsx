import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const facts = [
  { k: "소재지", v: "경상북도 영양군 청기면" },
  { k: "취급 품목", v: "고추 · 고춧가루 · 사과" },
  { k: "건조 방식", v: "세척 후 열풍건조" },
  { k: "주문", v: `전화·문자 주문 ${siteConfig.phone}` },
];

export default function About() {
  return (
    <section id="about">
      <Wrap narrow>
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT"
            title={
              <>
                직접 키운 고추만
                <br />
                보내드립니다.
              </>
            }
          />
          <p className="text-base text-sub">
            경상북도 영양군 청기면에서 고추 농사를 짓습니다. 밭에서 고추를
            키우는 것부터 수확하고, 씻고, 말리는 과정까지 농장에서 직접
            관리합니다.
          </p>
          <p className="mt-4 text-base text-sub">
            중간 유통을 거치지 않고 농가에서 바로 보내드립니다. 누가
            어디에서 어떻게 키웠는지 확인할 수 있는 고추입니다.
          </p>
          <div className="mt-[30px] border-t border-line">
            {facts.map((f) => (
              <div
                key={f.k}
                className="grid grid-cols-[82px_1fr] items-baseline gap-[14px] border-b border-line py-[14px] md:grid-cols-[110px_1fr]"
              >
                <span className="text-[12.5px] leading-[1.6] font-bold tracking-[0.06em] text-faint">
                  {f.k}
                </span>
                <span className="text-[15.5px] leading-[1.6]">{f.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
