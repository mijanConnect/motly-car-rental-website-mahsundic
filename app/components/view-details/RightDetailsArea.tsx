import { Star } from "lucide-react";
import Image from "next/image";
import CarFunctionality from "./CarFunctionality";
import AdditionalFeatures from "./AdditionalFeatures";

export default function DetailsArea() {
  return (
    <>
      <div className="flex gap-1.5 items-baseline">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < 4
                ? "fill-gray-800 text-gray-800"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
        <p className="pl-1.5 text-yellow-400 text-[20px] font-medium">4.5</p>
      </div>
      <div className="mt-1 flex justify-between items-baseline">
        <div>
          <h2 className="text-[32px] font-medium text-primaryText">
            Porsche S60
          </h2>
          <a
            href="#"
            className="text-[18px] text-primaryTextLight mb-3 hover:underline inline-block"
          >
            Or similar upper class
          </a>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-[36px] font-medium text-red-500">€46.91</h3>
          <p className="text-[18px] text-primaryTextLight">Price for 3 days</p>
        </div>
      </div>
      <div className="mt-2 lg:mt-4">
        <Image
          src="/assets/view-details/hertz.png"
          alt="Car Image"
          width={110}
          height={40}
        />
        <a
          href="#"
          className="text-[18px] text-primaryTextLight mt-1.5 hover:underline inline-block"
        >
          About Aurum Cars
        </a>
      </div>

      {/* Car Functionality */}
      <CarFunctionality />

      {/* Additional Features */}
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between mt-6">
        {/* Fuel Policy */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/fuel.png"
          PolicyHeader="Fuel Policy"
          PolicyType="Full to Full"
          PolicyDescription="You can return your rental car with the same fuel level as when you picked it up."
        />

        {/* Kilometers */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/meter.png"
          PolicyHeader="Kilometers"
          PolicyType="Unlimited"
          PolicyDescription="You can drive as much as you want without worrying about extra charges."
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between mt-3">
        {/* Extras */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/add.png"
          PolicyHeader="Extras"
          PolicyType="Included"
          PolicyDescription="Additional features such as GPS, child seats, and more are included in your rental."
        />
        {/* Winter Tires */}
        <AdditionalFeatures
          imageUrl="/assets/view-details/tire.png"
          PolicyHeader="Winter Tires"
          PolicyType="Included"
          PolicyDescription="Your rental car comes equipped with winter tires for safe driving in cold conditions."
        />
      </div>
    </>
  );
}
