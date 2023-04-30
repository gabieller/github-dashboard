import { UserProps } from "@/types/User";
import axios from "axios";
import moment from "moment";

const API_URL = "https://api.github.com";

const API_ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

const headers = {
  Authorization: `Bearer ${API_ACCESS_TOKEN}`,
};

export const fetchUser = async (userName: string): Promise<UserProps> => {
  try {
    const res = await axios.get<UserProps>(`${API_URL}/users/${userName}`, {
      headers,
    });
    return res.data;
  } catch (error) {
    //@ts-ignore
    throw new Error(error);
  }
};
export const fetchUserRepos = async (
  userName: string,
  quantity: number
): Promise<UserProps> => {
  try {
    const res = await axios.get<UserProps>(
      `${API_URL}/users/${userName}/repos`,
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

export const fetchPopularUsers = async (): Promise<UserProps[]> => {
  const lastMonthDate = moment().subtract(1, "month").format("YYYY-MM-DD");

  const res = await axios.get<UserProps[]>(`${API_URL}/search/users?`, {
    params: {
      q: `created:>${lastMonthDate}`,
      sort: "followers",
      order: "desc",
      per_page: 3,
    },
    headers,
  });

  return res.data;
};

export const fetchActiveUsers = async (): Promise<UserProps[]> => {
  const lastMonthDate = moment().subtract(1, "month").format("YYYY-MM-DD");


  const res = await axios.get(`${API_URL}/search/users`, {
    params: {
      q: `created:>${lastMonthDate}`,
      sort: "starts",
      order: "desc",
      per_page: 3,
    },
    headers,
  });

  return res.data;
};

export const fetchRepositories = async () => {
  const now = new Date();
  const lastYear = new Date(
    now.getFullYear() - 1,
    now.getMonth(),
    now.getDate()
  );

  const response = await axios.get(`${API_URL}/search/repositories`, {
    params: {
      q: `created:>${lastYear.toISOString()}`,
      sort: "stars",
      order: "desc",
      per_page: 4,
    },
  });

  const items = response.data;
  return items;
};
