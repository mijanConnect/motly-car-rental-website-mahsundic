import AddressDetails from "./second-step/AddressDetails";
import MainDriverDetails from "./second-step/MainDriverDetails";
import PaymentMethod from "./second-step/PaymentMethod";

export default function YourInformation() {
  return (
    <>
      <div className="mt-2 lg:mt-6">
        <MainDriverDetails />
        <AddressDetails />
        <PaymentMethod />
      </div>
    </>
  );
}
