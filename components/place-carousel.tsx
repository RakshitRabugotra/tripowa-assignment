"use client";

import { useEffect, useState } from "react";

// UI
import {
  HOLIDAY_PACKAGES,
  HolidayPackage,
  LOCAL_PLACES,
  LocalPlace,
} from "@/config/constants";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";

// Components
import EmblaCarousel from "./embla/carousel";

// Icons
import { HeartFilledIcon, StarIcon } from "./icons";
import { Skeleton } from "@nextui-org/skeleton";

export const PlaceCarousel = () => {
  return (
    <div className="ml-4 overflow-hidden">
      <EmblaCarousel slides={LOCAL_PLACES} renderItem={PlaceCard} shrink />
    </div>
  );
};

export const PlaceCard: React.FC<LocalPlace> = ({
  id,
  image,
  title,
  rating,
  isFav,
}) => {
  const [fav, setFav] = useState(isFav);
  const [isLoaded, setLoaded] = useState(false);

  const handleLike = () => {
    setFav((prev) => !prev);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Card
      radius="lg"
      isPressable
      as={Link}
      href={"/" + id}
      className="border-none z-30"
      classNames={{
        body: "p-0 max-w-full [&>div]:!max-w-full",
      }}
    >
      <Skeleton isLoaded={isLoaded} className="w-full rounded-lg">
        <CardBody>
          <Image
            alt={title}
            className="object-cover w-full"
            height={800 / 3}
            src={image}
            width={200}
            loading="eager"
          />
        </CardBody>
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
      </Skeleton>
    </Card>
  );
};

// Carousel for the recommended place
export const RecommendedCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="ml-4">
        <EmblaCarousel slides={HOLIDAY_PACKAGES} renderItem={RecommendedCard} />
      </div>
    </div>
  );
};

export const RecommendedCard: React.FC<HolidayPackage> = ({
  title,
  nights,
  days,
  image,
}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handlePress = () => {
    // TODO: Do something on click here
  };

  return (
    <Card shadow="sm" isPressable onPress={handlePress} className="border-none">
      <Skeleton isLoaded={isLoaded} className="w-full rounded-lg">
        <CardBody className="overflow-visible p-1 relative">
          <Image
            shadow="sm"
            radius="lg"
            width={192}
            height={120}
            alt={`${title}-${nights}/${days}`}
            className="object-cover"
            src={image}
            loading="lazy"
          />
          <p className="absolute bottom-0 translate-y-1/2 border-white border-3 dark:bg-content1 rounded-full px-1 text-[12px] font-medium bg-gray-600 text-white right-2 z-20">{`${nights}N/${days}D`}</p>
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{title}</b>
        </CardFooter>
      </Skeleton>
    </Card>
  );
};
