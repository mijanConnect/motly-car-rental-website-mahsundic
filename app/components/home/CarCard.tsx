"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Star } from "lucide-react";

export default function CarCard() {
  const [rating] = useState(3); // Can be changed to 4, 3, 2, 1, etc.

  return (
    <>
      <div className="mt-[42px] p-4 border border-gray-300 rounded-lg shadow-md">
        <div className="flex justify-between">
          <div className="flex-7/3">
            <div className="flex gap-5 w-full pr-5 border-r border-gray-300">
              {/* Image part */}
              <div className="relative w-[214px] h-[196px] overflow-hidden shrink-0">
                <Image
                  src="/assets/card/car-1.png"
                  alt="Car Image"
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              {/* Right Side part */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-[22px]">Audi S60</h2>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating
                            ? "fill-gray-800 text-gray-800"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className="text-[16px] text-primaryParagraphLight mb-3 hover:underline inline-block"
                >
                  Or similar upper class
                </a>
                {/* Car specifications */}
                <div className="flex gap-3 items-center flex-wrap mb-3">
                  {/* Doors */}
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/assets/card/door.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <p className="text-primaryParagraph text-[16px]">4 Doors</p>
                  </div>
                  {/* Seats */}
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/assets/card/seat.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <p className="text-primaryParagraph text-[16px]">4 Seats</p>
                  </div>
                  {/* Suitcase */}
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/assets/card/suitcase.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <p className="text-primaryParagraph text-[16px]">
                      4 Suitcases
                    </p>
                  </div>
                  {/* Automatic */}
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/assets/card/automatic.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <p className="text-primaryParagraph text-[16px]">
                      Automatic
                    </p>
                  </div>
                  {/* Climate */}
                  <div className="flex gap-[5px] items-center">
                    <Image
                      src="/assets/card/climate.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <p className="text-primaryParagraph text-[16px]">Climate</p>
                  </div>
                </div>
                {/* Fuel Policy and Kilometers */}
                <div className="flex gap-6">
                  {/* Fuel Policy */}
                  <div className="flex gap-3 items-start">
                    <Image
                      src="/assets/card/fuel.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <div>
                      <p className="text-[16px] text-primaryParagraph">
                        Fuel Policy
                      </p>
                      <p className="text-[16px] font-medium text-primaryParagraph">
                        Fair
                      </p>
                    </div>
                  </div>
                  {/* Kilometers */}
                  <div className="flex gap-3 items-start">
                    <Image
                      src="/assets/card/kilometers.png"
                      alt="Icon"
                      width={18}
                      height={18}
                    />
                    <div>
                      <p className="text-[16px] text-primaryParagraph">
                        Kilometers
                      </p>
                      <p className="text-[16px] font-medium text-primaryParagraph">
                        1,400 km Free
                      </p>
                    </div>
                  </div>
                </div>
                {/* Information */}
                <div className="mt-4 flex gap-2 items-center">
                  <Image
                    src="/assets/card/info.png"
                    alt="Icon"
                    width={18}
                    height={18}
                  />
                  <p className="text-[14px] text-gray-500">
                    Comprehensive insurance and theft protection{" "}
                    <span className="font-semibold">and deposit of €250</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-7/4"></div>
        </div>
      </div>
    </>
  );
}
