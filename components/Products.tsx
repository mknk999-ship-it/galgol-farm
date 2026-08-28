import Image from "next/image";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import Wrap from "./Wrap";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="bg-soft">
      <Wrap>
        <Reveal className="md:max-w-[660px]">
          <SectionHeading
            eyebrow="PRODUCT"
            title="2026년 햇고추."
            desc="주문은 전화 또는 문자로 받고 있습니다. 온라인 스토어는 준비 중입니다."
          />
        </Reveal>

        <Reveal className="mt-[30px] grid grid-cols-2 gap-3 md:mt-11 md:grid-cols-4 md:gap-[18px]">
          {products
            .filter((p) => p.available)
            .map((p) => (
              <div
                key={p.id}
                className="overflow-hidden rounded-2xl bg-white"
              >
                <div className="relative aspect-square bg-[#EFEAE1]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="photo-pending flex h-full w-full items-center justify-center p-[10px] text-center text-[11.5px] leading-[1.45] whitespace-pre-line text-faint">
                      {p.placeholder}
                    </div>
                  )}
                </div>
                <div className="px-[13px] pt-3 pb-[14px] md:px-[17px] md:pt-4 md:pb-[18px]">
                  <p className="flex items-center gap-[5px] text-[11px] font-bold text-faint">
                    <b className="font-extrabold text-red">{p.no}</b>
                    {p.meta}
                  </p>
                  <h3 className="mt-[6px] text-[15.5px] font-extrabold tracking-[-0.03em] md:text-[17.5px]">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-[1.5] text-sub md:text-[13.5px]">
                    {p.desc}
                  </p>
                  {p.price !== null ? (
                    <p className="mt-[10px] text-[17.5px] leading-[1.3] font-extrabold tracking-[-0.04em] md:text-xl">
                      {p.price.toLocaleString()}
                      <small className="ml-[1px] text-xs font-semibold text-sub">
                        원
                      </small>
                    </p>
                  ) : (
                    <p className="mt-[10px] text-[13.5px] font-bold text-sub">
                      가격 문의
                    </p>
                  )}
                  <a
                    href={siteConfig.phoneHref}
                    className={`mt-[10px] flex min-h-10 w-full items-center justify-center rounded-[9px] text-[13.5px] font-bold md:min-h-11 md:text-[14.5px] ${
                      p.price !== null
                        ? "bg-red text-white"
                        : "border-[1.5px] border-line bg-white text-ink"
                    }`}
                  >
                    {p.price !== null ? "☎ 전화로 주문하기" : "☎ 전화 문의"}
                  </a>
                </div>
              </div>
            ))}

          <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-dashed border-[rgba(26,26,24,.2)] p-[22px] text-center md:min-h-0 md:p-6">
            <b className="mb-[6px] block text-[15px] font-extrabold tracking-[-0.03em] text-ink">
              찾는 상품이 없으신가요?
            </b>
            <p className="text-[13px] leading-[1.6] text-sub">
              필요한 수량이나 포장 단위를 전화로 말씀해 주세요.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="mt-3 text-[13.5px] font-bold text-red"
            >
              ☎ {siteConfig.phone}
            </a>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
