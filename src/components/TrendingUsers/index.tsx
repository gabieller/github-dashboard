import { UserProps } from "@/types/User";

import * as S from "./styles";

import { UserCard } from "../UserCard";
import { useRouter } from "next/router";

interface TrendingUsersProps {
  popularUsers: UserProps[];
}

export const TrendingUsers = ({ popularUsers }: TrendingUsersProps) => {
  const router = useRouter();
  const { q } = router.query;

  
  return (
    <div>
      <h3>Trending Users</h3>
      {popularUsers?.length > 0 ? (
        <>
          <S.Grid>
            {popularUsers?.map((popularUsers: UserProps) => {
              const { user, repos } = popularUsers;
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
