import MainDriverDetails from "./second-step/MainDriverDetails";
import Overview from "./second-step/Overview";
import PaymentMethod from "./second-step/PaymentMethod";

export default function YourInformation() {
  return (
    <>
      <div className="mt-2 lg:mt-6">
        <MainDriverDetails />
        <PaymentMethod />
        <Overview />
      </div>
    </>
  );
}
