"use client";

import { useState } from "react";
import {
  LuxuryCar,
  CompactCar,
  PremiumCar,
  MiddleClassCar,
  UpperClassCar,
  Transporter,
} from "../CarSvg";

type CategoryItem = {
  id: number;
  name: string;
  price: number;
};

const categories: CategoryItem[] = [
  {
    id: 1,
    name: "Luxury Cars",
    price: 220,
  },
  {
    id: 2,
    name: "Compact Class",
    price: 260,
  },
  {
    id: 3,
    name: "Premium Class",
    price: 283,
  },
  {
    id: 4,
    name: "Middle Class",
    price: 300,
  },
  {
    id: 5,
    name: "Upper Cars",
    price: 650,
  },
  {
    id: 6,
    name: "Transporters",
    price: 280,
  },
];

const getIconComponent = (categoryId: number) => {
  switch (categoryId) {
    case 1:
      return LuxuryCar;
    case 2:
      return CompactCar;
    case 3:
      return PremiumCar;
    case 4:
      return MiddleClassCar;
    case 5:
      return UpperClassCar;
    case 6:
      return Transporter;
    default:
      return LuxuryCar;
  }
};

export default function Category() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="border border-stroke rounded-lg p-1 lg:p-3 overflow-hidden">
      <ul className="flex justify-between gap-1 lg:gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {categories.map((category) => {
          const isSelected = selectedId === category.id;
          const isHovered = hoveredId === category.id;
          const iconColor = isSelected || isHovered ? "white" : "black";
          const IconComponent = getIconComponent(category.id);
          return (
            <li key={category.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedId(category.id);
                }}
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`inline-block transform transition-all duration-300 px-6 py-3 rounded-sm group
                  ${
                    isSelected
                      ? "bg-blue-400 text-white"
                      : "hover:bg-blue-400 hover:text-white"
                  }
                `}
              >
                <div className="flex flex-col items-center">
                  <IconComponent width={42} height={42} color={iconColor} />

                  <p
                    className={`text-[14px] lg:text-[16px] font-medium text-nowrap transition-colors duration-300 ${iconColor === "white" ? "text-white" : "text-black"}`}
                  >
                    {category.name}
                  </p>
                  <p
                    className={`text-[14px] lg:text-[16px] text-nowrap transition-colors duration-300 ${iconColor === "white" ? "text-white" : "text-black"}`}
                  >
                    From €{category.price}
                  </p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
