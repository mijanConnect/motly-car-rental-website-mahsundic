"use client"; 

import { useState } from "react";

export default function BookingTab() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["All", "Upcoming", "Running", "Completed"];

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 12 }}>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #ccc",
              cursor: "pointer",
              backgroundColor: activeTab === index ? "#2563eb" : "#fff",
              color: activeTab === index ? "#fff" : "#000",
              fontWeight: 500,
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        {activeTab === 0 && <div>Upcoming bookings</div>}
        {activeTab === 1 && <div>Completed bookings</div>}
        {activeTab === 2 && <div>Cancelled bookings</div>}
        {activeTab === 3 && <div>All bookings</div>}
      </div>
    </div>
  );
}
