import { prisma } from "@/lib/script";
import DetailProduct from "../components/detail-product";

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

  return <DetailProduct product={product} />;
}
