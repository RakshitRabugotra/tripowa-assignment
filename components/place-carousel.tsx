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
import { Button } from "@nextui-org/button";

// Icons
import { HeartFilledIcon, StarIcon } from "./icons";
import { Skeleton } from "@nextui-org/skeleton";
import { Link } from "@nextui-org/link";

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
      className="border-none"
      isPressable
      as={Link}
      href={"/" + id}
    >
      <Skeleton isLoaded={isLoaded}>
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
            <Button
              className="absolute bottom-0 right-4 translate-y-1/2 text-red-500 p-2 bg-white rounded-full z-20 min-w-fit h-fit"
              onClick={handleLike}
            >
              <HeartFilledIcon size={32} />
            </Button>
          )}
        </CardFooter>
      </Skeleton>
    </Card>
  );
};

// Carousel for the recommended place
export const RecommendedCarousel = () => {
  return (
    <div className="w-full overflow-x-scroll">
      <div className="flex flex-row gap-4">
        {HOLIDAY_PACKAGES.map(
          (place, index) =>
            index < 2 && <RecommendedCard {...place} key={index} />
        )}
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

  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
      <Skeleton isLoaded={isLoaded}>
        <CardBody className="overflow-visible p-1 relative">
          <Image
            shadow="sm"
            radius="lg"
            width={192}
            height={120}
            alt={`${title}-${nights}/${days}`}
            className="w-[192px] object-cover h-[120px]"
            src={image}
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
