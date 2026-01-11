"use client";

import { useState } from "react";
import AllBooking from "./AllBooking";
import Upcoming from "./Upcoming";
import Running from "./Running";
import Completed from "./Completed";

export default function BookingTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["All", "Upcoming", "Running", "Completed"];

  return (
    <div className="">
      <div className="flex flex-wrap gap-5">
        {tabs.map((tab, index) => {
          const isActive = activeTab === index;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`w-[180px] rounded-md px-4 py-3 text-sm font-normal transition cursor-pointer
                ${
                  isActive
                    ? "border border-blue-600 bg-blue-600 text-white"
                    : "border border-gray-300 bg-white text-black hover:border-blue-600"
                }`}
            >
              {tab} (4)
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-sm text-gray-700">
        {activeTab === 0 && <AllBooking />}
        {activeTab === 1 && <Upcoming />}
        {activeTab === 2 && <Running />}
        {activeTab === 3 && <Completed />}
      </div>
    </div>
  );
}
