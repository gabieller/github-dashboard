import { RepoCard } from "../RepoCard";
import { RepoProps } from "@/types/Repos";

import * as S from "./styles";
import { useRouter } from "next/router";

interface TopReposProps {
  popularRepos: RepoProps[];
}

export const TopRepos = ({ popularRepos }: TopReposProps) => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <div>
      <h3>Top Repositories</h3>
      {
         popularRepos?.length > 0 ? (
          <S.Grid>
        {popularRepos?.map(
          (repo: RepoProps, i) => (
            <RepoCard
              key={i}
              repo={repo}
            />
          )
        )}
      </S.Grid>
         ) :(
          <p>{`No repositores were found for the term: ${q}`}</p>
         )
      }
 
    </div>
  );
};
