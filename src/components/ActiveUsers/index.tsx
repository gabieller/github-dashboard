import { UserProps } from "@/types/User";

import * as S from "./styles";
import { UserCard } from "../UserCard";
import { useRouter } from "next/router";

interface ActiveUsersProps {
  activeUsers: UserProps[];
}

export const ActiveUsers = ({ activeUsers }: ActiveUsersProps) => {
  const router = useRouter();
  const { q } = router.query;
  
  return (
    <div>
      <h3>Most Active Users</h3>
      {activeUsers?.length > 0 ? (
        <>
          <S.Grid>
            {activeUsers?.map((activeUsers: UserProps) => {
              const { user, repos } = activeUsers;
              return <UserCard key={user.id} user={user} repos={repos} />;
            })}
          </S.Grid>
        </>
      ) : (
        <p>{`No users were found for the term: ${q}`}</p>
      )}

    </div>
  );
};
