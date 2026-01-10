import ExtraAccessories from "./ExtraAccessories";
import SelectedCarDetails from "./SelectedCarDetails";
import PickupInfor from "./PickupInfor";
import Button from "../ui/Button";

export default function StationExtras() {
  return (
    <>
      <div className="border border-stroke p-6 rounded-lg mt-6">
        <PickupInfor />
      </div>
      <div className="mt-15 border border-stroke rounded-md">
        <SelectedCarDetails />
      </div>
      {/* Extras */}
      <div className="p-6 mt-15 border border-stroke rounded-md">
        <h2 className="text-[24px] font-semibold text-primaryText">
          Select extra and accessories
        </h2>
        <div className="mt-6">
          <ExtraAccessories />
        </div>
      </div>
      <div className="flex justify-center">
        {/* Spacer for bottom fixed bar */}
        <Button className="mt-8 w-full lg:w-[350px]">
          Continue to your details
        </Button>
      </div>
    </>
  );
}
