import Image from "next/image";
import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Farmer() {
  return (
    <section id="farmer">
      <Wrap narrow>
        <Reveal>
          <SectionHeading eyebrow="FARMER" title="고추를 키운 사람." />
        </Reveal>
        <Reveal className="mt-[26px] md:mt-[34px]">
          <div className="relative h-[200px] overflow-hidden rounded-t-2xl bg-[#EFEAE1] md:h-[280px]">
            <Image
              src="/images/farmer-cover.webp"
              alt="갈골농원 대표"
              fill
              sizes="(min-width: 768px) 1080px, 100vw"
              className="object-cover object-[center_42%]"
            />
          </div>
          <div className="rounded-b-2xl border border-t-0 border-line bg-white px-5 pb-5 md:px-8 md:pb-[30px]">
            <div className="relative -mt-11 h-[88px] w-[88px] overflow-hidden rounded-full border-4 border-white bg-[#EFEAE1] md:-mt-[55px] md:h-[110px] md:w-[110px] md:border-[5px]">
              <Image
                src="/images/farmer-face.webp"
                alt="갈골농원 대표 김준연"
                fill
                sizes="110px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs font-bold tracking-[0.09em] text-red">
              갈골농원 대표
            </p>
            <h3 className="mt-3 text-[23px] tracking-[-0.045em] md:text-[27px]">
              {siteConfig.owner}
            </h3>
            <p className="mt-1 text-[12.5px] text-faint">
              경상북도 영양군 청기면
            </p>
            <p className="mt-[15px] text-[14.5px] leading-[1.75] text-sub md:mt-[18px] md:text-[15.5px]">
              수확한 고추를 세척기에 넣고, 건조기 온도를 맞추고, 상태를 살펴
              고르는 일까지 직접 합니다. 매년 다시 찾아주시는 분들이 믿고
              드실 수 있는 고추를 보내는 것을 가장 중요하게 생각합니다.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-4 flex items-baseline gap-[9px] border-t border-line pt-[14px] text-[15.5px] font-extrabold tracking-[-0.02em]"
            >
              {siteConfig.phone}
              <span className="text-[12.5px] font-semibold tracking-normal text-faint">
                주문 · 문의
              </span>
            </a>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
