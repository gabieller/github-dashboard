import { UserProps } from "@/types/User";
import axios from "axios";
import moment from "moment";

const API_URL = "https://api.github.com";

const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

const headers = {
  Authorization: API_ACCESS_TOKEN ? `Bearer ${API_ACCESS_TOKEN}` : "",
};

type SortBy = `stars` | `followers` | `repositories`;

const lastMonthDate = moment().subtract(1, "month").format("YYYY-MM-DD");
const lastYear = moment().subtract(1, "year").format("YYYY-MM-DD");

export const fetchUser = async (username: string): Promise<UserProps> => {
  try {
    const res = await axios.get<UserProps>(`${API_URL}/users/${username}`, {
      headers,
    });
    return res.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
};
export const fetchUserRepos = async (
  username: string,
  quantity: number
): Promise<UserProps> => {
  try {
    const res = await axios.get<UserProps>(
      `${API_URL}/users/${username}/repos`,
      {
        params: {
          sort: "stars",
          per_page: quantity,
        },
        headers,
      }
    );
    return res.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
};

export const searchUser = async (term: string | undefined, sortBy: SortBy) => {
  const res = await axios.get<UserProps[]>(
    `${API_URL}/search/users?q=${
      term ? `${term}+` : ""
    }created:>${lastMonthDate}`,
    {
      params: {
        sort: sortBy,
        in: `${term ? "name" : ""}`,
        order: "desc",
        per_page: 3,
      },
      headers,
    }
  );

  return res.data;
};

export const searchRepositories = async (
  term: string | undefined,
  sortBy: SortBy
) => {
  const res = await axios.get<UserProps[]>(
    `${API_URL}/search/repositories?q=${term ? `${term}+` : ""}created:>${
      sortBy === "stars" ? lastYear : lastMonthDate
    }`,
    {
      params: {
        sort: sortBy,
        in: `${term ? "name" : ""}`,
        order: "desc",
        per_page: 3,
      },
      headers,
    }
  );

  return res.data;
};


