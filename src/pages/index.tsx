import { useEffect, useState } from "react";

import {
  fetchUser,
  fetchUserRepos,
  searchRepositories,
  searchUser,
} from "@/services/api";

import { RepoProps } from "@/types/Repos";
import { UserProps } from "@/types/User";

import * as S from "./styles";
import { Loading } from "@/components/Loading";
import { TrendingUsers } from "@/components/TrendingUsers";
import { ActiveUsers } from "@/components/ActiveUsers";
import { TopRepos } from "@/components/TopRepos";

export default function Home() {
  const [popularUsers, setPopularUsers] = useState<UserProps[]>();
  const [activeUsers, setaActiveUsers] = useState<UserProps[]>();
  const [popularRepos, setPopulaRepos] = useState<RepoProps[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getPopularUsers = async () => {
      setIsLoading(true);
      const data = await searchUser(undefined, "stars");

      const promises = data.items.map(async (item: UserProps) => {
        const { login }: UserProps = item;
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
      const data = await searchUser(undefined, "repositories");

      const promises = data.items.map(async (item: UserProps) => {
        const { login }: UserProps = item;
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
      const res = await searchRepositories(undefined, "stars");

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error && <p>User not found!</p>}
          <S.Container>
            {popularUsers && <TrendingUsers popularUsers={popularUsers} />}
            {activeUsers && <ActiveUsers activeUsers={activeUsers} />}
            {popularRepos && <TopRepos popularRepos={popularRepos} />}
          </S.Container>
        </>
      )}
    </div>
  );
}
