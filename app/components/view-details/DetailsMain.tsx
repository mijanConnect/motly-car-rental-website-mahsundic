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
    </>
  );
}
