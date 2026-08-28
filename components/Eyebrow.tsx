export default function Eyebrow({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-[9px] mb-4 text-[12.5px] leading-normal font-bold tracking-[0.11em] ${
        center ? "justify-center" : ""
      } ${light ? "text-white/72" : "text-red"}`}
    >
      <span
        className={`h-[1.5px] w-4 shrink-0 ${light ? "bg-white/55" : "bg-red"}`}
      />
      {children}
    </p>
  );
}
