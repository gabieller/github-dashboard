import { useEffect, useState } from "react";

import * as S from "./styles";

import { UserProps } from "@/types/User";

import UserCard from "@/components/UserCard";

import {
  fetchActiveUsers,
  fetchPopularUsers,
  fetchRepositories,
  fetchUser,
  fetchUserRepos,
} from "@/services/api";

import { RepoProps } from "@/types/Repos";

import RepoCard from "@/components/RepoCard";

export default function Home() {
  const [searchedUser, setSearcedhUser] = useState<UserProps | null>(null);
  const [popularUsers, setPopularUsers] = useState<UserProps[]>([]);
  const [activeUsers, setaActiveUsers] = useState<UserProps[]>([]);
  const [popularRepos, setPopulaRepos] = useState<RepoProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPopularUsers = async () => {
      const data = await fetchPopularUsers();

      //@ts-ignore
      const promises = data.items.map(async ({ login }: UserProps) => {
        return await fetchUser(login);
      });

      const results = await Promise.all(promises);

      setPopularUsers(results);
    };

    getPopularUsers();
  }, []);

  useEffect(() => {
    const getActiveUsers = async () => {
      const data = await fetchActiveUsers();

      //@ts-ignore
      const promises = data.map(async ({ login }: UserProps) => {
        return await fetchUser(login);
      });

      const results = await Promise.all(promises);

      setaActiveUsers(results);
    };

    getActiveUsers();
  }, []);

  useEffect(() => {
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
      // console.log(res);
      setPopulaRepos(popularRepos);
    };

    getPopularRepos();
  }, []);

  return (
    <div>
      <main>
          {searchedUser && <UserCard {...searchedUser} />}
          {error && <p>User not found!</p>}
          <S.Container>
            <div>
              <h3>Trending Users</h3>
              <S.Grid>
                {popularUsers?.map(
                  ({
                    id,
                    name,
                    email,
                    avatar_url,
                    login,
                    followers,
                  }: UserProps) => (
                    <UserCard
                      key={id}
                      id={id}
                      avatar_url={avatar_url}
                      login={login}
                      name={name}
                      followers={followers}
                      email={email}
                    />
                  )
                )}
              </S.Grid>
            </div>
            <div>
              <h3>Most Active Users</h3>
              <S.Grid>
                {activeUsers?.map(
                  ({
                    id,
                    name,
                    email,
                    avatar_url,
                    login,
                    followers,
                  }: UserProps) => (
                    <UserCard
                      key={id}
                      id={id}
                      avatar_url={avatar_url}
                      login={login}
                      name={name}
                      followers={followers}
                      email={email}
                    />
                  )
                )}
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
      </main>
    </div>
  );
}
