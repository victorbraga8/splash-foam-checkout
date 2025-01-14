import Image from "next/image";

export default function CustomerReview() {
  return (
    <>
      <div className="flex flex-col items-center justify-center relative mt-5">
        <div className="flex items-center w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <h1 className="text-xl font-bold mx-4 whitespace-nowrap">
            Customer Reviews
          </h1>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
      </div>
      <div className="space-y-8 mt-10">
        <div className=" rounded-lg p-6 shadow-sm relative border-2 border-black ">
          <div className="absolute -top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full border bg-black border-black">
            <span className="text-white font-bold text-2xl">“</span>
          </div>

          <h3 className="text-xl font-bold">
            Thank you for giving me my hearing back
          </h3>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500 text-xl">★★★★★</span>
          </div>
          <p className="mt-4 text-gray-600">
            “I thought my hearing was ok and I didn’t need any hearing aids. But
            I noticed that I was saying ‘Huh’ quite often to people that was
            talking to me. I also was always asking for the volume to be turned
            up on the TV.”
          </p>
          <div className="mt-4 flex items-center">
            <span className="font-bold">-Linda C.</span>
            <span className="text-sm text-green-600 ml-2">
              ✔ Verified Customer
            </span>
          </div>
          <Image
            height={50}
            width={50}
            src="/images/splash-foam/rev_img1.jpg"
            alt="Linda"
            className="absolute top-4 right-4 w-12 h-12 rounded-full"
          />
        </div>

        <div className=" rounded-lg p-6 shadow-sm relative border-2 border-black ">
          <div className="absolute -top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full border bg-black border-black">
            <span className="text-white font-bold text-2xl p-2">“</span>
          </div>
          <h3 className="text-xl font-bold">Absolutely love them</h3>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500 text-xl">★★★★★</span>
          </div>
          <p className="mt-4 text-gray-600">
            “I purchased a pair of Oricle Hearing aid 2.0 and love them. I had
            purchased a pair of Starkey hearing aids which I had paid $3,800.00
            for and the hearing on the Oricle 2.0 is 5 times better and I only
            have it set on half power. Absolutely love them.”
          </p>
          <div className="mt-4 flex items-center">
            <span className="font-bold">-Ron K.</span>
            <span className="text-sm text-green-600 ml-2">
              ✔ Verified Customer
            </span>
          </div>
          <Image
            height={50}
            width={50}
            src="/images/splash-foam/rev_img2.jpg"
            alt="Ron"
            className="absolute top-4 right-4 w-12 h-12 rounded-full"
          />
        </div>
        <div className=" rounded-lg p-6 shadow-sm relative border-2 border-black ">
          <div className="absolute -top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full border bg-black border-black">
            <span className="text-white font-bold text-2xl p-2">“</span>
          </div>
          <h3 className="text-xl font-bold">I am completely satisfied</h3>
          <div className="mt-2 flex items-center">
            <span className="text-yellow-500 text-xl">★★★★★</span>
          </div>
          <p className="mt-4 text-gray-600">
            “I have had several hearing devices over the past few years. They
            all have been relatively satisfactory, most after testing for my
            hearing deficiency and adjusting for the frequencies most in need of
            amplification and ambient conditions.”
          </p>
          <div className="mt-4 flex items-center">
            <span className="font-bold">-Donald F. </span>
            <span className="text-sm text-green-600 ml-2">
              ✔ Verified Customer
            </span>
          </div>
          <Image
            height={50}
            width={50}
            src="/images/splash-foam/rev_img2.jpg"
            alt="Ron"
            className="absolute top-4 right-4 w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </>
  );
}
