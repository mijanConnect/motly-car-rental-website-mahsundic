"use client";

import { useState } from "react";

type Section = {
  title: string;
  items: string[];
};

const sections: Section[] = [
  {
    title: "Other popular filters",
    items: [
      "Berlin Brandenburg",
      "In the terminal",
      "City Stations",
      "Premium Protection",
      "Unlimited Kilometers",
      "Additional Driver",
      "Fair Fuel Policy",
      "Good Customer Review",
      "Available Immediately",
      "Without a Credit Card",
    ],
  },
  {
    title: "Vehicle class and type",
    items: [
      "Small cars",
      "Compact class",
      "Upper class",
      "Premium class",
      "Unlimited Kilometers",
      "Additional Driver",
    ],
  },
];

export default function FilterAccordion() {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [checked, setChecked] = useState<string[]>([]);

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
    <div className="border mt-4 border-gray-300 rounded-lg p-4">
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
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
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
