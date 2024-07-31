"use client";

import { useState } from "react";

// UI
import { Chip } from "@nextui-org/chip";

// Constants
import { CATEGORIES as categories } from "@/config/constants";

export const CategoryChips = () => {
  // Get the active chip
  const [current, setCurrent] = useState(categories[0]);

  return (
    <div className="w-full overflow-scroll scrollbar-hide">
      <div className="relative overflow-y-hidden flex items-center px-2 rounded-lg overflow-visible scrollbar-hide">
        <div className="flex gap-4">
          {categories.map((category, index) => (
            <Chip
              color="primary"
              variant="flat"
              key={index}
              className="capitalize flex-none "
              classNames={{
                base: "bg-primary/10 py-5 px-2",
                content: current === category ? "font-bold" : "",
              }}
              onClick={() => setCurrent(category)}
            >
              {category}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};
