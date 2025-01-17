import { Props } from "@/interfaces/componentVersionHandle";
import Image from "next/image";

export default function HeaderV2({ info, siteProduct }: Props) {
  return (
    <>
      <div className="flex w-full justify-between bg-white shadow-lg items-center pb-1 pt-4 md:px-28">
        <div className="text-xs flex flex-col justify-center items-center sm:text-base">
          <Image
            width={140}
            height={140}
            src={info.header.logo}
            alt={info.blurbs.text1}
            className="w-36 max-w-36 sm:max-w-none md:ml-0 ml-1"
          />
          <div className="hidden md:block text-white">{info.blurbs.text1}</div>
        </div>
        <div className="text-xs flex flex-col justify-center items-center sm:text-base">
          <Image
            width={80}
            height={80}
            src={info.header.badge}
            alt={info.blurbs.text2}
            className="w-20 h-20 max-w-20 sm:max-w-none mr-2"
          />
          <div className="hidden md:block text-white">{info.blurbs.text2}</div>
        </div>
      </div>
    </>
  );
}
