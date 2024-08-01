"use client";

import { useEffect, useState } from "react";

// Icons
import { ChevronLeft, HeartFilledIcon } from "@/components/icons";

// UI
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

// Constants
import { LocalPlace } from "@/config/constants";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const ImageCard: React.FC<LocalPlace> = ({ title, image, isFav }) => {
  // For showing a skeleton till the image loads
  const [isLoaded, setLoaded] = useState(false);

  // To set the item as favourite
  const [fav, setFav] = useState(isFav);
  // To handle the clicking of fav icon
  // const handleLike = () => setFav((prev) => !prev);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Card radius="lg" className="border-none w-full overflow-visible">
      <Skeleton isLoaded={isLoaded}>
        <CardBody className="p-0">
          <Image
            alt={title}
            className="object-cover w-full aspect-square"
            src={image}
            loading="lazy"
          />
        </CardBody>
        {/* The back button */}
        <Button
          as={Link}
          href="/app"
          startContent={<ChevronLeft />}
          className="absolute top-3 left-3 z-10 min-w-fit text-black bg-default-50 dark:text-default-50 dark:bg-white aspect-square "
        />
        {/* The fav icon */}
        {fav && (
          <Button
            className="absolute bottom-0 right-4 translate-y-1/2 text-red-500 p-2 bg-white rounded-full z-20 min-w-fit h-fit"
            // onClick={handleLike}
          >
            <HeartFilledIcon size={32} />
          </Button>
        )}
      </Skeleton>
    </Card>
  );
};

export default ImageCard;
