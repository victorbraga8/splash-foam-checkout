import Image from "next/image";
import { PriceDisplaySimple } from "../../checkout/checkout-price-display";

export default function ProductList({
  itemKey, // Recebe a chave personalizada
  info,
  product,
  handleProductClick,
  price,
  ogPrice,
  country,
  bestSeller,
}: any) {
  return (
    <>
      <div
        className={`flex w-full mb-4 border-[1px] border-[#333] rounded-md cursor-pointer hover:shadow-sm  hover:shadow-blue-500 transition-all ${
          product.product === itemKey && "border-blue-500 border-[3px]"
        }`}
        onClick={() => {
          handleProductClick(
            itemKey,
            Number(price),
            Number(info.product[`ship${itemKey + 1}`]),
            Number(info.product[`shippingId${itemKey + 1}`]),
            Number(info.product[`offerId${itemKey + 1}`]),
            Number(info.product[`stickyId${itemKey + 1}`])
          );
        }}
      >
        <div className="flex flex-col w-1/3 sm:w-1/2 justify-center items-center">
          {bestSeller && (
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-[30px]  text-white flex justify-center rounded-md px-4 left-[-40px] top-[12px] text-[12px] font-bold w-[180px] items-center">
              Most Popular
            </div>
          )}

          <div className="flex gap-2 mt-2">
            <input type="checkbox" />
            <span className="font-bold">Buy 1</span>
          </div>

          <Image
            src={info.product[`image${itemKey + 1}`]}
            width={120}
            height={120}
            alt={`Quantity ${itemKey + 1}`}
          />
        </div>

        <div className="flex sm:flex-col items-end align-center pr-8 my-auto w-full space-x-2 sm:space-x-0 ">
          <p className="text-[16px] text-[#c1c2c3] line-through font-bold decoration-red-500">
            <PriceDisplaySimple
              priceUSD={Number(parseFloat(ogPrice))}
              countryCode={country}
              digits={0}
            />
          </p>

          <p
            className="text-[16px] text-black font-bold"
            id={`price${itemKey + 1}`}
          >
            <PriceDisplaySimple
              priceUSD={Number(price)}
              countryCode={country}
              digits={2}
            />
          </p>
          <p
            className="text-xs text-[#5acd65] font-bold"
            id={`price${itemKey + 1}`}
          >
            <span>You Save {Number(ogPrice) - Number(price)}</span>
          </p>
        </div>
      </div>
    </>
  );
}
