"use client";

import { UserType } from "@/lib/types";
import Link from "next/link";

type UserTypeProps = {
  user: UserType;
};

const User = ({ user }: UserTypeProps) => {
  return (
    <Link
      href={`/user/${user.id}`}
      className="flex flex-col gap-4 border border-white h-[100px] cursor-pointer"
    >
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </Link>
  );
};

export default User;
