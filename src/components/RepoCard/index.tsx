import Link from "next/link";
import { RepoProps } from "@/types/Repos";

import { limitChars } from "@/utils/limitChars";
import { generateRandomBorderColor } from "@/utils/generateRandomBorderColor";

import { MdStars } from "react-icons/md";




import * as S from "./styles";

const colors = ["#03045e", "#0077b6", "#00b4d8", "#caf0f8"];

const RepoCard = ({
  name,
  description,
  html_url,
  stargazers_count,
}: RepoProps) => {
  return (
    <Link href={html_url} target="_blank">
      <S.Card borderColor={generateRandomBorderColor(colors)}>
        <span>{name}</span>
        <div>
          <MdStars color="#03045e" />
          <p>{stargazers_count}</p>
        </div>
        {description && limitChars(description, 60) }
      </S.Card>
    </Link>
  );
};

export default RepoCard;
