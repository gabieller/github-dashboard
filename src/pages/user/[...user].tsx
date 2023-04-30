import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { fetchUser, fetchUserRepos } from "@/services/api";
import { UserProps } from "@/types/User";

import { AiFillGithub } from "react-icons/ai";

import * as S from "./styles";
import RepoCard from "@/components/RepoCard";

const User = () => {
  const [userDetails, setUserDetails] = useState<UserProps[]>([]);
  const [userRepos, setUserRepos] = useState<UserProps[]>([]);

  const router = useRouter();
  const { user } = router.query;

  useEffect(() => {
    const fetchUserData = async () => {
      const userResponse = await fetchUser(`${user}`);
      setUserDetails(userResponse);

      const reposResponse = await fetchUserRepos(`${user}`, 4)
      setUserRepos(reposResponse);
    };

    fetchUserData();
  }, [user]);

  if (!userDetails) {
    return <div>Loading user data...</div>;
  }

console.log(userRepos)

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
        <Link href={`https://github.com/${user}`} target="_blank">
          <button>
            <AiFillGithub size={24} />
            Github profile
          </button>
        </Link>
      </div>

<S.Grid>
<S.Description>
        <S.Infos>
          <p>{userDetails?.name}</p>
          <p>{userDetails?.login}</p>
        </S.Infos>
        <hr />
        <S.RowGrid>
          <p>{userDetails?.followers} followers</p>
          <p>{userDetails?.following} following</p>
        </S.RowGrid>
      
      </S.Description>
      <S.Repos>
      {userRepos.map((repo) => (
      <RepoCard key={repo.id} name={repo.name} description={repo.description} />
      ))}
      </S.Repos>
</S.Grid>

    
    </S.Details>
  );
};

export default User;
