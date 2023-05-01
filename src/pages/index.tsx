import { useEffect, useState } from "react";

import UserCard from "@/components/UserCard";
import { UserProps } from "@/types/User";

import * as S from "./styles";

import {
  fetchActiveUsers,
  fetchPopularUsers,
  fetchRepositories,
  fetchUser,
  fetchUserRepos,
} from "@/services/api";

import { RepoProps } from "@/types/Repos";

import RepoCard from "@/components/RepoCard";
import Loading from "@/components/Loading";

export default function Home() {
  const [searchedUser, setSearcedhUser] = useState<UserProps | null>(null);
  const [popularUsers, setPopularUsers] = useState<UserProps[]>([]);

  const [activeUsers, setaActiveUsers] = useState<UserProps[]>([]);
  const [popularRepos, setPopulaRepos] = useState<RepoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPopularUsers = async () => {
      setIsLoading(true);
      const data = await fetchPopularUsers();

      const promises = data.items.map(async ({ login }: UserProps) => {
        const user = await fetchUser(login);
        const repos = await fetchUserRepos(login, 1);
        return { user, repos };
      });

      const results = await Promise.all(promises);

      setPopularUsers(results);
      setIsLoading(false);
    };

    getPopularUsers();
  }, []);

  useEffect(() => {
    const getActiveUsers = async () => {
      setIsLoading(true);
      const data = await fetchActiveUsers();

      const promises = data.map(async ({ login }: UserProps) => {
        const user = await fetchUser(login);
        const repos = await fetchUserRepos(login, 1);
        return { user, repos };
      });

      const results = await Promise.all(promises);

      setaActiveUsers(results);
      setIsLoading(false);
    };

    getActiveUsers();
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const getPopularRepos = async () => {
      const res = await fetchRepositories();

      const popularRepos = res.items.map(
        ({ id, name, description, html_url, stargazers_count }: RepoProps) => ({
          id,
          name,
          description,
          html_url,
          stargazers_count,
        })
      );
      setPopulaRepos(popularRepos);
      setIsLoading(false);
    };

    getPopularRepos();
  }, []);

  return (
    <div>
      <main>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {searchedUser && <UserCard {...searchedUser} />}
            {error && <p>User not found!</p>}
            <S.Container>
              <div>
                <h3>Trending Users</h3>
                <S.Grid>
                  {popularUsers?.map(({ user, repo }: UserProps) => (
                    <UserCard
                      key={user.id}
                      avatar_url={user.avatar_url}
                      login={user.login}
                      name={user.name}
                      followers={user.followers}
                      email={user.email}
                      // repo={repos[0]}
                    />
                  ))}
                </S.Grid>
              </div>
              <div>
                <h3>Most Active Users</h3>
                <S.Grid>
                  {activeUsers?.map(({ user, repo }: UserProps) => (
                    <UserCard
                      key={user.id}
                      avatar_url={user.avatar_url}
                      login={user.login}
                      name={user.name}
                      followers={user.followers}
                      email={user.email}
                      // repo={repos[0]}
                    />
                  ))}
                </S.Grid>
              </div>
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
            </S.Container>
          </>
        )}
      </main>
    </div>
  );
}
