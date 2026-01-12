import AddressDetails from "./second-step/AddressDetails";
import MainDriverDetails from "./second-step/MainDriverDetails";

export default function YourInformation() {
  return (
    <>
      <div className="mt-2 lg:mt-6">
        <MainDriverDetails />
        <AddressDetails />
      </div>
    </>
  );
}
