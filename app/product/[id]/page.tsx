import Test from "@/components/Test";
import { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="flex flex-col items-center gap-2">
      <h1>Ovo se svakako rerenderuje</h1>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Test id={id} />
      </Suspense>
    </section>
  );
}
