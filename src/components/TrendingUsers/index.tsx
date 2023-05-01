
import { UserProps } from "@/types/User";

import * as S from "./styles";

import { UserCard } from "../UserCard";

interface TrendingUsersProps {
  popularUsers: UserProps[];
}

export const TrendingUsers = ({ popularUsers }: TrendingUsersProps) => {
  return (
    <div>
       <h3>Trending Users</h3>
      <S.Grid>
        {popularUsers?.map((popularUser: UserProps) => {
          const { user, repos } = popularUser;
          return <UserCard key={user.id} user={user} repos={repos} />;
        })}
      </S.Grid>
    </div>
  );
};
