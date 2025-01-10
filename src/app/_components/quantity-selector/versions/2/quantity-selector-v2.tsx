import Image from "next/image";
import { Cog6ToothIcon, CubeIcon, FireIcon } from "@heroicons/react/24/solid";
import { PriceDisplaySimple } from "@/app/_components/checkout/checkout-price-display";
export default function QuantitySelectorV2({
  info,
  product,
  handleProductClick,
  country,
  price1,
  price2,
  price3,
  price4,
}: any) {
  return (
    <>
      <div className="flex justify-between py-6 items-center">
        <CubeIcon className="h-20 w-20 mr-2" />
        <div className="flex w-full flex-col  justify-start items-start">
          <h3 className="font-bold text-3xl">Select Quantity</h3>
          <h6>How many hearing aids do you want ?</h6>
        </div>
      </div>
      <div className="bg-red-200 py-2 mb-6 rounded-md">
        <div className="flex flex-col pl-20 text-sm justify-between">
          <span className="font-bold flex items-center gap-1">
            <span className="text-red-600 flex items-center">
              <FireIcon className="w-6 h-6 text-red-600" />
              High Demand:
            </span>
            84 people are looking this offer!
          </span>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border-[1px] border-[#ddd] ">
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

        <div className="flex w-full flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <div
            className={`flex  w-full sm:w-1/2 border-[1px] border-[#333] rounded-md cursor-pointer  hover:shadow-sm  hover:shadow-blue-500 transition-all overflow-hidden relative ${
              product.product === 1 && "border-blue-500 border-[3px]"
            }`}
            onClick={() => {
              handleProductClick(
                1,
                Number(info.product.price2),
                Number(info.product.ship2),
                Number(info.product.shippingId2),
                Number(info.product.offerId2),
                Number(info.product.stickyId2)
              );
            }}
          >
            <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-[30px] absolute text-white flex justify-center rounded-md px-4 -rotate-[30deg] left-[-40px] top-[12px] text-[12px] font-bold w-[180px] items-center">
              Most Popular
            </div>
            <div className="flex w-1/3 sm:w-1/2 justify-center items-center">
              <Image
                src={info.product.image2}
                width={120}
                height={120}
                alt="Quantity 1"
              />
            </div>
            <div className="flex w-2/3 sm:w-1/2 flex-col justify-start items-center text-[#282828] text-center">
              <p className="text-[38px] font-bold ">
                2<span className="text-[28px] pl-[5px]">x</span>
              </p>
              <p className="text-[11px] font-bold">56% Discount:</p>
              <p className="text-[11px] font-bold">2 {info.product.name}</p>
              <div className="flex flex-row sm:flex-col justify-center items-center w-full space-x-2 sm:space-x-0">
                <p className="text-[16px] text-[#c1c2c3] line-through font-bold">
                  {/* {info.product.ogPrice2} */}
                  <PriceDisplaySimple
                    priceUSD={parseFloat(info.product.ogPrice2)}
                    countryCode={country}
                    digits={0}
                  />
                </p>

                <p
                  className="text-[16px] text-[#5acd65]  font-bold"
                  id="price2"
                >
                  {/* ${price2.toFixed(2)} */}
                  <PriceDisplaySimple
                    priceUSD={price2}
                    countryCode={country}
                    digits={2}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0 mt-2">
          <div
            className={`flex w-full sm:w-1/2 border-[1px] border-[#333] rounded-md cursor-pointer hover:shadow-sm  hover:shadow-blue-500 transition-all ${
              product.product === 2 && "border-blue-500 border-[3px]"
            }`}
            onClick={() =>
              handleProductClick(
                2,
                Number(info.product.price3),
                Number(info.product.ship3),
                Number(info.product.shippingId3),
                Number(info.product.offerId3),
                Number(info.product.stickyId3)
              )
            }
          >
            <div className="flex w-1/3 sm:w-1/2 justify-center items-center">
              <Image
                src={info.product.image3}
                width={120}
                height={120}
                alt="Quantity 1"
              />
            </div>
            <div className="flex w-2/3 sm:w-1/2 flex-col justify-start items-center text-[#282828] text-center">
              <p className="text-[38px] font-bold ">
                3<span className="text-[28px] pl-[5px]">x</span>
              </p>
              <p className="text-[11px] font-bold">58% Discount:</p>
              <p className="text-[11px] font-bold">3 {info.product.name}</p>
              <div className="flex flex-row sm:flex-col justify-center items-center w-full space-x-2 sm:space-x-0">
                <p className="text-[16px] text-[#c1c2c3] line-through font-bold">
                  {/* {info.product.ogPrice3} */}
                  <PriceDisplaySimple
                    priceUSD={parseFloat(info.product.ogPrice3)}
                    countryCode={country}
                    digits={0}
                  />
                </p>

                <p
                  className="text-[16px] text-[#5acd65]  font-bold"
                  id="price3"
                >
                  {/* ${price3.toFixed(2)} */}
                  <PriceDisplaySimple
                    priceUSD={price3}
                    countryCode={country}
                    digits={2}
                  />
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex w-full sm:w-1/2 border-[1px] border-[#333] rounded-md cursor-pointer  hover:shadow-sm  hover:shadow-blue-500 transition-all duration-200 ${
              product.product === 3 && "border-blue-500 border-[3px]"
            }`}
            onClick={() =>
              handleProductClick(
                3,
                Number(info.product.price4),
                Number(info.product.ship4),
                Number(info.product.shippingId4),
                Number(info.product.offerId4),
                Number(info.product.stickyId4)
              )
            }
          >
            <div className="flex w-1/3 sm:w-1/2 justify-center items-center">
              <Image
                src={info.product.image4}
                width={120}
                height={120}
                alt="Quantity 1"
              />
            </div>
            <div className="flex w-2/3 sm:w-1/2 flex-col justify-start items-center text-[#282828] text-center">
              <p className="text-[38px] font-bold ">
                4<span className="text-[28px] pl-[5px]">x</span>
              </p>
              <p className="text-[11px] font-bold">60% Discount:</p>
              <p className="text-[11px] font-bold">4 {info.product.name}</p>
              <div className="flex flex-row sm:flex-col justify-center items-center w-full space-x-2 sm:space-x-0">
                <p className="text-[16px] text-[#c1c2c3] line-through font-bold">
                  {/* {info.product.ogPrice4} */}
                  <PriceDisplaySimple
                    priceUSD={parseFloat(info.product.ogPrice4)}
                    countryCode={country}
                    digits={0}
                  />
                </p>

                <p
                  className="text-[16px] text-[#5acd65]  font-bold"
                  id="price4"
                >
                  {/* ${price4.toFixed(2)} */}
                  <PriceDisplaySimple
                    priceUSD={price4}
                    countryCode={country}
                    digits={2}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
