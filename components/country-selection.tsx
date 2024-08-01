"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";

// Constants
import { TOURIST_SPOTS as spots } from "@/config/constants";
import { LocationPinIcon } from "./icons";

export const CountrySelect = () => {
  const [value, setValue] = useState(spots[0].city + ", " + spots[0].country);

  return (
    <div className="flex w-full max-w-40 flex-col gap-2">
      <Select
        variant="bordered"
        selectedKeys={[value]}
        aria-label="select a country"
        className="max-w-xs"
        classNames={{
          trigger: "border-none shadow-none",
          selectorIcon: "text-primary ",
        }}
        startContent={
          <LocationPinIcon color="blue" fill="blue" className="text-success" />
        }
        onChange={(e) => setValue(e.target.value)}
      >
        {spots.map((spot) => (
          <SelectItem key={spot.city + ", " + spot.country}>
            {`${spot.city}, ${spot.country}`}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
