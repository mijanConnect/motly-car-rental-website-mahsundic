import React from "react";
import BookedCar from "./BookedCar";
import PriceCard from "./PriceCard";

export default function FinalStepContainer() {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row gap-12 items-start mt-10">
        <BookedCar />
        <PriceCard />
      </div>
    </>
  );
}
