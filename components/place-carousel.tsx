"use client";

import { useState } from "react";

// UI
import { HOLIDAY_PACKAGES, LOCAL_PLACES, LocalPlace } from "@/config/constants";
import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

// Icons
import { HeartFilledIcon, StarIcon } from "./icons";

export const PlaceCarousel = () => {
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex flex-row gap-4">
        {LOCAL_PLACES.map(
          (place, index) => index === 0 && <PlaceCard {...place} key={index} />
        )}
      </div>
    </div>
  );
};

export const PlaceCard: React.FC<LocalPlace> = ({
  image,
  title,
  rating,
  isFav,
}) => {
  const [fav, setFav] = useState(isFav);

  const handleLike = () => {
    setFav((prev) => !prev);
  };

  return (
    <Card radius="lg" className="border-none">
      <Image
        alt={title}
        className="object-cover"
        height={800 / 3}
        src={image}
        width={200}
        loading="lazy"
      />
      <CardFooter className="justify-between flex-wrap p-2 gap-2 flex-row items-end overflow-hidden absolute bottom-1 w-[calc(100%_-_8px)]">
        <div className="flex flex-col gap-2">
          <p className="text-tiny bg-default-600 dark:bg-black w-fit text-white/80 before:bg-white/10 border-white/20 p-1 px-2 border-1 before:rounded-xl rounded-large shadow-small  ml-1 z-10">
            {title}
          </p>
          <p className="text-tiny inline-flex items-center justify-between bg-default-600 dark:bg-black w-fit text-white/80 before:bg-white/10 border-white/20 p-1 px-2 border-1 before:rounded-xl rounded-large shadow-small  ml-1 z-10">
            <StarIcon className="text-amber-300" />
            <span className="mx-2">{rating}</span>
          </p>
        </div>

        {fav && (
          <button
            className="text-red-500 p-2 bg-white rounded-full z-10"
            onClick={handleLike}
          >
            <HeartFilledIcon size={16} />
          </button>
        )}
      </CardFooter>
    </Card>
  );
};

// Carousel for the recommended place
export const RecommendedCarousel = () => {
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex flex-row gap-4">
        {HOLIDAY_PACKAGES.map(
          () => (
            <div />
          )
          // (place, index) => index === 0 && <PlaceCard {...place} key={index} />
        )}
      </div>
    </div>
  );
};