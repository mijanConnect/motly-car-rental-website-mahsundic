"use client";

import React, { useState } from "react";
import ProgressStepper from "./ProgressStepper";
import StationExtras from "./StationExtras";
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
    <section className="w-full flex flex-col items-center px-4 lg:px-0">
      <ProgressStepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={setCurrentStep}
        className="mb-8 w-full max-w-4xl"
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
            <StationExtras />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <StationExtras />
          </div>
        )}
      </div>

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
