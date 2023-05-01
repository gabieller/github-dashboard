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
          ({
            id,
            name,
            description,
            html_url,
            stargazers_count,
          }: RepoProps) => (
            <RepoCard
              key={id}
              name={name}
              description={description}
              html_url={html_url}
              stargazers_count={stargazers_count}
            />
          )
        )}
      </S.Grid>
    </div>
  );
};
