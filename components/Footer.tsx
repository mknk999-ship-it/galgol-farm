import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";

export default function Footer() {
  return (
    <footer className="bg-deep py-[44px] text-[13.5px] leading-[1.9] text-[#9C948A]">
      <Wrap>
        <b className="mb-3 block text-[17px] font-extrabold tracking-[-0.03em] text-white">
          {siteConfig.name}
        </b>
        국산 100% 영양고추 · 고춧가루
        <div className="mt-[14px]">
          대표 · {siteConfig.owner}
          <br />
          주소 · {siteConfig.address}
          <br />
          전화 · <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
        </div>
        <div className="mt-[22px] border-t border-white/12 pt-[18px] text-xs text-[#736C63]">
          © 2026 {siteConfig.name}. 경북 영양 산지직송.
        </div>
      </Wrap>
    </footer>
  );
}
