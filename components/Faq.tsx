import { faqItems } from "@/data/faq";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="bg-soft">
      <Wrap narrow>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문." />
          <div className="mt-[26px] border-t border-line">
            {faqItems.map((item, i) => (
              <details
                key={item.q}
                open={i === 0}
                className="group border-b border-line"
              >
                <summary className="relative cursor-pointer list-none py-5 pr-[30px] text-[16.5px] leading-[1.6] font-bold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="absolute top-[29px] right-[6px] h-2 w-2 rotate-45 border-r-2 border-b-2 border-faint transition-transform duration-200 group-open:top-8 group-open:-rotate-[135deg]" />
                </summary>
                <p className="mt-[-4px] mb-[22px] text-[15.5px] text-sub">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
