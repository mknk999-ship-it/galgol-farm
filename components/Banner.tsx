import Image from "next/image";
import { siteConfig } from "@/data/site";
import Wrap from "./Wrap";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Btn from "./Btn";

export default function Banner() {
  return (
    <div className="relative overflow-hidden text-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/dried-pepper.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
      </div>
      <div className="absolute inset-0 bg-[rgba(38,18,14,.62)]" />
      <Wrap className="relative py-[86px]">
        <Reveal>
          <Eyebrow light center>
            갈골농원
          </Eyebrow>
          <h2 className="text-[27px] text-white md:text-[38px]">
            올해도, 같은 마음으로.
          </h2>
          <p className="mt-4 text-base text-white/82">
            영양에서 키운 고추를 산지에서 바로 보내드립니다.
          </p>
          <Btn href={siteConfig.phoneHref} variant="red" className="mt-[26px]">
            ☎ {siteConfig.phone}
          </Btn>
        </Reveal>
      </Wrap>
    </div>
  );
}
