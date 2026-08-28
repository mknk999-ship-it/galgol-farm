import Image from "next/image";
import { processSteps } from "@/data/process";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="bg-soft">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading
            eyebrow="PROCESS"
            title={
              <>
                밭에서 상자까지,
                <br />
                일곱 단계.
              </>
            }
            desc="모든 단계를 농장에서 직접 관리합니다."
          />
        </Reveal>

        <Reveal className="mt-[30px] grid grid-cols-2 gap-3 md:mt-11 md:grid-cols-4 md:gap-[18px]">
          {processSteps.map((step) => {
            const soon = !step.image;
            return (
              <div
                key={step.no}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                {step.image ? (
                  <Image
                    src={step.image}
                    alt={step.alt ?? step.title}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="photo-pending absolute inset-0" />
                )}

                <div
                  className={
                    soon
                      ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.02)_32%,rgba(0,0,0,.52)_100%)]"
                      : "absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.10)_32%,rgba(0,0,0,.72)_100%)]"
                  }
                />

                {soon && (
                  <span className="absolute top-3 left-3 rounded-[5px] bg-white/80 px-2 py-[3px] text-[11px] font-bold text-[#8C8377]">
                    사진 준비 중
                  </span>
                )}

                <div className="absolute right-0 bottom-0 left-0 px-[14px] pt-[13px] pb-[15px] text-white md:px-[17px] md:pt-4 md:pb-[18px]">
                  <p className="flex flex-wrap items-center gap-[6px] text-[11.5px] leading-[1.5] font-bold tracking-[0.05em] text-white/78 md:text-xs">
                    <b className="font-extrabold text-white">{step.no}</b>
                    {step.title}
                    {step.tag && (
                      <span className="rounded-[4px] bg-white/92 px-[6px] py-[2px] text-[10.5px] font-bold tracking-[-0.01em] whitespace-nowrap text-red">
                        {step.tag}
                      </span>
                    )}
                  </p>
                  <h3 className="mt-[5px] text-base leading-[1.35] tracking-[-0.04em] [text-shadow:0_1px_9px_rgba(0,0,0,.45)] md:text-[17.5px]">
                    {step.headline}
                  </h3>
                </div>
              </div>
            );
          })}

          <div className="flex aspect-square flex-col justify-end rounded-2xl bg-green p-[14px] md:p-[17px]">
            <p className="text-[11px] leading-[1.5] font-bold tracking-[0.11em] text-[#A8C4AE]">
              갈골농원
            </p>
            <h3 className="mt-[7px] text-base leading-[1.35] tracking-[-0.04em] text-white md:text-[17.5px]">
              일곱 단계 모두
              <br />
              농장에서 직접.
            </h3>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
