export default async function Test({ id }:{id:string}) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return <p>{product.title}</p>;
}
