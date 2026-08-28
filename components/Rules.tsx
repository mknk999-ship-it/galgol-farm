import { rules } from "@/data/rules";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Rules() {
  return (
    <section id="rules">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading eyebrow="원칙" title="이렇게 농사짓습니다." />
        </Reveal>
        <Reveal className="mt-[30px] border-t border-line md:grid md:grid-cols-2 md:gap-x-10 md:border-t-0">
          {rules.map((r) => (
            <div
              key={r.no}
              className="border-b border-line py-[22px] md:border-t md:border-b-0"
            >
              <div className="mb-[7px] flex items-center gap-[10px]">
                <span className="text-[12.5px] font-extrabold tracking-[0.06em] text-red">
                  {r.no}
                </span>
                <span className="text-[12.5px] font-bold text-faint">
                  {r.keyword}
                </span>
              </div>
              <h3 className="mb-[6px] text-[18.5px]">{r.title}</h3>
              <p className="text-[15.5px] text-sub">{r.desc}</p>
            </div>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
