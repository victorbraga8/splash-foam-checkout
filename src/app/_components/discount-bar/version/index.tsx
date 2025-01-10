import { Props } from "@/interfaces/componentVersionHandle";
import DiscountBarV2 from "./2/discount-bar-v2";
import DiscountBarV1 from "./1/discount-bar-v1";

export default function DiscountBar({ info, siteProduct }: Props) {
  return (
    <>
      {info.template === "1" ? (
        <DiscountBarV1 info={info} siteProduct={siteProduct} />
      ) : (
        <DiscountBarV2 info={info} siteProduct={siteProduct} />
      )}
    </>
  );
}
