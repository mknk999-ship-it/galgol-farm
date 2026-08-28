import { siteConfig } from "@/data/site";
import Btn from "./Btn";

export default function MobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-60 flex gap-[9px] border-t border-line bg-white/96 px-[14px] pt-[10px] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "calc(10px + env(safe-area-inset-bottom))" }}
    >
      <Btn href="#products" variant="line" full className="min-h-[50px] text-[15.5px]">
        상품 보기
      </Btn>
      <Btn href={siteConfig.phoneHref} variant="red" full className="min-h-[50px] text-[15.5px]">
        ☎ 전화 주문
      </Btn>
    </div>
  );
}
