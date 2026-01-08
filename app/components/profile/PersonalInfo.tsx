"use client";

import { useState } from "react";
import InputField from "../ui/InputField";
import ProfileImage from "./ProfileImage";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    phone: "",
    gender: "",
    street: "",
    postalCode: "",
    country: "",
    city: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="my-6 lg:my-15 inline-block p-8 rounded-lg border border-gray-200">
      <ProfileImage />
      <div className="flex gap-12 mt-10">
        {/* Left side */}
        <div>
          <h2 className="mb-4 text-[20px] font-semibold">
            Personal Information
          </h2>
          <div className="flex flex-col gap-4">
            <InputField
              title="First Name"
              type="text"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />

            <InputField
              title="Last Name"
              type="text"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />

            <InputField
              title="Email Address"
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />

            <InputField
              title="Birth Date"
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleChange("birthDate", e.target.value)}
            />

            <InputField
              title="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />

            {/* Gender */}
            <SelectField
              title="Select Gender"
              value={formData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
          </div>
        </div>
        {/* Right side */}
        <div>
          <h2 className="mb-4 text-[20px] font-semibold">
            Residential Address
          </h2>
          <div className="flex flex-col gap-4">
            <InputField
              title="Street and House Number"
              type="text"
              placeholder="Enter street and house number"
              value={formData.street}
              onChange={(e) => handleChange("street", e.target.value)}
            />

            <InputField
              title="Postal Code"
              type="text"
              placeholder="Enter postal code"
              value={formData.postalCode}
              onChange={(e) => handleChange("postalCode", e.target.value)}
            />

            {/* Country */}
            <SelectField
              title="Choose Country"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              options={[
                { label: "Bangladesh", value: "bangladesh" },
                { label: "India", value: "india" },
                { label: "USA", value: "usa" },
              ]}
            />

            {/* City */}
            <SelectField
              title="Choose City"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              options={[
                { label: "Dhaka", value: "dhaka" },
                { label: "Chittagong", value: "chittagong" },
                { label: "Sylhet", value: "sylhet" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10 flex-col sm:flex-row gap-4">
        <Button variant="outline" size="md" className="w-full sm:w-[150px]">
          Cancel
        </Button>
        <Button variant="primary" size="md" className="w-full sm:w-[150px]">
          Update
        </Button>
      </div>
    </div>
  );
}
