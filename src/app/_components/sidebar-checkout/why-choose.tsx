import Image from "next/image";

export default function WhyChoose() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <h1 className="text-xl font-bold mx-4 whitespace-nowrap">
              Why Choose Oricle 2.0
            </h1>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Image
            src="/images/splash-foam/satisfaction-guarantee.webp"
            alt="splash-foam"
            height={100}
            width={100}
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-xl">Satisfaction Guarantee</h2>
            <p>
              We stand by our product 100%. Return your Oricle 2.0 within 45
              days if you’re not satisfied for a refund - no questions asked.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10 flex gap-4">
          <Image
            src="/images/splash-foam/choose-seal2.png"
            alt="splash-foam"
            height={100}
            width={100}
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-xl">Fast U.S. Shipping</h2>
            <p>
              Your Oricle hearing aid 2.0 will be delivered within 3-6 business
              days from our warehouse in Tampa, FL.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 flex gap-4">
          <Image
            src="/images/splash-foam/choose-seal3.png"
            alt="splash-foam"
            height={100}
            width={100}
          />
          <div className="flex flex-col justify-center">
            <h2 className="font-bold text-xl">
              +16,000 Orders Shipped Till Date
            </h2>
            <p>
              Join thousands of satisfied customers who have already made the
              switch to Oricle 2.0 - you’re in good hands!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
