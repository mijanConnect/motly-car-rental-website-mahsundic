import { Star } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

export default function DetailsMain() {
  return (
    <>
      <div className="flex gap-[50px]">
        <div className="w-[50%]">
          <div className="relative w-full h-[700px]">
            <Image
              src="/assets/view-details/car-1.png"
              alt="Car Image"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
        <div className="w-[50%] pl-4">
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
            <p className="pl-1.5 text-yellow-400 text-[20px] font-medium">
              4.5
            </p>
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
            <div>
              <h3 className="text-[36px] font-medium text-red-500">€46.91</h3>
              <p className="text-[18px] text-primaryTextLight">
                Price for 3 days
              </p>
            </div>
          </div>
          <div className="mt-4">
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
          <div className="flex gap-2 items-center flex-wrap mt-4">
            {/* Doors */}
            <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
              <Image
                src="/assets/view-details/door.png"
                alt="Icon"
                width={32}
                height={32}
              />
              <p className="text-primaryText text-[20px]">4 Doors</p>
            </div>
            {/* Seats */}
            <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
              <Image
                src="/assets/view-details/seat.png"
                alt="Icon"
                width={32}
                height={32}
              />
              <p className="text-primaryText text-[20px]">5 Seats</p>
            </div>
            {/* Suitcase */}
            <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
              <Image
                src="/assets/view-details/suitcase.png"
                alt="Icon"
                width={32}
                height={32}
              />
              <p className="text-primaryText text-[20px]">2 Suitcases</p>
            </div>
            {/* Automatic */}
            <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
              <Image
                src="/assets/view-details/autometic.png"
                alt="Icon"
                width={32}
                height={32}
              />
              <p className="text-primaryText text-[20px]">Automatic</p>
            </div>
            {/* Climate */}
            <div className="flex flex-col gap-2 items-center border px-5 py-2 rounded-sm border-strock">
              <Image
                src="/assets/view-details/climate.png"
                alt="Icon"
                width={32}
                height={32}
              />
              <p className="text-primaryText text-[20px]">Climate</p>
            </div>
          </div>

          <div className="flex gap-6 justify-between mt-6">
            {/* Fuel Policy */}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/view-details/fuel.png"
                  alt="Icon"
                  width={44}
                  height={44}
                />
                <div>
                  <p className="text-[20px] text-primaryText font-medium">
                    Fuel Policy
                  </p>
                  <p className="text-[16px] font-medium text-primary">
                    Full to Full
                  </p>
                </div>
              </div>
              <p className="mt-1.5 text-[16px] text-primaryText">
                You can return your rental car with the same fuel level as when
                you picked it up.
              </p>
            </div>
            {/* Kilometers */}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/view-details/meter.png"
                  alt="Icon"
                  width={44}
                  height={44}
                />
                <div>
                  <p className="text-[20px] text-primaryText font-medium">
                    Unlimited Mileage
                  </p>
                  <p className="text-[16px] font-medium text-primary">
                    70 km Free
                  </p>
                </div>
              </div>
              <p className="mt-1.5 text-[16px] text-primaryText">
                With this rental car, you can drive as many kilometers as you
                like. There are no additional charges.
              </p>
            </div>
          </div>
          <div className="flex gap-6 justify-between mt-4">
            {/* Extras */}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/view-details/add.png"
                  alt="Icon"
                  width={44}
                  height={44}
                />
                <div>
                  <p className="text-[20px] text-primaryText font-medium">
                    Extras
                  </p>
                  <p className="text-[16px] font-medium text-primary">
                    Including
                  </p>
                </div>
              </div>
              <p className="mt-1.5 text-[16px] text-primaryText">
                You can add or remove extras in the Station & Extras booking
                step
              </p>
            </div>
            {/* Winter Tires */}
            <div className="flex-1">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/view-details/tire.png"
                  alt="Icon"
                  width={44}
                  height={44}
                />
                <div>
                  <p className="text-[20px] text-primaryText font-medium">
                    Winter Tires
                  </p>
                  <p className="text-[16px] font-medium text-primary">
                    Including
                  </p>
                </div>
              </div>
              <p className="mt-1.5 text-[16px] text-primaryText">
                They are optimally equipped for the limited winter tire
                requirement in Germany
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-8 flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="w-full">
              View Details
            </Button>
            <Button variant="primary" size="lg" className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
