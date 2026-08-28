import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  center = false,
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
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <Eyebrow light={light} center={center}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`text-[27px] md:text-[38px] mb-[18px] md:mb-[22px] ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`text-base ${light ? "text-white/66" : "text-sub"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
