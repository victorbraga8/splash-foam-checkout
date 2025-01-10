import React from "react";
import { siteProduct } from "@/lib/site-info";
import Header from "../header";
import { Props } from "@/interfaces/componentVersionHandle";

const CheckoutHeader = ({ info }: Props) => {
  return <Header info={info} siteProduct={siteProduct} />;
};

export default CheckoutHeader;
