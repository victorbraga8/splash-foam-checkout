import React from "react";
import { CheckoutPageType } from "@/interfaces/checkoutPage";
import { siteProduct } from "@/lib/site-info";

import Header from "../header";

export type Props = {
  info: CheckoutPageType;
  siteProduct?: string | any;
};
const CheckoutHeader = ({ info }: Props) => {
  return <Header info={info} siteProduct={siteProduct} />;
};

export default CheckoutHeader;
