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
            eyebrow="영양고추의 우수성"
            title={
              <>
                전 세계인의 입맛을
                <br />
                사로잡은 명품 영양고추
              </>
            }
            desc="영양군은 이런 이력을 가진 고추 산지로 알려져 있습니다. 갈골농원은 그 영양군 청기면에서 고추를 직접 재배·세척·건조합니다."
          />
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
          * 백화점 입점·해외 수출 사례는 영양군 고추 유통 전반의 사례입니다.
        </p>
      </Wrap>
    </section>
  );
}
