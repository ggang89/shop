import Image from "next/image";
import { TicketsPlane } from "lucide-react";
import { prisma } from "@/lib/script";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    return <h1>페이지가 존재하지 않습니다.</h1>;
  }
  return (
    <div className="relative w-screen h-screen flex  items-center gap-5 p-10 ">
      {/* 배경 이미지 div */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage: `url(${product.imageUrl})`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex gap-x-40">
        <Image
          src={product.imageUrl}
          alt={product.country}
          width={700}
          height={700}
        />
        <div className=" ">
          <h1 className="text-5xl font-bold mb-10"> {product.country}</h1>
          <h3 className="text-2xl font-bold italic text-gray-700 mb-3">
            {" "}
            {product.keyword}
          </h3>
          <p className="text-base/8">{product.description}</p>

          <div className="flex justify-self-end items-center p-5">
            <TicketsPlane /> &nbsp;
            <span className="text-end font-bold text-2xl">
              {product.price} 만원
            </span>
          </div>
          <div className="flex items-center justify-end mt-2 gap-2 font-bold">
            <input type="checkbox" id="buy" />
            <label htmlFor="buy"> 상품담기❤ </label>
          </div>
        </div>
      </div>
    </div>
  );
}
