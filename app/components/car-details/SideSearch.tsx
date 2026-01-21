"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, CalendarArrowUp, CalendarArrowDown, X } from "lucide-react";
import Button from "../ui/Button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function SideSearch() {
  const [collectionDate, setCollectionDate] = useState<Date | undefined>(
    new Date(2026, 11, 11),
  );
  const [collectionTime, setCollectionTime] = useState<string>("11:00");
  const [returnDate, setReturnDate] = useState<Date | undefined>(
    new Date(2026, 11, 11),
  );
  const [returnTime, setReturnTime] = useState<string>("11:00");
  const [openCollection, setOpenCollection] = useState(false);
  const [openReturn, setOpenReturn] = useState(false);
  const collectionRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        collectionRef.current &&
        !collectionRef.current.contains(event.target as Node)
      ) {
        setOpenCollection(false);
      }
      if (
        returnRef.current &&
        !returnRef.current.contains(event.target as Node)
      ) {
        setOpenReturn(false);
      }
    };

    if (openCollection || openReturn) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCollection, openReturn]);

  const formatDate = (date: Date | undefined) => {
    if (!date) return "Select date";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="border border-stroke p-3 rounded-lg">
        {/* Search Bar */}
        <div className="flex items-center gap-2 border-b pb-1 mb-3 border-stroke">
          <MapPin className="h-4 sm:h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Enter location"
            className="flex-1 border-none outline-none font-medium text-[14px] sm:text-[16px]"
          />
        </div>
        {/* Date and Time Selection */}
        <div className="flex flex-col gap-2">
          {/* Collection Date and Time */}
          <div ref={collectionRef} className="relative w-full">
            <div
              className="border border-stroke rounded-sm w-full cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setOpenCollection(!openCollection)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 flex flex-col gap-1 border-r border-stroke p-3">
                  <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                    Collection
                  </p>
                  <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                    {formatDate(collectionDate)}
                  </p>
                </div>
                <div className="flex-1 p-3 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                      Time
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                      {collectionTime}
                    </p>
                  </div>
                  <div>
                    <CalendarArrowUp className="h-4 sm:h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {openCollection && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stroke rounded-lg shadow-xl z-50 p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold">Select Date</p>
                    <button
                      onClick={() => setOpenCollection(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <Calendar
                    value={collectionDate}
                    onChange={(value) => {
                      if (value instanceof Date) {
                        setCollectionDate(value);
                      }
                    }}
                    minDate={new Date()}
                  />
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Time</p>
                    <input
                      type="time"
                      value={collectionTime}
                      onChange={(e) => setCollectionTime(e.target.value)}
                      className="border border-stroke rounded px-3 py-2 w-full text-sm"
                    />
                  </div>
                  <button
                    onClick={() => setOpenCollection(false)}
                    className="w-full bg-primary text-white py-2 rounded hover:opacity-90 text-sm font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Return Date and Time */}
          <div ref={returnRef} className="relative w-full">
            <div
              className="border border-stroke rounded-sm w-full cursor-pointer hover:bg-gray-50 transition"
              onClick={() => setOpenReturn(!openReturn)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1 flex flex-col gap-1 border-r border-stroke p-3">
                  <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                    Return
                  </p>
                  <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                    {formatDate(returnDate)}
                  </p>
                </div>
                <div className="flex-1 p-3 flex justify-between items-end">
                  <div className="flex flex-col gap-1">
                    <p className="text-[14px] sm:text-[16px] text-primaryParagraph font-medium">
                      Time
                    </p>
                    <p className="text-[12px] sm:text-[14px] text-primaryParagraph">
                      {returnTime}
                    </p>
                  </div>
                  <div>
                    <CalendarArrowDown className="h-4 sm:h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>

            {openReturn && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-stroke rounded-lg shadow-xl z-50 p-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-semibold">Select Date</p>
                    <button
                      onClick={() => setOpenReturn(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <Calendar
                    value={returnDate}
                    onChange={(value) => {
                      if (value instanceof Date) {
                        setReturnDate(value);
                      }
                    }}
                    minDate={collectionDate || new Date()}
                  />
                  <div>
                    <p className="text-sm font-semibold mb-2">Select Time</p>
                    <input
                      type="time"
                      value={returnTime}
                      onChange={(e) => setReturnTime(e.target.value)}
                      className="border border-stroke rounded px-3 py-2 w-full text-sm"
                    />
                  </div>
                  <button
                    onClick={() => setOpenReturn(false)}
                    className="w-full bg-primary text-white py-2 rounded hover:opacity-90 text-sm font-medium"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <Button
          className="w-full mt-4 border-primaryTextLight! text-primaryText! hover:bg-primaryTextLight/10 rounded-sm "
          variant="outline"
          size="md"
        >
          Search
        </Button>
      </div>
    </>
  );
}
