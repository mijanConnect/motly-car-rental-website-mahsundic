"use client";

import { useState } from "react";

const tabs = [
  { id: "Highest offer rating", label: "Highest offer rating" },
  { id: "popularity", label: "Popularity" },
  { id: "Best customer rating", label: "Best customer rating" },
  { id: "Lowest Price", label: "Lowest Price" },
];

export default function PopularTab() {
  const [activeTab, setActiveTab] = useState("Highest offer rating");

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="flex gap-4 border-b border-stroke">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 text-[18px] font-medium rounded-md transition-all duration-300
              ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-gray-600 hover:text-gray-800"
              }
            `}
          >
            {tab.label}

            {/* Bottom Indicator */}
            {activeTab === tab.id && (
              <span className="absolute left-0 -bottom-px w-full h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative mt-6">
        <div
          className={`transition-opacity duration-300 ${
            activeTab === "Highest offer "
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
      </div>
    </div>
  );
}
