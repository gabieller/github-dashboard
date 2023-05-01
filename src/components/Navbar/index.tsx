import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "public/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";

import * as S from "./styles";

export function NavBar() {
  const [searchQuery, setSeachQuery] = useState<string>("");

  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSeachQuery("")
    }
  };

  const handleClick = () =>{
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    setSeachQuery("")

  }

  return (
    <S.NavBar>
      <Link href="/">
        <Image src={logo} alt="Uphill logo" data-testid="logo" />
      </Link>
      <S.InputWrapper>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSeachQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchQuery}
        />

        <AiOutlineSearch
          onClick={handleClick}
          size={32}
          color="#2d3a53"
        />
      </S.InputWrapper>
    </S.NavBar>
  );
}
