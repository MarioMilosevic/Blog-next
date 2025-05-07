import User from "@/components/User";
import { UserType } from "@/lib/types";

export default async function Home() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await users.json();

  return (
    <div className="min-h-screen max-w-[1280px] grid grid-cols-5 place-items-center mx-auto">
      {data.map((user: UserType) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
