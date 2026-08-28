import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Btn from "./Btn";

export default function Visit() {
  return (
    <section id="visit">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading
            eyebrow="VISIT"
            title={
              <>
                영양군 청기면,
                <br />산 아래 농원.
              </>
            }
          />
        </Reveal>
        <Reveal className="mt-[30px] flex flex-col gap-[14px] md:flex-row">
          <div className="flex-1 rounded-card border border-line bg-white p-[22px]">
            <div className="mb-2 text-[12.5px] font-bold tracking-[0.06em] text-faint">
              주소
            </div>
            <div className="text-[16.5px] leading-[1.5] font-bold">
              {siteConfig.address}
              <small className="mt-[6px] block text-sm font-normal text-sub">
                갈골농원
              </small>
            </div>
            <div className="mt-4 flex gap-[10px]">
              <Btn
                href={siteConfig.naverMapUrl}
                variant="line"
                external
                className="flex-1"
              >
                네이버 지도 ↗
              </Btn>
            </div>
          </div>
          <div className="flex-1 rounded-card border border-line bg-white p-[22px]">
            <div className="mb-2 text-[12.5px] font-bold tracking-[0.06em] text-faint">
              문의
            </div>
            <div className="text-[16.5px] leading-[1.5] font-bold">
              {siteConfig.phone}
              <small className="mt-[6px] block text-sm font-normal text-sub">
                주문·문의는 전화로 받고 있습니다
              </small>
            </div>
            <div className="mt-4 flex gap-[10px]">
              <Btn href={siteConfig.phoneHref} variant="red" className="flex-1">
                전화 걸기
              </Btn>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
