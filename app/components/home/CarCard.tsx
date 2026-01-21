"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import { Car } from "@/types/product";
import { useRouter } from "next/navigation";
import {
  Autometic,
  Climate,
  Door,
  FuelTank,
  Information,
  Maestro,
  Meter,
  PayPal,
  Seat,
  Suitcase,
  Visa,
} from "../Svg";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const router = useRouter();

  return (
    <>
      <div className="p-4 border border-stroke rounded-lg hover:shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:bg-gray-50 transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className="flex-7/3">
            <div className="flex flex-col md:flex-row gap-5 w-full pr-0 lg:pr-5 border-0 lg:border-r border-stroke">
              {/* Image part */}
              <div className="relative w-full md:w-[200px] h-[300px] md:h-[180px] overflow-hidden shrink-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              {/* Right Side part */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-[20px]">{car.name}</h2>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < car.star
                            ? "fill-gray-800 text-gray-800"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[14px] text-primaryTextLight mb-3 hover:underline inline-block"
                >
                  Or similar upper class
                </a>
                {/* Car specifications */}
                <div className="flex gap-3 items-center flex-wrap mb-3">
                  {/* Doors */}
                  <div className="flex gap-[5px] items-center">
                    <Door width={18} height={18} />
                    <p className="text-primaryText text-[14px]">
                      {car.doors} Doors
                    </p>
                  </div>
                  {/* Seats */}
                  <div className="flex gap-[5px] items-center">
                    <Seat width={18} height={18} />
                    <p className="text-primaryText text-[14px]">
                      {car.seats} Seats
                    </p>
                  </div>
                  {/* Suitcase */}
                  <div className="flex gap-[5px] items-center">
                    <Suitcase width={18} height={18} />
                    <p className="text-primaryText text-[14px]">
                      {car.suitcases} Suitcases
                    </p>
                  </div>
                  {/* Automatic */}
                  <div className="flex gap-[5px] items-center">
                    <Autometic width={18} height={18} />
                    <p className="text-primaryText text-[14px]">
                      {car.transmission}
                    </p>
                  </div>
                  {/* Climate */}
                  <div className="flex gap-[5px] items-center">
                    <Climate width={18} height={18} />
                    <p className="text-primaryText text-[14px]">
                      {car.climate}
                    </p>
                  </div>
                </div>
                {/* Fuel Policy and Kilometers */}
                <div className="flex gap-6">
                  {/* Fuel Policy */}
                  <div className="flex gap-3 items-start">
                    <FuelTank width={18} height={18} />
                    <div>
                      <p className="text-[14px] text-primaryText">
                        Fuel Policy
                      </p>
                      <p className="text-[14px] font-medium text-primaryText">
                        {car.fuelPolicy}
                      </p>
                    </div>
                  </div>
                  {/* Kilometers */}
                  <div className="flex gap-3 items-start">
                    <Meter width={18} height={18} />
                    <div>
                      <p className="text-[14px] text-primaryText">Kilometers</p>
                      <p className="text-[14px] font-medium text-primaryText">
                        {car.kilometers} km Free
                      </p>
                    </div>
                  </div>
                </div>
                {/* Information */}
                <div className="mt-4 flex gap-2 items-start">
                  <Information width={18} height={18} />
                  <p className="text-[14px] text-primaryText">
                    Comprehensive insurance and theft protection{" "}
                    <span className="font-semibold">
                      and deposit of €{car.deposit}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Card Right side */}
          <div className="flex-7/4 pl-0 lg:pl-8">
            {/* <div className="flex justify-between">
              <div>
                <p className="text-xl text-primaryText">Terrific</p>
                <p className="text-[16px] text-primaryTextLight">
                  Offer Evaluation
                </p>
              </div>
              <div>
                <p className="bg-[#F29D26] p-3 text-xl font-semibold text-white rounded-sm">
                  {car.rating}
                </p>
              </div>
            </div> */}
            {/* <div className="flex justify-between mt-5"> */}
            <div className="flex justify-between">
              {/* <div> */}
              <div>
                <p className="text-[20px] font-medium text-primaryText">
                  €{car.price}
                </p>
                <p className="text-[14px] text-primaryText">
                  Price for {car.days} days
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="border border-gray-100 rounded-sm h-[34px] w-[50px] flex items-center justify-center">
                  <PayPal />
                </div>
                <div className="border border-gray-100 rounded-sm h-[34px] w-[50px] flex items-center justify-center">
                  <Visa />
                </div>
                <div className="border border-gray-100 rounded-sm h-[34px] w-[50px] flex items-center justify-center">
                  <Maestro />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-8 flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-[150px]"
                onClick={() => router.push(`/checkout/${car.id}`)}
              >
                Book Now
              </Button>

              <Button
                variant="outline"
                size="md"
                className="w-full sm:w-[150px]"
                onClick={() => router.push(`/view-details/${car.id}`)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
