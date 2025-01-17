import Image from "next/image";
import { PriceDisplaySimple } from "../../checkout/checkout-price-display";
import { useState } from "react";

export default function ProductList({
  itemKey,
  info,
  product,
  handleProductClick,
  price,
  ogPrice,
  country,
  bestSeller,
  selectedProduct,
  setSelectedProduct,
}: any) {
  const handleClick = () => {
    if (selectedProduct === itemKey) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(itemKey);
    }
    handleProductClick(
      itemKey,
      Number(price),
      Number(info.product[`ship${itemKey + 1}`]),
      Number(info.product[`shippingId${itemKey + 1}`]),
      Number(info.product[`offerId${itemKey + 1}`]),
      Number(info.product[`stickyId${itemKey + 1}`])
    );
  };

  return (
    <div
      className={`flex w-full h-36 mb-4 border-[1px] border-[#333] rounded-md cursor-pointer hover:shadow-sm hover:shadow-blue-500 transition-all relative ${
        selectedProduct === itemKey ? "bg-lime-200" : ""
      } ${product.product === itemKey && "border-blue-500 border-[3px]"}`}
      onClick={handleClick}
    >
      {bestSeller && (
        <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-[30px] text-white flex justify-center rounded-md px-4 absolute left-[20px] top-[-15px] text-[12px] font-bold w-[180px] items-center">
          Most Popular
        </div>
      )}

      <div className="flex flex-col w-4/5 justify-center items-center relative">
        <div className="flex gap-2 mt-2">
          <input
            type="checkbox"
            checked={selectedProduct === itemKey}
            onChange={handleClick}
          />
          <span className="font-bold">Buy {itemKey + 1}</span>
        </div>
        {itemKey === 2 && (
          <div className="bg-red-500 text-white flex justify-center p-2 rounded-full w-12 h-12 absolute top-2 left-28 lg:left-36 text-xs font-bold items-center z-10">
            <span className="ml-1">50% OFF</span>
          </div>
        )}

        {itemKey === 3 && (
          <div className="bg-red-500 text-white flex justify-center p-2 rounded-full w-12 h-12 absolute top-2 left-28 lg:left-36 text-xs font-bold items-center z-10">
            <span className="ml-1">60% OFF</span>
          </div>
        )}

        <Image
          src={info.product[`image${itemKey + 1}`]}
          width={120}
          height={120}
          alt={`Quantity ${itemKey + 1}`}
        />
      </div>

      <div className="flex flex-col items-end pr-8 my-auto w-full space-y-2">
        <p className="text-base text-gray-400 line-through font-bold decoration-red-500">
          <PriceDisplaySimple
            priceUSD={Number(parseFloat(ogPrice))}
            countryCode={country}
            digits={0}
          />
        </p>
        <p
          className="text-base text-black font-bold"
          id={`price${itemKey + 1}`}
        >
          <PriceDisplaySimple
            priceUSD={Number(price)}
            countryCode={country}
            digits={2}
          />
        </p>
        <p
          className="text-xs text-green-500 font-bold"
          id={`price${itemKey + 1}`}
        >
          <span>You Save {Number(ogPrice) - Number(price)}</span>
        </p>
      </div>
    </div>
  );
}
