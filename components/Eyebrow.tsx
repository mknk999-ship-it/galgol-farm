export default function Eyebrow({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  const rule = light ? "bg-white/55" : "bg-red";

  return (
    <p
      className={`mb-4 flex items-center gap-[10px] text-[12.5px] leading-normal font-bold tracking-[0.14em] ${
        center ? "justify-center" : ""
      } ${light ? "text-white/72" : "text-red"}`}
    >
      <span className={`h-[1.5px] w-5 shrink-0 ${rule}`} />
      {children}
      {center && <span className={`h-[1.5px] w-5 shrink-0 ${rule}`} />}
    </p>
  );
}
