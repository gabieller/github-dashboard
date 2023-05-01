import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { UserProps } from "@/types/User";
import { RepoProps } from "@/types/Repos";
import { fetchUser, fetchUserRepos } from "@/services/api";

import { AiFillGithub } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

import * as S from "./styles";
import { Loading, RepoCard } from "@/components";

const User = () => {
  const [userDetails, setUserDetails] = useState<UserProps>();
  const [userRepos, setUserRepos] = useState<RepoProps[]>([]);

  const router = useRouter();
  const { username } = router.query;
  console.log(username);

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await fetchUser(username);

      const { id, avatar_url, login, name, followers, following, email } =
        userResponse;

      const userData: UserProps = {
        id,
        avatar_url,
        email,
        login,
        name,
        followers,
        following,
      };

      setUserDetails(userData);

      const reposResponse = await fetchUserRepos(username, 4);
      setUserRepos(reposResponse);
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (userDetails === undefined) {
    return <Loading />;
  }

  return (
    <S.Details>
      <div>
        <Image
          src={userDetails?.avatar_url}
          alt={userDetails?.login}
          width={300}
          height={300}
          style={{ borderRadius: "1rem" }}
        />
        <Link href={`https://github.com/${username}`} target="_blank">
          <button>
            <AiFillGithub size={24} />
            Github profile
          </button>
        </Link>
      </div>

      <S.Grid>
        <S.Infos>
          <h2>{userDetails?.name}</h2>
          <h2>{userDetails?.login}</h2>
          <S.Line />
          <div>
            <BsPeopleFill />
            <p>{userDetails?.followers} followers</p> ·
            <p>{userDetails?.following} following</p>
          </div>
        </S.Infos>
        <S.Repos>
          {userRepos?.map(
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
        </S.Repos>
      </S.Grid>
    </S.Details>
  );
};

export default User;
