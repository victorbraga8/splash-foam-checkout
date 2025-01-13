import { Props } from "@/interfaces/componentVersionHandle";
import Image from "next/image";

export default function HeaderV2({ info, siteProduct }: Props) {
  return (
    <>
      <div className="flex w-full relative flex-col items-center">
        <div className="flex w-full justify-center bg-white shadow-lg">
          <div className="flex w-full max-w-[1100px] justify-between items-center px-4 text-[12px] sm:text-[16px]">
            <div className="flex w-1/2 lg:w-1/3 p-2 sm:p-4 justify-center items-center font-bold text-white">
              <Image
                src={info.header.logo}
                alt={info.blurbs.text1}
                width={140}
                height={140}
                className="max-w-[140px] sm:max-w-none mr-4"
              />
              {info.blurbs.text1}
            </div>
            <div className="flex w-1/2 lg:w-1/3 p-2 sm:p-4 justify-center items-center font-bold text-white">
              <Image
                src={info.header.badge}
                alt={info.blurbs.text2}
                width={80}
                height={80}
                className="max-w-[80px] sm:max-w-none mr-4"
              />
              {info.blurbs.text2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
