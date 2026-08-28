import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/93 backdrop-blur-md">
      <Wrap className="flex h-[60px] items-center justify-between">
        <a href="#top" className="flex items-baseline gap-[7px]">
          <b className="text-[19px] font-extrabold tracking-[-0.04em] text-ink">
            {siteConfig.name}
          </b>
          <span className="text-[11.5px] tracking-[0.06em] text-faint">
            {siteConfig.region}
          </span>
        </a>
        <a
          href={siteConfig.phoneHref}
          className="rounded-[9px] bg-red-soft px-[14px] py-2 text-[14.5px] font-bold text-red"
        >
          ☎ {siteConfig.phone}
        </a>
      </Wrap>
    </header>
  );
}
