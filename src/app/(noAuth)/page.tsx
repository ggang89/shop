//import { useState } from "react";
import Image from "next/image";
import CountryList from "../components/travel-list";
import { Products } from "@/lib/product";

export default function Home() {
  // const { product, setProduct } = useState<Product>([]);
  return (
    <div>
      <header className=" text-3xl font-bold text-center p-5">
        여행 상품 사이트 🛫
      </header>

      <section className="flex items-center justify-center gap-20">
        <ul className="bg-blue-300 rounded-3xl w-80 py-2 px-5">
          <CountryList name="Africa" />
          <CountryList name="Europe" />
          <CountryList name="Asia" />
          <CountryList name=" America" />
          <CountryList name="Australia" />
          <CountryList name="Antarctica" />
        </ul>
        <ul className="bg-blue-300 rounded-3xl w-80 px-5 py-5">
          <CountryList name="All" />
          <CountryList name="0 ~ 100만원" />
          <CountryList name="100만원 ~ 500만원" />
          <CountryList name="500만원 이상" />
          <CountryList name="1000만원 이상" />
        </ul>
      </section>

      <section>
        <div className="flex flex-wrap justify-center gap-10 p-10">
          {Products.map((product) => (
            <div
              key={product.key}
              className="bg-gray-50 rounded-lg p-5 item-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={product.image}
                width={300}
                height={300}
                alt={product.name}
              />
              <p className="text-2xl font-bold text-center text-sky-700">
                {" "}
                {product.country}
              </p>
              <p className="text-center text-sm italic text-gray-500">
                {product.description}
              </p>
              <p className="text-end  font-bold">$ {product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
