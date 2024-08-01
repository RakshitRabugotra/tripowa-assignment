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
  id: number;
  image: string;
  title: string;
  rating: number;
  isFav: boolean;
  reviews: number;
  description: string;
  price: number;
}

export const LOCAL_PLACES: LocalPlace[] = [
  {
    id: 1,
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 4.1,
    reviews: 632,
    description:
      "Aspen is as close as one gets to a storybook alpine town in America. The choose-your-own-adventure possibilities — skiing, hiking, dining, shopping and more lorem ipsum it goes on",
    isFav: true,
    price: 632 / 3,
  },
  {
    id: 2,
    image: "/images/carousel/car-2.webp",
    title: "Coeurdes Alpes",
    rating: 4.5,
    reviews: 852,
    description:
      "Vail is a charming mountain town that feels like a picturesque scene from a fairytale. With its cobblestone streets, alpine architecture, and a backdrop of snow-capped peaks, Vail offers a plethora of adventures. Whether you're skiing down world-renowned slopes, exploring scenic hiking trails, indulging in gourmet dining, or browsing the boutique shops, there's always something to captivate your imagination.",
    isFav: false,
    price: 852 / 3,
  },
  {
    id: 3,
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 3.5,
    reviews: 380,
    description:
      "Nestled in the heart of the Teton Range, Jackson Hole is a quintessential alpine paradise. This town is an adventurer's dream come true, offering endless opportunities for skiing, wildlife viewing, and backcountry exploration. With its rustic charm, vibrant arts scene, and cozy lodges, Jackson Hole is a perfect blend of rugged wilderness and refined luxury.",
    isFav: false,
    price: 380 / 3,
  },
  {
    id: 4,
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 3.5,
    reviews: 967,
    description:
      "Park City is a vibrant mountain town that combines the best of both worlds: exhilarating outdoor activities and rich cultural experiences. From the thrill of skiing and snowboarding on pristine slopes to exploring historic Main Street lined with art galleries, restaurants, and shops, Park City invites you to craft your own unforgettable adventure.",
    isFav: false,
    price: 967 / 3,
  },
  {
    id: 5,
    image: "/images/carousel/car-1.webp",
    title: "Alley Palace",
    rating: 3.5,
    reviews: 620,
    description:
      "Tucked away in a stunning box canyon, Telluride is a hidden gem that offers a storybook alpine experience. The town's charming streets are filled with historic buildings, gourmet restaurants, and unique shops. Whether you're skiing down legendary runs, hiking through breathtaking landscapes, or enjoying a festival in the picturesque town park, Telluride promises an enchanting getaway.",
    isFav: false,
    price: 620 / 3,
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
    image: "/images/recommended/rec-1.webp",
    title: "Explore Aspen",
    nights: 4,
    days: 5,
  },
  {
    image: "/images/recommended/rec-2.webp",
    title: "Luxurious Aspen",
    nights: 2,
    days: 3,
  },
  {
    image: "/images/recommended/rec-2.webp",
    title: "Luxurious Aspen",
    nights: 2,
    days: 3,
  },
  {
    image: "/images/recommended/rec-2.webp",
    title: "Luxurious Aspen",
    nights: 2,
    days: 3,
  },
];
