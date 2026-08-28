import Image from "next/image";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/images/dried-pepper.webp",
    alt: "건조 중인 고추",
    caption: "건조대에 널어 말리는 고추.",
  },
  {
    src: "/images/facility.webp",
    alt: "세척기와 건조 시설",
    caption: "농장 한쪽의 세척기와 건조 시설.",
  },
  {
    src: "/images/drying-house.webp",
    alt: "건조장 내부",
    caption: "하우스 건조장 내부.",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-soft py-[76px] md:py-[120px]">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading eyebrow="농장" title="영양에서, 이렇게." />
        </Reveal>
        <Reveal className="mt-[30px] flex flex-col gap-[22px] md:grid md:grid-cols-3">
          {shots.map((s) => (
            <figure key={s.src} className="m-0">
              <div className="relative aspect-4/3 overflow-hidden rounded-card bg-[#EFEAE1]">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-[10px] text-[13.5px] text-faint">
                {s.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </Wrap>
    </section>
  );
}
