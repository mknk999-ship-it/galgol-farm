import Image from "next/image";
import { journeySteps } from "@/data/journey";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading
            eyebrow="JOURNEY"
            title={
              <>
                고추가 자라기까지,
                <br />
                한 해의 기록.
              </>
            }
            desc="갈골농원이 매년 봄부터 여름까지 밭에서 보내는 시간입니다."
          />
        </Reveal>
        <Reveal className="mt-[30px] grid grid-cols-2 gap-3 md:mt-11 md:grid-cols-3 md:gap-[18px]">
          {journeySteps.map((step) => (
            <div
              key={step.title}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={step.image}
                alt={step.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.05)_40%,rgba(0,0,0,.68)_100%)]" />
              <div className="absolute right-0 bottom-0 left-0 px-[14px] pt-[13px] pb-[15px] text-white md:px-[17px] md:pt-4 md:pb-[18px]">
                <p className="text-[11px] font-bold tracking-[0.09em] text-white/72">
                  {step.season}
                </p>
                <h3 className="mt-[5px] text-base leading-[1.35] tracking-[-0.04em] [text-shadow:0_1px_9px_rgba(0,0,0,.45)] md:text-[17.5px]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-[1.5] text-white/82 md:text-[13px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
