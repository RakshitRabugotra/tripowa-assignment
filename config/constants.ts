export const CONFIG = {
  place: "Aspen",
};

export interface TourismSpot {
  key: number;
  city: string;
  country: string;
}

export const TOURIST_SPOTS: TourismSpot[] = [
  { key: 0, city: "Aspen", country: "USA" },
  { key: 1, city: "Kyoto", country: "Japan" },
  { key: 2, city: "Paris", country: "France" },
  { key: 3, city: "Cape Town", country: "South Africa" },
  { key: 4, city: "Sydney", country: "Australia" },
  { key: 5, city: "Rome", country: "Italy" },
  { key: 6, city: "Reykjavik", country: "Iceland" },
  { key: 7, city: "Banff", country: "Canada" },
  { key: 8, city: "Santorini", country: "Greece" },
  { key: 9, city: "Machu Picchu", country: "Peru" },
  { key: 10, city: "Queenstown", country: "New Zealand" },
  { key: 12, city: "Dubai", country: "UAE" },
  { key: 13, city: "Istanbul", country: "Turkey" },
  { key: 14, city: "Bangkok", country: "Thailand" },
  { key: 15, city: "Marrakech", country: "Morocco" },
  { key: 16, city: "Buenos Aires", country: "Argentina" },
  { key: 17, city: "Lisbon", country: "Portugal" },
  { key: 18, city: "Petra", country: "Jordan" },
  { key: 19, city: "Barcelona", country: "Spain" },
  { key: 20, city: "Seoul", country: "South Korea" },
  { key: 21, city: "Edinburgh", country: "Scotland" },
];

export const CATEGORIES = [
  "location",
  "hotels",
  "food",
  "adventure",
  "activities",
  "fun",
  "etc",
];

export interface LocalPlace {
  image: string;
  title: string;
  rating: number;
  isFav: boolean;
}

export const LOCAL_PLACES: LocalPlace[] = [
  {
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 4.1,
    isFav: true,
  },
  {
    image: "/images/carousel/car-2.webp",
    title: "Coeurdes Alpes",
    rating: 4.5,
    isFav: false,
  },
  {
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 3.5,
    isFav: false,
  },
];

export interface HolidayPackage {
  image: string;
  title: string;
  nights: number;
  days: number;
}

export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    image: "/images/rec-1.webp",
    title: "Explore Aspen",
    nights: 4,
    days: 5,
  },
];
