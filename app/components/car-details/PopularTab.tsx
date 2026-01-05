"use client";

import { useState } from "react";

const tabs = [
  { id: "highest", label: "Highest offer rating" },
  { id: "new", label: "New" },
  { id: "recommended", label: "Recommended" },
  { id: "low", label: "Lowest price" },
];

export default function PopularTab() {
  const [activeTab, setActiveTab] = useState("highest");

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b border-stroke overflow-x-scroll scrollbar-hide w-[350px] sm:w-[560px] md:w-[720px] xl:w-auto xl:overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-[16px] font-medium rounded-md transition-all duration-300 text-nowrap ${
              activeTab === tab.id
                ? "text-primary"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute left-0 -bottom-px w-full h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {/* <div className="relative mt-6">
        <div
          className={`transition-opacity duration-300 ${
            activeTab === "highest"
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <p className="text-gray-700">
            Popular cars based on customer bookings.
          </p>
        </div>

        <div
          className={`transition-opacity duration-300 ${
            activeTab === "new"
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <p className="text-gray-700">
            Recently added cars in our collection.
          </p>
        </div>

        <div
          className={`transition-opacity duration-300 ${
            activeTab === "recommended"
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <p className="text-gray-700">
            Recommended cars specially selected for you.
          </p>
        </div>

        <div
          className={`transition-opacity duration-300 ${
            activeTab === "low"
              ? "opacity-100"
              : "opacity-0 absolute inset-0 pointer-events-none"
          }`}
        >
          <p className="text-gray-700">
            Budget friendly cars with lowest price.
          </p>
        </div>
      </div> */}
    </div>
  );
}
