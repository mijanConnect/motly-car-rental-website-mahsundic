import Image from "next/image";
import Button from "../ui/Button";
import { CarFront, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookedCarCard() {
  const router = useRouter();

  return (
    <>
      <div className=" border-l-5 border-r-2 border-t-2 border-b-2 border-primary rounded-2xl">
        <div className="p-4 flex flex-col md:flex-row justify-between gap-5">
          <div>
            <div className="flex gap-4">
              <div className="border p-2 rounded-sm w-full md:w-auto">
                <div className="relative w-full h-[220px] md:w-[180px] md:h-[180px] overflow-hidden">
                  <Image
                    src="/assets/view-details/car-1.png"
                    alt="Car Image"
                    fill
                    className="object-cover rounded-sm"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="order-1 md:order-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[20px] font-bold text-primaryText">
                  Ford Fiesta-or similar small cars
                </h3>
                <div className="mt-2 flex gap-4">
                  <p className="bg-yellow-500 text-white px-4 py-2 inline-block rounded-full">
                    Completed
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <ul>
                  <li className="description mt-1.5 flex items-center gap-2">
                    <CarFront className="h-5 w-5 text-primary" />
                    <p className="text-[18px] text-primaryTextLight">
                      Vehicle Type: SUV
                    </p>
                  </li>
                  <li className="description mt-1.5 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-red-500" />
                    <p className="text-[18px] text-primaryTextLight">
                      Pickup: Mon, Dec 11, 2026, 1:00 PM
                    </p>
                  </li>
                  <li className="description mt-1.5 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <p className="text-[18px] text-primaryTextLight">
                      Return: Thu, Dec 14, 2026, 1:00 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-2 md:order-2 flex flex-col justify-end">
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
    </>
  );
}
