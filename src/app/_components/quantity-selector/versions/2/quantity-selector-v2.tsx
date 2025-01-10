import { useState } from "react";

import { CubeIcon, FireIcon } from "@heroicons/react/24/solid";
import ProductList from "../../product-list";

export default function QuantitySelectorV2({
  info,
  product,
  handleProductClick,
  country,
}: any) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const productList = {
    product1: {
      key: 0,
      inf: info,
      product: product,
      price: info.product.price1,
      ogPrice: info.product.ogPrice1,
    },
    product2: {
      key: 1,
      inf: info,
      product: product,
      price: info.product.price2,
      ogPrice: info.product.ogPrice2,
      bestSeller: true,
    },
    product3: {
      key: 2,
      inf: info,
      product: product,
      price: info.product.price3,
      ogPrice: info.product.ogPrice3,
    },
    product4: {
      key: 3,
      inf: info,
      product: product,
      price: info.product.price4,
      ogPrice: info.product.ogPrice4,
    },
    handleProductClick: handleProductClick,
    country: country,
  } as any;

  const productKeys = Object.keys(productList).filter((key) =>
    key.startsWith("product")
  ) as any;
  return (
    <>
      <div className="flex justify-between py-6 items-center">
        <CubeIcon className="h-20 w-20 mr-2" />
        <div className="flex w-full flex-col justify-start items-start">
          <h3 className="font-bold text-3xl">Select Quantity</h3>
          <h6>How many hearing aids do you want?</h6>
        </div>
      </div>
      <div className="bg-red-200 py-2 mb-6 rounded-md">
        <div className="flex flex-col pl-20 text-sm justify-between">
          <span className="font-bold flex items-center gap-1">
            <span className="text-red-600 flex items-center">
              <FireIcon className="w-6 h-6 text-red-600" />
              High Demand:
            </span>
            84 people are looking at this offer!
          </span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd]">
        {productKeys.map((key: any) => {
          const product = productList[key];
          return (
            <ProductList
              key={key}
              itemKey={product.key}
              info={product.inf}
              product={product.product}
              handleProductClick={productList.handleProductClick}
              price={product.price}
              ogPrice={product.ogPrice}
              country={productList.country}
              bestSeller={product.bestSeller}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          );
        })}
      </div>
    </>
  );
}
