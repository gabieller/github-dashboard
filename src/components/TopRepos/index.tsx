import { RepoCard } from "../RepoCard";
import { RepoProps } from "@/types/Repos";

import * as S from "./styles";

interface TopReposProps {
  popularRepos: RepoProps[];
}

export const TopRepos = ({ popularRepos }: TopReposProps) => {
  return (
    <div>
      <h3>Top Repositories</h3>
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
    </div>
  );
};
