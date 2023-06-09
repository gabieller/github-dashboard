import { MdStars } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";
import { limitChars } from "@/utils/limitChars";
import { UserProps } from "@/types/User";

export const UserCard = ({ user, repos }: UserProps) => {
  return (
    <Link href={`/user/${user.login}`}>
      <S.Card bgCard={user.avatar_url} data-testid="user-card">
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
            <p data-testid="email">{user.email ?? user.login}</p>

            <S.FollowersContainer>
              <MdStars color="#03045e" />
              <p>{user.followers} followers</p>
            </S.FollowersContainer>
          </S.CardContent>
          <S.Line />

          {repos.length > 0 && (
            <S.RepoBox>
              <div>
                <MdStars color="#03045e" />
                {repos[0]?.stargazers_count}
              </div>
              <p>{repos[0]?.name}</p>
              <span>
                {repos[0]?.description && limitChars(repos[0]?.description, 30)}
              </span>
            </S.RepoBox>
          )}

          <S.ButtonProfile>Open Profile</S.ButtonProfile>
        </S.Wrapper>
      </S.Card>
    </Link>
  );
};
