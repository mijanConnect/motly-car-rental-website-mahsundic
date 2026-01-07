import Image from "next/image";
import Button from "../ui/Button";
import ImageArea from "./DetailsImageArea";
import DetailsArea from "./RightDetailsArea";

export default function DetailsMain() {
  return (
    <>
      <div className="flex gap-[50px]">
        {/* Image Area */}
        <div className="w-[50%]">
          <ImageArea />
        </div>

        {/* Details Area */}
        <div className="w-[50%] pl-4">
          <DetailsArea />

          {/* Booking Buttons */}
          <div className="flex justify-end mt-8 flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" className="w-full">
              View Reviews
            </Button>
            <Button variant="primary" size="lg" className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Insurance Section */}
      <div className="mt-15">
        <h2 className="font-semibold text-[32px] text-primaryText mb-4">
          Insurance coverage
        </h2>
        <div>
          <section className="w-full bg-white">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Insurance Coverage
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Liability Insurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  €50,000,000 coverage for personal injury and €50,000,000
                  coverage for property damage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Comprehensive and Theft Insurance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive and theft insurance may apply with a deductible.
                  Reimbursement of the deductible by AurumCars is possible
                  depending on the selected package.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">
                  Additional Coverage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deductible reimbursement also applies to damage to the
                  underbody, tires, glass, and roof.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Payment terms Section */}
      <div className="mt-15">
        <h2 className="font-semibold text-[32px] text-primaryText mb-3">
          Payment terms
        </h2>
        <h3 className="font-medium text-[22px]">Possible payment methods</h3>
        <div>
          <div className="flex items-center gap-10 mt-3">
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/view-details/PayPal.png"
                alt="Icon"
                width={75}
                height={50}
                className="h-[50px] w-[75px]"
              />
              <p className="text-[20px] text-primaryText">PayPal</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/view-details/amex.png"
                alt="Icon"
                width={75}
                height={50}
                className="h-[50px] w-[75px]"
              />
              <p className="text-[20px] text-primaryText">American Express</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/view-details/Visa.png"
                alt="Icon"
                width={75}
                height={50}
                className="h-[50px] w-[75px]"
              />
              <p className="text-[20px] text-primaryText">Visa Card</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/view-details/Maestro.png"
                alt="Icon"
                width={75}
                height={50}
                className="h-[50px] w-[75px]"
              />
              <p className="text-[20px] text-primaryText">Maestro Card</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions & Rental Conditions */}
      <div className="mt-15">
        <h2 className="font-semibold text-[32px] text-primaryText mb-4">
          Terms and Conditions & Rental Conditions
        </h2>
        <div>
          <section className="w-full bg-white text-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Insurance Coverage and Included Services
            </h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Liability Insurance
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>€50,000,000 for personal injury</li>
              <li>€50,000,000 for property damage</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Comprehensive and Theft Insurance
            </h3>
            <p className="leading-relaxed">
              Comprehensive and theft insurance may apply with a deductible.
              Subsequent reimbursement of the deductible by
              <span className="font-semibold"> AurumCars </span>
              is possible depending on the selected package.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Additional Coverage
            </h3>
            <p className="leading-relaxed mb-2">
              Subsequent reimbursement of the deductible also applies to damage
              to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Underbody</li>
              <li>Tires</li>
              <li>Glass</li>
              <li>Roof</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Included Services
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Local taxes on the booked rental car package</li>
              <li>Airport fees</li>
              <li>Air conditioning</li>
              <li>Winter tires</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Fuel Conditions
            </h3>
            <p className="leading-relaxed">
              The vehicle must be returned with the same fuel level as when it
              was picked up.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
              Terms and Conditions of the Local Vehicle Fleet Provider
            </h3>
            <p className="leading-relaxed">
              This deposit can only be paid by credit card in the name of the
              main driver.
            </p>

            <p className="leading-relaxed mt-2">
              <span className="font-semibold">Note:</span>
              When booking the
              <span className="italic">No Credit Card Required</span> package,
              the deposit can also be paid using a German debit card
              (Girocard/EC card) issued to the main driver.
            </p>

            <p className="leading-relaxed mt-2 text-red-600 font-medium">
              Important: A credit card is only not required on-site if the main
              driver is a resident of Germany. A national identity card is
              required to verify your current address.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
