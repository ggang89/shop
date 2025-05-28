import { Products } from "@/lib/product";
import Image from "next/image";
import { TicketsPlane } from "lucide-react";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ detail: number }>;
}) {
  const { detail } = await params;

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* 배경 이미지 div */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage: `url(${Products[detail - 1].image.src})`,
        }}
      />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex gap-x-40">
        <Image
          src={Products[detail - 1].image}
          alt={Products[detail - 1].country}
          width={700}
          height={700}
        />
        <div className=" ">
          <h1 className="text-5xl font-bold mb-10">
            {" "}
            {Products[detail - 1].name}
          </h1>
          <h3 className="text-2xl font-bold italic text-gray-700 mb-3">
            {" "}
            {Products[detail - 1].keyword}
          </h3>
          <p className="text-base/8">{Products[detail - 1].description}</p>

          <div className="flex justify-self-end items-center p-5">
            <TicketsPlane /> &nbsp;
            <span className="text-end font-bold text-2xl">
              {Products[detail - 1].price} 만원
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
