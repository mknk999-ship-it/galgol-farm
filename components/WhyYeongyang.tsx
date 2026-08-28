import Image from "next/image";
import { whyYeongyangItems } from "@/data/whyYeongyang";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhyIcon from "./WhyIcon";

export default function WhyYeongyang() {
  return (
    <section>
      <Wrap narrow>
        <Reveal>
          <SectionHeading
            eyebrow="WHY 영양"
            title="왜, 영양고추인가."
            desc="영양군은 이런 이력을 가진 고추 산지로 알려져 있습니다. 갈골농원은 그 영양군 청기면에서 고추를 직접 재배·세척·건조합니다."
          />
        </Reveal>
      </Wrap>
      <Wrap>
        <Reveal className="relative mt-[26px] aspect-[16/9] overflow-hidden rounded-card md:mt-[34px] md:aspect-[21/9]">
          <Image
            src="/images/yeongyang-pride.webp"
            alt="영양군 청기면의 '전국으뜸 英陽고추' 표지석"
            fill
            sizes="(min-width: 768px) 1080px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_50%,rgba(0,0,0,.55)_100%)]" />
          <p className="absolute right-4 bottom-3 left-4 text-[12.5px] font-semibold text-white/85 md:right-6 md:bottom-4 md:left-6">
            영양군 청기면에 세워진 &quot;전국으뜸 英陽고추&quot; 표지석.
          </p>
        </Reveal>
      </Wrap>
      <Wrap>
        <Reveal className="mt-[30px] grid grid-cols-2 gap-3 md:mt-11 md:grid-cols-4 md:gap-[18px]">
          {whyYeongyangItems.map((item) => (
            <div
              key={item.title}
              className="rounded-card-sm border border-line bg-white p-[18px] md:p-[22px]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-soft">
                <WhyIcon icon={item.icon} />
              </div>
              <h3 className="mt-[14px] text-[15.5px] leading-[1.35] font-extrabold tracking-[-0.03em] md:text-[16.5px]">
                {item.title}
              </h3>
              <p className="mt-[6px] text-[12.5px] leading-[1.55] text-sub md:text-[13px]">
                {item.desc}
              </p>
            </div>
          ))}
        </Reveal>
        <p className="mt-[18px] text-[12.5px] leading-[1.6] text-faint md:mt-[22px] md:max-w-[660px]">
          * 백화점 입점·해외 수출 사례는 영양군 고추 유통 전반의 사례이며,
          갈골농원이 직접 납품·수출한 사례가 아닙니다.
        </p>
      </Wrap>
    </section>
  );
}
