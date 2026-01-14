"use client";

import { useSearchParams, useRouter } from "next/navigation";
import ProgressStepper from "./ProgressStepper";
import StationExtras from "./StationExtras";
import YourInformation from "./YourInformation";
import FinalStep from "./FinalStep";
import ThankYou from "./ThankYou";

export default function Checkout() {
  const steps = ["Station & Extras", "Your Information", "Final Step"];
  const searchParams = useSearchParams();
  const router = useRouter();

  // Derive current step from URL
  const stepParam = searchParams.get("step");
  const currentStep = stepParam
    ? Math.max(0, Math.min(parseInt(stepParam) - 1, steps.length))
    : 0;

  // Update URL when step changes
  const handleStepClick = (stepIndex: number) => {
    if (stepIndex < steps.length) {
      router.push(`/checkout?step=${stepIndex + 1}`);
    }
  };

  return (
    <section className="w-full flex flex-col items-center">
      <ProgressStepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
        className="mb-2 lg:mb-8 w-full lg:max-w-5xl"
      />

      {/* Conditional content based on current step */}
      <div className="mb-8 w-full">
        {currentStep === 0 && (
          <div>
            <StationExtras />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <YourInformation />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <FinalStep />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <ThankYou />
          </div>
        )}
      </div>
    </section>
  );
}
