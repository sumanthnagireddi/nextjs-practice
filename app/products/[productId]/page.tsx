export default function ProductDetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <>details about product {params.productId} ..</>;
}
