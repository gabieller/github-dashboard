import { RepoCard } from "../RepoCard";
import * as S from "./styles";
import { RepoProps } from "@/types/Repos";

export const  TopRepos = ({ popularRepos }) => {
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
}
