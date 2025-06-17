import { prisma } from "../src/lib/script";
// 별칭(Alias)이 Next.js에만 적용되고 ts-node에는 적용 안 됨 => 상대경로로 정확히 써야함
// Next.js는 jsconfig.json 또는 tsconfig.json에서 paths 옵션으로 @를 src 등 특정 폴더로 매핑해서 사용.
// 하지만 ts-node로 실행할 때는 그 별칭이 적용되지 않아서 경로를 못 찾음.

// 여행상품 db에 추가하기
async function main() {
  await prisma.product.createMany({
    data: [
      {
       
        country: "아프리카",
        imageUrl: "/africa.jpg",
        price: 1000,
        keyword: "#사파리 #대자연 #초원의 바람",
        description:
          "별빛이 초원을 덮고 사파리의 숨결이 바람에 실려오는 그 순간, 자연의 신비를 느낄 수 있습니다.",
      },
      {
        
        country: "유럽",
        imageUrl: "/europe.jpg",
        price: 499,
        keyword: "#감성 #박물관 투어 #유적물",
        description:
          "위대한 거장의 숨결을 직접 보고 느낄 수 있는 기회! 사진으로만 보던 예술품을 직접 만나보세요.",
      },
      {
      
        country: "아시아",
        imageUrl: "/asia.jpg",
        price: 99,
        keyword: "#야시장 #사원 #전통마사지",
        description:
          "전통 문화와 맛있는 길거리 음식, 전통 마사지로 몸과 마음을 힐링하세요.",
      },
      {
      
        country: "아프리카",
        imageUrl: "/america.jpg",
        price: 800,
        keyword: "#시티투어 #3대 야경 #할리우드",
        description:
          "IT, 영화, 음악 산업의 본거지, 현대 인류의 최첨단 유산을 만나보세요.",
      },
      {
        
        country: "호주",
        imageUrl: "/Australia.jpg",
        price: 300,
        keyword: "#오페라하우스 #액티비티 #휴식",
        description:
          "인간과 자연의 어울림, 다양한 액티비티와 아름다운 해변을 통해 완벽한 휴식을 즐겨보세요.",
      },
      {
       
        country: "남극 여행",
        imageUrl: "/Antarctica2.jpg",
        price: 2000,
        keyword: "#자연의 신비로움 #얼음계곡 #펭귄",
        description:
          "자연의 웅장함과 귀여운 펭귄들을 만나볼 수 있는 특별한 여행지입니다..",
      },
    ],
  });

  }

main()
  .then(() => {
    console.log(" 데이터 추가 완료");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(" 오류 발생:", e);
    prisma.$disconnect();
  });
