import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchUser,
  fetchUserRepos,
  searchRepositories,
  searchUser,
} from "@/services/api";

import { UserProps } from "@/types/User";
import { RepoProps } from "@/types/Repos";

import { TrendingUsers } from "@/components/TrendingUsers";
import { ActiveUsers } from "@/components/ActiveUsers";
import { Loading } from "@/components/Loading";
import { TopRepos } from "@/components/TopRepos";

import * as S from "./styles";

//TODO liddar com o erro
export default function Search() {
  const [popularUsers, setPopularUsers] = useState<UserProps[] | undefined>();
  const [activeUsers, setaActiveUsers] = useState<UserProps[] | undefined>();
  const [popularRepos, setPopulaRepos] = useState<RepoProps[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<boolean>(false);

  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    const getPopularUsers = async () => {
      setIsLoading(true);
      const decodedUrl = decodeURIComponent(q);

      const data = await searchUser(decodedUrl, "stars");

      const promises = data.items?.map(async ({ login }: UserProps) => {
        const user = await fetchUser(login);
        const repos = await fetchUserRepos(login, 1);
        return { user, repos };
      });

      const results = await Promise.all(promises);


      setPopularUsers(results as UserProps[]); 
      setIsLoading(false);
    };

    getPopularUsers();
  }, [q]);

  useEffect(() => {
    const getActiveUsers = async () => {
      setIsLoading(true);
      const decodedUrl = decodeURIComponent(q);

      const data = await searchUser(decodedUrl, "repositories");

      const promises = data.items?.map(async ({ login }: UserProps) => {
        const user = await fetchUser(login);
        const repos = await fetchUserRepos(login, 1);
        return { user, repos };
      });

      const results = await Promise.all(promises);

      setaActiveUsers(results as UserProps[]);
      setIsLoading(false);
    };

    getActiveUsers();
  }, [q]);

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
  }, [q]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* {error && <p>User not found!</p>} */}
          <S.Container>
            Results for: {q}
            {popularUsers && <TrendingUsers popularUsers={popularUsers} />}
            {activeUsers && <ActiveUsers activeUsers={activeUsers} />}
            {popularRepos && <TopRepos popularRepos={popularRepos} />}
          </S.Container>
        </>
      )}
    </div>
  );
}
