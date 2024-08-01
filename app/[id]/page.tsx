// UI
import { Link } from "@nextui-org/link";
// Components
import ImageCard from "@/components/image-card";
import { VariableText } from "@/components/variable-text";

// Constants
import { LOCAL_PLACES, LocalPlace } from "@/config/constants";

// Helpers
import { subtitle, title } from "@/components/primitives";

// Icons
import { Facility, StarIcon } from "@/components/icons";
import BookButton from "@/components/book-button";

// The dynamic page showing the place details
export default async function PlacePage({
  params,
}: {
  params: { id: string };
}) {
  const place = LOCAL_PLACES.find((value) => value.id === parseInt(params.id))!;

  return (
    <section className="flex flex-col min-h-screen bg-default-50 items-center p-4 font-montserrat">
      {/* The image section with the card */}
      <ImageCard {...place} />
      {/* The section with headings */}
      <Description {...place} />
      {/* The Facilities */}
      <Facilities {...place} />
      {/* The proceed bar */}
      <BookButton {...place} />
    </section>
  );
}

const Description: React.FC<LocalPlace> = ({
  title: placeTitle,
  rating,
  reviews,
  description,
}) => {
  return (
    <article className="mt-6 w-full flex flex-col gap-1">
      {/* The header section */}
      <div className="flex justify-between items-end">
        <h1 className={title({ class: "text-3xl font-semibold" })}>
          {placeTitle}
        </h1>
        <Link href="#" className="px-1 font-bold text-sm">
          Show map
        </Link>
      </div>

      {/* The reviews */}
      <div className="inline-flex gap-1 text-sm items-center px-2">
        <StarIcon className="text-amber-500" />
        {rating}&nbsp;
        {`(${reviews}) Reviews`}
      </div>

      {/* The description of the place */}
      <VariableText text={description} />
    </article>
  );
};

const Facilities: React.FC<LocalPlace> = () => {
  return (
    <article className="flex flex-col mt-6 gap-1 w-full">
      {/* Subtitle */}
      <h2
        className={subtitle({
          class: "text-xl font-semibold w-full text-foreground",
        })}
      >
        Facilities
      </h2>
      {/* The facility icons */}
      <section className="flex flex-row gap-3 justify-between">
        <FacilityIcon subtitle={"1 Heater"}>
          <Facility.Wifi size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"Dinner"}>
          <Facility.Dinner size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"1 Tub"}>
          <Facility.Bath size={40} />
        </FacilityIcon>
        <FacilityIcon subtitle={"Pool"}>
          <Facility.Pool size={40} />
        </FacilityIcon>
      </section>
    </article>
  );
};

const FacilityIcon = ({
  subtitle,
  children,
}: {
  subtitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-2xl basis-1/4 bg-[#eff3fc] text-[#b6b6b6] p-4 flex flex-col items-center justify-center">
      {children}
      <span className="text-xs">{subtitle}</span>
    </div>
  );
};
