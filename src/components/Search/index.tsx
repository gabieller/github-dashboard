import { AiOutlineSearch } from "react-icons/ai";

import * as S from "./styles";

interface SearchProps {
  fetchUser: (userName: string) => Promise<void>
}

const Search = ({fetchUser}: SearchProps) => {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <button>
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export default Search;
