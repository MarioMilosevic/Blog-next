export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id: productId } = await params;

  return <h1>User with id of {productId}</h1>;
}
