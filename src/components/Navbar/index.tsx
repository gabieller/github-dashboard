import { useState, KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";

import * as S from "./styles";

import logo from "public/logo.svg";
import { useRouter } from "next/router";

export function NavBar() {
  const [searchQuery, setSeachQuery] = useState<string>("");

  const router = useRouter();

  // const handleKeyDown = (e: KeyboardEvent) => {
  //   if (e.key === "Enter") {
  //     setSeachQuery(searchQuery);
  //   }
  // };

  return (
    <S.NavBar>
      <Link href="/">
        <Image src={logo} alt="Uphill logo" data-testid="logo" />
      </Link>
      <S.InputWrapper>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSeachQuery(e.target.value)}
          // onKeyDown={handleKeyDown}
        />
        <button>
          <AiOutlineSearch
            size={42}
            onClick={() =>
              router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
            }
          />
        </button>
      </S.InputWrapper>
    </S.NavBar>
  );
}
