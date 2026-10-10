import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  center = true,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${center ? "mx-auto max-w-[620px] text-center" : ""} ${className}`}
    >
      <Eyebrow light={light} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mb-[16px] text-[28px] leading-[1.3] tracking-[-0.03em] md:mb-[20px] md:text-[42px] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`text-[15.5px] leading-[1.7] md:text-[17px] ${
            light ? "text-white/66" : "text-sub"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
