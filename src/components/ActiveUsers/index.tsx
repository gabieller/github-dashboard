import { UserProps } from "@/types/User";

import * as S from "./styles";
import { UserCard } from "../UserCard";

interface ActiveUsersProps {
  activeUsers: UserProps[];
}

export const ActiveUsers = ({ activeUsers }: ActiveUsersProps) => {
  return (
    <div>
      <h3>Most Active Users</h3>
      <S.Grid>
        {activeUsers?.map((activeUser: UserProps) => {
          const { user, repos } = activeUser;
          return <UserCard key={user.id} user={user} repos={repos} />;
        })}
      </S.Grid>
    </div>
  );
};
