import asia from "../../public/asia.jpg";
import africa from "../../public/africa.jpg";
import america from "../../public/america.jpg";
import australia from "../../public/Australia.jpg";
import europe from "../../public/europe.jpg";
import antarctica from "../../public/Antarctica2.jpg";
import { StaticImageData } from "next/image";

export type Product = {
  key: number;
  name: string;
  price: number;
  country: string;
  image: StaticImageData;
  description: string;
};
export const Products = [
  {
    key: 1,
    name: "아프리카 여행",
    price: 1000,
    country: "Africa",
    image: africa,
    description: "#사파리 #초원의 바람 #대자연",
  },
  {
    key: 2,
    name: "유럽 여행",
    price: 499,
    country: "Europe",
    image: europe,
    description: "#분위기 #박물관 #맛집 탐방",
  },
  {
    key: 3,
    name: "아시아 여행",
    price: 99,
    country: "Asia",
    image: asia,
    description: "#야시장 #사원 #전통마사지",
  },
  {
    key: 4,
    name: "대륙 여행",
    price: 800,
    country: "America",
    image: america,
    description: "#시티투어 #3대 야경",
  },
  {
    key: 5,
    name: "호주 여행",
    price: 300,
    country: "Australia",
    image: australia,
    description: "#오페라하우스 #시드니 #크루즈",
  },
  {
    key: 6,
    name: "남극 여행",
    price: 2000,
    country: "antarctica",
    image: antarctica,
    description: "#신비로운 자연 #얼음 계곡 #펭귄",
  },
];
