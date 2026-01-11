"use client";

import { useState } from "react";

type Section = {
  title: string;
  items: string[];
};

const sections: Section[] = [
  {
    title: "Number of seats",
    items: ["2 Seats", "4 Seats", "5 Seats", "7 Seats", "9 Seats"],
  },
  {
    title: "Transmission",
    items: ["Automatic", "Manual"],
  },
  {
    title: "Fuel type",
    items: ["Petrol", "Diesel", "Electric", "Hybrid"],
  },
  {
    title: "Number of doors",
    items: ["2 Doors", "4 Doors", "5 Doors"],
  },
  {
    title: "Mileage limit",
    items: [
      "Unlimited Mileage",
      "200km per day limit",
      "400km per day limit",
      "500km per day limit",
    ],
  },
  {
    title: "Fuel policy",
    items: ["Full to Full", "Full to Empty"],
  },
  {
    title: "Rating and popularity",
    items: ["Top Rated", "Most Popular"],
  },
];

export default function FilterAccordion() {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [checked, setChecked] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  const handleMinChange = (value: number) => {
    setPriceRange(([_, max]) => [Math.min(value, max - 10), max]);
  };

  const handleMaxChange = (value: number) => {
    setPriceRange(([min, _]) => [min, Math.max(value, min + 10)]);
  };

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleItem = (value: string) => {
    setChecked((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="border mt-4 border-stroke rounded-lg p-4">
      {/* Price range filter */}
      <div className=" border-b pb-4 border-stroke">
        <p className="text-sm font-medium text-primaryText mb-3">Price range</p>

        <div className="relative h-2 bg-gray-200 rounded">
          <div
            className="absolute h-2 bg-gray-400 rounded"
            style={{
              left: `${(priceRange[0] / 500) * 100}%`,
              right: `${100 - (priceRange[1] / 500) * 100}%`,
            }}
          />
        </div>

        <div className="relative">
          <input
            type="range"
            min={0}
            max={500}
            value={priceRange[0]}
            onChange={(e) => handleMinChange(Number(e.target.value))}
            className="absolute -top-3 w-full pointer-events-auto appearance-none bg-transparent"
          />

          <input
            type="range"
            min={0}
            max={500}
            value={priceRange[1]}
            onChange={(e) => handleMaxChange(Number(e.target.value))}
            className="absolute -top-3 w-full pointer-events-auto appearance-none bg-transparent"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>€{priceRange[0]}</span>
          <span>€{priceRange[1]}</span>
        </div>
      </div>

      {/* Filters */}
      <div className="w-full max-w-sm">
        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);

          return (
            <div key={section.title} className="border-b last:border-b-0">
              <div className="py-3">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full items-center justify-between"
                >
                  <p className="text-sm font-medium text-primaryText">
                    {section.title}
                  </p>
                  <svg
                    className={`h-4 w-4 text-primaryText transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-3 pb-4">
                  {section.items.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center justify-between text-sm text-primaryText"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={checked.includes(item)}
                          onChange={() => toggleItem(item)}
                          className="h-4 w-4 rounded border-stroke text-green-600 focus:ring-green-500"
                        />
                        <span>{item}</span>
                      </div>
                      <span className="text-gray-500">174 €</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
