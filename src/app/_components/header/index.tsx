import { Props } from "@/interfaces/componentVersionHandle";
import HeaderV1 from "./versions/1/header-v1";
import HeaderV2 from "./versions/2/header-v2";

export default function Header({ info, siteProduct }: Props) {
  return (
    <>
      {info.template === "1" ? (
        <HeaderV1 info={info} siteProduct={siteProduct} />
      ) : (
        <HeaderV2 info={info} siteProduct={siteProduct} />
      )}
    </>
  );
}
