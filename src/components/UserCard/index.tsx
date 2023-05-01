import { UserProps } from "@/types/User";

import { MdStars } from "react-icons/md";

import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

//@ts-ignore
const UserCard = (user, repo) => {

  return (
    <Link href={`user/${user.login}`}>
      <S.Card bgCard={user.avatar_url}>
        <S.Wrapper>
          <S.ImageContainer>
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={64}
              height={64}
            />
          </S.ImageContainer>

          <S.CardContent>
            <span>{user.name ?? user.login}</span>
            <p>{user.email ?? user.login}</p>

            <S.FollowersContainer>
              <MdStars color="#03045e" />
              <p>{user.followers} followers</p>
            </S.FollowersContainer>
          </S.CardContent>
          <S.Line />

          <S.RepoBox>
            <div>
              <MdStars color="#03045e" />
              número
            </div>
            {/* <span>{repo[0].name}</span>
            <span>{repo[0].description}</span> */}
          </S.RepoBox>
          <S.ButtonProfile>Open Profile</S.ButtonProfile>
        </S.Wrapper>
      </S.Card>
    </Link>
  );
};

export default UserCard;
