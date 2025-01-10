import Image from "next/image";
import { PriceDisplaySimple } from "../../checkout/checkout-price-display";

export default function ProductList({
  info,
  product,
  handleProductClick,
  price1,
  country,
}: any) {
  return (
    <>
      <div
        className={`flex w-full mb-4 border-[1px] border-[#333] rounded-md cursor-pointer hover:shadow-sm  hover:shadow-blue-500 transition-all ${
          product.product === 0 && "border-blue-500 border-[3px]"
        }`}
        onClick={() => {
          handleProductClick(
            0,
            Number(info.product.price1),
            Number(info.product.ship1),
            Number(info.product.shippingId1),
            Number(info.product.offerId1),
            Number(info.product.stickyId1)
          );
        }}
      >
        <div className="flex flex-col w-1/3 sm:w-1/2 justify-center items-center">
          <div className="flex gap-2 mt-2">
            <input type="checkbox" />
            <span className="font-bold">Buy 1</span>
          </div>

          <Image
            src={info.product.image1}
            width={120}
            height={120}
            alt="Quantity 1"
          />
        </div>

        <div className="flex sm:flex-col items-end align-center pr-8 my-auto w-full space-x-2 sm:space-x-0 ">
          <p className="text-[16px] text-[#c1c2c3] line-through font-bold decoration-red-500">
            <PriceDisplaySimple
              priceUSD={parseFloat(info.product.ogPrice1)}
              countryCode={country}
              digits={0}
            />
          </p>

          <p className="text-[16px] text-black font-bold" id="price1">
            <PriceDisplaySimple
              priceUSD={price1}
              countryCode={country}
              digits={2}
            />
          </p>
          <p className="text-xs text-[#5acd65] font-bold" id="price1">
            <span>
              You Save {Number(info.product.ogPrice1) - Number(price1)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
