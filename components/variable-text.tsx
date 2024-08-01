"use client";
import { useState, useEffect } from "react";

// UI
import { Button } from "@nextui-org/button";
import { ChevronDown } from "./icons";
import { Skeleton } from "@nextui-org/skeleton";

export const VariableText = ({ text }: { text: string }) => {
  // To set the short text in the area
  const [short, setShort] = useState(addEllipses(text));

  // To check if it has loaded
  const [isLoaded, setLoaded] = useState(false);

  // Expand the length to full text
  const expandText = () => {
    setShort(text);
  };
  // To shrink the text back
  const shrinkText = () => {
    setShort(addEllipses(text));
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>
      <Skeleton isLoaded={isLoaded}>
        <p className="w-auto mr-6 text-sm font-medium mt-4 text-justify">
          {short}
        </p>
        <Button
          variant="light"
          className="text-primary max-w-fit text-sm p-0 h-fit font-bold"
          endContent={<ChevronDown className="text-primary" />}
          aria-label="read more"
          onPress={() =>
            short.length !== text.length ? expandText() : shrinkText()
          }
        >
          Read {short.length !== text.length ? "more" : "less"}
        </Button>
      </Skeleton>
    </div>
  );
};

// Add ellipses to the text if it's too long
const addEllipses = (txt: string, maxLength: number = 150) => {
  if (txt.length <= maxLength) return txt;
  // Else, add the ellipses when the word ends
  let i = maxLength;
  for (; i < txt.length; i++) {
    if (txt[i] === " ") break;
  }
  // Add ellipses here, and return a new string
  let newString = txt.substring(0, i);
  newString += " ...";
  return newString;
};
