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

// 여행상품 db에 추가하기
// async function main() {
//   const africa = await prisma.product.create({
//     data: {
//       id: 1,
//       country: "아프리카",
//       imageUrl: "/africa.jpg",
//       price: 1000,
//       keyword: "사파리 대자연 초원의 바람",
//       description:
//         "별빛이 초원을 덮고 사파리의 숨결이 바람에 실려오는 그 순간, 자연의 신비를 느낄 수 있습니다.",
//     },
//   });
//   const Europe = await prisma.product.create({
//     data: {
//       id: 2,
//       country: "유럽",
//       imageUrl: "/europe.jpg",
//       price: 499,
//       keyword: "분위기 박물관투어 유적물",
//       description:
//         "위대한 거장의 숨결을 직접 보고 느낄 수 있는 기회! 사진으로만 보던 예술품을 직접 만나보세요.",
//     },
//   });
//   const Asia = await prisma.product.create({
//     data: {
//       id: 3,
//       country: "아시아",
//       imageUrl: "/asia.jpg",
//       price: 99,
//       keyword: "야시장 사원 전통마사지",
//       description:
//         "전통 문화와 맛있는 길거리 음식, 전통 마사지로 몸과 마음을 힐링하세요.",
//     },
//   });
//   const America = await prisma.product.create({
//     data: {
//       id: 4,
//       country: "아프리카",
//       imageUrl: "/america.jpg",
//       price: 800,
//       keyword: "시티투어 3대 야경 헐리우드",
//       description:
//         "IT, 영화, 음악 산업의 본거지, 현대 인류의 최첨단 유산을 만나보세요.",
//     },
//   });
//   const Australia = await prisma.product.create({
//     data: {
//       id: 5,
//       country: "호주",
//       imageUrl: "/Australia.jpg",
//       price: 300,
//       keyword: "오페라하우스 액티비티 휴식",
//       description:
//         "인간과 자연의 어울림, 다양한 액티비티와 아름다운 해변을 통해 완벽한 휴식을 즐겨보세요.",
//     },
//   });
//   const antarctica = await prisma.product.create({
//     data: {
//       id: 6,
//       country: "남극 여행",
//       imageUrl: "/Antarctica2.jpg",
//       price: 2000,
//       keyword: "자연의 신비로움 얼음계곡 펭귄",
//       description:
//         "자연의 웅장함과 귀여운 펭귄들을 만나볼 수 있는 특별한 여행지입니다..",
//     },
//   });
// }

// main()
//   .then(() => {
//     console.log(" 데이터 추가 완료");
//     prisma.$disconnect();
//   })
//   .catch((e) => {
//     console.error(" 오류 발생:", e);
//     prisma.$disconnect();
//   });


export const Products = [
  {
    key: 1,
    name: "아프리카 여행",
    price: 1000,
    country: "Africa",
    image: africa,
    keyword: "#사파리 #대자연 #초원의 바람",
    description:
      "별빛이 초원을 덮고 사파리의 숨결이 바람에 실려오는 그 순간, 자연의 신비를 느낄 수 있습니다.",
  },
  {
    key: 2,
    name: "유럽 여행",
    price: 499,
    country: "",
    image: europe,
    keyword: "#분위기 #박물관 #맛집 탐방",
    description: "위대한 거장의 숨결을 직접 보고 느낄 수 있는 기회! 사진으로만 보던 예술품을 직접 만나보세요",
  },
  {
    key: 3,
    name: "아시아 여행",
    price: 99,
    country: "Asia",
    image: asia,
    keyword: "#야시장 #사원 #전통마사지",
    description: "전통 문화와 맛있는 길거리 음식, 전통 마사지로 몸과 마음을 힐링하세요",
  },
  {
    key: 4,
    name: "대륙 여행",
    price: 800,
    country: "America",
    image: america,
    keyword: "#시티투어 #3대 야경",
    description: "IT, 영화, 음악 산업의 본거지, 현대 인류의 최첨단 유산을 만나보세요,",
  },
  {
    key: 5,
    name: "호주 여행",
    price: 300,
    country: "Australia",
    image: australia,
    keyword: "#오페라하우스 #액티비티 #휴식",
    description:"인간과 자연의 어울림, 다양한 액티비티와 아름다운 해변을 통해 완벽한 휴식을 즐겨보세요 "
  },
  {
    key: 6,
    name: "남극 여행",
    price: 2000,
    country: "antarctica",
    image: antarctica,
    keyword: "#신비로운 자연 #얼음 계곡 #펭귄",
    description: "자연의 웅장함과 귀여운 펭귄들을 만나볼 수 있는 특별한 여행지입니다.",
  },
];
