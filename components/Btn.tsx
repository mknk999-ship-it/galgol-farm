type Variant = "red" | "line" | "ghost";

export default function Btn({
  href,
  children,
  variant = "red",
  full = false,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  full?: boolean;
  external?: boolean;
  className?: string;
}) {
  const variants: Record<Variant, string> = {
    red: "bg-red text-white active:bg-red-deep",
    line: "border-[1.5px] border-line bg-white text-ink",
    ghost: "border-[1.5px] border-white/72 bg-transparent text-white",
  };

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`inline-flex min-h-[54px] items-center justify-center gap-[7px] rounded-btn px-6 text-base font-bold transition-colors ${
        variants[variant]
      } ${full ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
