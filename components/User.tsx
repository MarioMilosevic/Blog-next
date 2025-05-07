import { UserType } from "@/lib/types";
type UserTypeProps = {
  user: UserType;
};

const User = ({ user }: UserTypeProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default User;
