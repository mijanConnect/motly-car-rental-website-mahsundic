"use client";

import React, { useState } from "react";
import ProgressStepper from "./ProgressStepper";
import StationExtras from "./StationExtras";
import YourInformation from "./YourInformation";
import FinalStep from "./FinalStep";
// import ThankYou from "./ThankYou";
// import { Button } from "@/components/ui/button";

export default function Checkout() {
  const steps = ["Station & Extras", "Your Information", "Final Step"];
  const [currentStep, setCurrentStep] = useState(0);

  // const handleNext = () => {
  //   if (currentStep < steps.length - 1) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  // const handleBack = () => {
  //   if (currentStep > 0) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  return (
    <section className="w-full flex flex-col items-center">
      <ProgressStepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={setCurrentStep}
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
      </div>

      {/* <ThankYou /> */}

      {/* Navigation buttons */}
      {/* <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={() => alert("Form submitted!")}>Submit</Button>
        )}
      </div> */}
    </section>
  );
}
