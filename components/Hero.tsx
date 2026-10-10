import Image from "next/image";
import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Btn from "./Btn";

export default function Hero() {
  return (
    <div
      id="top"
      className="relative flex min-h-[clamp(540px,82vh,700px)] items-end overflow-hidden text-white md:min-h-[clamp(600px,88vh,760px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-farm.webp"
          alt="경상북도 영양군 청기면 갈골농원 고추밭"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_58%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,24,16,.46)_0%,rgba(18,24,16,.10)_36%,rgba(13,19,11,.82)_100%)]" />

      <Wrap className="relative pt-[110px] pb-[42px] md:pt-40 md:pb-16">
        <div className="md:max-w-[720px]">
          <Eyebrow light>경상북도 영양군 청기면</Eyebrow>
          <h1 className="text-[33px] leading-[1.24] tracking-[-0.04em] [text-shadow:0_2px_20px_rgba(0,0,0,.35)] md:text-[54px]">
            영양에서 직접 키우고
            <br />
            직접 말렸습니다.
          </h1>
          <p className="mt-4 text-[#EDE6DA] [text-shadow:0_1px_12px_rgba(0,0,0,.4)]">
            국산 100% 영양고추
            <br />
            갈골농원이 재배부터 세척, 건조까지 직접 합니다.
          </p>
          <div className="mt-7 flex flex-col gap-[10px] md:flex-row">
            <Btn href="#products" variant="red" full className="md:w-auto md:flex-none md:px-[30px]">
              2026 햇고추 보기
            </Btn>
            <Btn href="#about" variant="ghost" full className="md:w-auto md:flex-none md:px-[30px]">
              갈골농원 이야기
            </Btn>
          </div>

          <a
            href={siteConfig.phoneHref}
            className="mt-7 flex max-w-[380px] items-center gap-[14px] rounded-card-sm bg-white/96 p-4 shadow-[0_14px_34px_-14px_rgba(0,0,0,.55)] backdrop-blur-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-soft text-[19px]">
              ☎
            </span>
            <span>
              <span className="block text-[14.5px] leading-[1.4] font-extrabold text-ink">
                전화 또는 문자로 간편하게 주문
              </span>
              <span className="block text-[13px] leading-[1.4] text-sub">
                {siteConfig.phone} · 온라인 스토어 준비 중
              </span>
            </span>
          </a>
        </div>
      </Wrap>
    </div>
  );
}
