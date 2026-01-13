"use client";

import Image from "next/image";
import Button from "../ui/Button";
import { CarFront, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

/* ---------- status color map ---------- */
const STATUS_COLORS: Record<string, string> = {
  Pending: "#F6BB06",
  Completed: "#979997",
  Confirmed: "#39B15B",
  Cancelled: "#EB1616",
  Active: "#2563EB",
};

/* ---------- component ---------- */
interface BookedCarCardProps {
  cars?: Array<{
    id: string;
    name: string;
    status: string;
    vehicleType: string;
    pickup: string;
    return: string;
    image: string;
  }>;
}

export default function BookedCarCard({ cars: propsCars }: BookedCarCardProps) {
  const router = useRouter();
  const carsToDisplay = propsCars || [];

  return (
    <div className="flex flex-col gap-6">
      {carsToDisplay.map((car) => {
        const color = STATUS_COLORS[car.status];

        return (
          <div
            key={car.id}
            className="rounded-2xl border-l-4 border-r-2 border-t-2 border-b-2 max-w-[1200px]"
            style={{ borderColor: color }}
          >
            <div className="p-4 flex flex-col md:flex-row justify-between gap-5">
              {/* image */}
              <div className="border p-2 rounded-sm w-full md:w-auto">
                <div className="relative w-full h-[220px] md:w-[180px] md:h-[180px] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover rounded-sm"
                    priority
                  />
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col lg:flex-row w-full justify-between gap-4">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold text-primaryText">
                      {car.name}
                    </h3>

                    <div className="mt-2">
                      <span
                        className="text-white px-4 py-2 inline-block rounded-full text-sm"
                        style={{ backgroundColor: color }}
                      >
                        {car.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <ul>
                      <li className="mt-1.5 flex items-center gap-2">
                        <CarFront className="h-5 w-5 text-primary" />
                        <p className="text-[18px] text-primaryTextLight">
                          Vehicle Type: {car.vehicleType}
                        </p>
                      </li>

                      <li className="mt-1.5 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-red-500" />
                        <p className="text-[18px] text-primaryTextLight">
                          Pickup: {car.pickup}
                        </p>
                      </li>

                      <li className="mt-1.5 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <p className="text-[18px] text-primaryTextLight">
                          Return: {car.return}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* actions */}
                <div className="flex flex-col justify-end">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button variant="outline" className="w-full md:w-auto">
                      View Details
                    </Button>

                    <Button
                      variant="primary"
                      className="w-full md:w-auto"
                      onClick={() => router.push("/checkout")}
                    >
                      Complete Payment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
