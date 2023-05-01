import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { User } from "@/types/User";
import { Repo } from "@/types/Repos";
import { fetchUser, fetchUserRepos } from "@/services/api";

import { AiFillGithub } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

import * as S from "./styles";
import { Loading } from "@/components/Loading";
import { RepoCard } from "@/components/RepoCard";

const User = () => {
  const [userDetails, setUserDetails] = useState<User | undefined>();
  const [userRepos, setUserRepos] = useState<Repo[] | undefined>();

  const router = useRouter();
  const { username } = router.query;

  useEffect(() => {
    const fetchUserData = async () => {
      //@ts-ignore
      const res = await fetchUser(username);

      //@ts-ignore
      setUserDetails(res);

      //@ts-ignore
      const reposResponse = await fetchUserRepos(username, 4);
      //@ts-ignore
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
          {userRepos?.map((repo: Repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
        </S.Repos>
      </S.Grid>
    </S.Details>
  );
};

export default User;
