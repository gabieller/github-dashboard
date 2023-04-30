import { MdStars } from "react-icons/md";

import * as S from "./styles";
import { RepoProps } from "@/types/Repos";

const RepoCard = ({ name,description }: RepoProps) => {
  return (
    <S.Card>
      <span>{name}</span>
      <MdStars />
      {description}
    </S.Card>
  );
};

export default RepoCard;
