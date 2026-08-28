export default function Wrap({
  children,
  narrow = false,
  className = "",
}: {
  children: React.ReactNode;
  narrow?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto max-w-[600px] px-[22px] md:max-w-[1080px] md:px-10 ${
        narrow ? "md:max-w-[660px]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
