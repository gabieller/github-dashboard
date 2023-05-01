import { UserProps } from "@/types/User";

import * as S from "./styles";
import { UserCard } from "../UserCard";

export const ActiveUsers = ({ activeUsers }) => {
  return (
    <div>
      <h3>Most Active Users</h3>
      <S.Grid>
        {activeUsers?.map((activeUser) => {
          const { user, repos } = activeUser;
          return <UserCard key={user.id} user={user} repo={repos} />;
        })}
      </S.Grid>
    </div>
  );
};
