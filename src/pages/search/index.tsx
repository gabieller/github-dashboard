import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchUser,
  fetchUserRepos,
  searchUser,
} from "@/services/api";
import { UserProps } from "@/types/User";
import { RepoProps } from "@/types/Repos";


import * as S from "./styles";
import { Loading, TrendingUsers } from "@/components";

//TODO liddar com o erro
export default function Search() {
  const [popularUsers, setPopularUsers] = useState<UserProps[]>();
  const [activeUsers, setaActiveUsers] = useState<UserProps[]>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();
  const { q } = router.query;

  // const [searchedUser, setSearcedhUser] = useState<UserProps | null>(null);

  // const [activeUsers, setaActiveUsers] = useState<UserProps[]>([]);
  // const [popularRepos, setPopulaRepos] = useState<RepoProps[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<boolean>(false);





  // useEffect(() => {
  //   const searchTerm = async () => {
  //     const decodedUrl = decodeURIComponent(q);
  //     const user = await searchUser(decodedUrl, "stars");
  //     // const repos = await seachRepoTerm(decodedUrl);
  //   };

  //   if (q) {
  //     searchTerm();
  //   }
  // }, [q]);

  useEffect(() => {
    const getPopularUsers = async () => {
      setIsLoading(true);
      const decodedUrl = decodeURIComponent(q);
      const data = await searchUser(decodedUrl, "stars");

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
  }, [q]);

  useEffect(() => {
    const getActiveUsers = async () => {
      setIsLoading(true);
      const decodedUrl = decodeURIComponent(q);

      const data = await searchUser(decodedUrl, "repositories");

      const promises = data.items.map(async ({ login }: UserProps) => {
        const user = await fetchUser(login);
        const repos = await fetchUserRepos(login, 1);
        return { user, repos };
      });

      const results = await Promise.all(promises);

      setaActiveUsers(results);
      setIsLoading(false);
    };

    getActiveUsers();
  }, [q]);

  //   useEffect(() => {
  //   setIsLoading(true);

  //   const getPopularRepos = async () => {
  //     const res = await fetchRepositories();

  //     const popularRepos = res.items.map(
  //       ({ id, name, description, html_url, stargazers_count }: RepoProps) => ({
  //         id,
  //         name,
  //         description,
  //         html_url,
  //         stargazers_count,
  //       })
  //     );
  //     setPopulaRepos(popularRepos);
  //     setIsLoading(false);
  //   };

  //   getPopularRepos();
  // }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* {searchedUser && <UserCard {...searchedUser} />} */}
          {/* {error && <p>User not found!</p>} */}
          <S.Container>
            {popularUsers && <TrendingUsers popularUsers={popularUsers} />}
            {activeUsers && <ActiveUsers activeUsers={activeUsers} />}
            {/* {popularRepos && <TopRepos popularRepos={popularRepos} />} */}
          </S.Container>
        </>
      )}
    </div>
  );
}
