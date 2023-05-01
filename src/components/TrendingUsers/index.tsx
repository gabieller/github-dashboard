import { UserProps } from "@/types/User";

import * as S from "./styles";
import { UserCard } from "../UserCard";

export const  TrendingUsers = ({ popularUsers }) => {
  return (
    <div>
      <h3>Trending Users</h3>
      <S.Grid>
        {popularUsers?.map((popularUser) => {
          const { user, repos } = popularUser;
          return <UserCard key={user.id} user={user} repo={repos} />;
        })}
      </S.Grid>
    </div>
  );
};
