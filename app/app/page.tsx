import { subtitle, title } from "@/components/primitives";
import { CONFIG } from "@/config/constants";
import { CountrySelect } from "@/components/country-selection";
import { SearchInput } from "@/components/search";
import { CategoryChips } from "@/components/category-chips";
import {
  PlaceCarousel,
  RecommendedCarousel,
} from "@/components/place-carousel";

export default function App() {
  return (
    <section className="flex flex-col items-center justify-center py-4 md:py-10 font-montserrat">
      {/* The header section */}
      <div className="px-4 w-full flex flex-row justify-between ">
        <div className="grow">
          <h2 className={subtitle({ class: "m-0" })}>Explore</h2>
          <h1
            className={title({ class: "font-semibold m-0 text-left w-full" })}
          >
            {CONFIG.place}
          </h1>
        </div>
        <CountrySelect />
      </div>

      {/* The search section */}
      <div className="px-4 my-6 w-full">
        <SearchInput />
      </div>

      {/* The chip section */}
      <CategoryChips />

      {/* The carousel for popular */}
      <div className="px-4 mt-6 w-full">
        <h1 className={subtitle({ class: "font-bold" })}>Popular</h1>
        <PlaceCarousel />
      </div>

      {/* The carousel for recommended */}
      <div className="px-4 mt-6 w-full">
        <h1 className={subtitle({ class: "font-bold" })}>Recommended</h1>
        <RecommendedCarousel />
      </div>
    </section>
  );
}
