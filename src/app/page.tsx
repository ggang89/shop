import Image from "next/image";
import { prisma } from "@/lib/script";
import CountryList from "./components/travel-list";
import { getIronSessionData } from "@/lib/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getIronSessionData();
  if (session.isLoggedIn) {
    redirect("/protect");
  }
  const products = await prisma.product.findMany({});

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
        <div className="flex flex-wrap justify-center gap-10 p-10 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[400px]  rounded-lg p-5 item-center shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              {" "}
              <Link href={`/${product.id}`}>
                <h2 className="text-2xl font-bold text-center text-sky-900 mb-2">
                  {product.country}
                </h2>
                <Image
                  src={product.imageUrl}
                  alt={product.country}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />

               

                <h3 className="text-center text-lg  font-bold text-sky-600">
                  {product.keyword}
                </h3>
                <p className="text-end  font-bold">$ {product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
