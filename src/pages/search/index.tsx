import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchUser,
  fetchUserRepos,
  searchRepositories,
  searchUser,
} from "@/services/api";

import { User, UserProps } from "@/types/User";
import { RepoProps } from "@/types/Repos";

import { TrendingUsers } from "@/components/TrendingUsers";
import { ActiveUsers } from "@/components/ActiveUsers";
import { Loading } from "@/components/Loading";
import { TopRepos } from "@/components/TopRepos";

import * as S from "./styles";

export default function Search() {
  const [popularUsers, setPopularUsers] = useState<UserProps[] | undefined>();
  const [activeUsers, setaActiveUsers] = useState<UserProps[] | undefined>();
  const [popularRepos, setPopulaRepos] = useState<RepoProps[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    const getPopularUsers = async () => {
      setIsLoading(true);

      //@ts-ignore
      const decodedUrl = decodeURIComponent(q);

      if (router.isReady) {
        const data = await searchUser(decodedUrl, "followers");

        const promises = data.items?.map(async (item: User) => {
          const { login }: User = item;
          const user = await fetchUser(login);
          const repos = await fetchUserRepos(login, 1);
          return { user, repos };
        });

        //@ts-ignore
        const results = await Promise.all(promises);
        setPopularUsers(results as UserProps[]);
        setIsLoading(false);
      }
    };

    getPopularUsers();
  }, [q, router.isReady]);

  useEffect(() => {
    const getActiveUsers = async () => {
      setIsLoading(true);

      if (router.isReady) {
        //@ts-ignore
        const decodedUrl = decodeURIComponent(q);

        const data = await searchUser(decodedUrl, "repositories");

        const promises = data.items?.map(async (item: User) => {
          const { login }: User = item;
          const user = await fetchUser(login);
          const repos = await fetchUserRepos(login, 1);
          return { user, repos };
        });

        //@ts-ignore
        const results = await Promise.all(promises);

        setaActiveUsers(results as UserProps[]);
        setIsLoading(false);
      }
    };

    getActiveUsers();
  }, [q, router.isReady]);

  useEffect(() => {
    const getPopularRepos = async () => {
      setIsLoading(true);

      if (router.isReady) {
        //@ts-ignore
        const decodedUrl = decodeURIComponent(q);

        const res = await searchRepositories(decodedUrl, "stars");
        const popularRepos = res.items;

        setPopulaRepos(popularRepos as RepoProps[]);
        setIsLoading(false);
      }
    };

    getPopularRepos();
  }, [q, router.isReady]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
