import { useState, KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";

import * as S from "./styles";

import logo from "public/logo.svg";

interface NavBarProps {
  searchUser: (userName: string) => Promise<void>;
}

const NavBar = ({ searchUser }: NavBarProps) => {
  const [username, setUserName] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      searchUser(username);
    }
  };

  return (
    <S.NavBar>
      <Link href="/">
        <Image src={logo} alt="Uphill logo" data-testid="logo" />
      </Link>
      <S.InputWrapper>
        <AiOutlineSearch onClick={() => searchUser(username)} />

        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* <button onClick={() => searchUser(username)}> */}
        {/* </button> */}
      </S.InputWrapper>
    </S.NavBar>
  );
};

export default NavBar;
