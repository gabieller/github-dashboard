import { UserProps } from "@/types/User";

import { MdStars } from "react-icons/md";

import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

const UserCard = ({ avatar_url, login, name, followers, email }: UserProps) => {
  return (
    <Link href={`user/${login}`}>
      <S.Card bgCard={avatar_url}>
        <S.Wrapper>
          <S.ImageContainer>
            <Image src={avatar_url} alt={login} width={64} height={64} />
          </S.ImageContainer>

          <S.CardContent>
            <span>{name ?? login}</span>
            <p>{email ?? login}</p>

            <S.FollowersContainer>
              <MdStars color="#03045e" />
              <p>{followers} followers</p>
            </S.FollowersContainer>
          </S.CardContent>
          <S.Line />

          <S.RepoBox>
            <div>
              <MdStars color="#03045e" />
              número
            </div>
            <span>Hello</span>
            <p>description</p>
          </S.RepoBox>
          <S.ButtonProfile>Open Profile</S.ButtonProfile>
        </S.Wrapper>
      </S.Card>
    </Link>
  );
};

export default UserCard;
