"use client";

import { useRouter } from "next/navigation";
import FinalStepContainer from "./third-step/FinalStepContainer";
import Button from "../ui/Button";

export default function FinalStep() {
  const router = useRouter();

  const handleConfirmAndBook = () => {
    router.push("/checkout?step=4");
  };

  return (
    <>
      <div>
        <div>
          <FinalStepContainer />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button className="w-full lg:w-[350px]" onClick={handleConfirmAndBook}>
          Confirm and Book Now
        </Button>
      </div>
    </>
  );
}
