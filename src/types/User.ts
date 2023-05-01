import { Repo } from "./Repos";

export interface User {
  id?: string;
  name: string;
  email?: string;
  login: string;
  avatar_url: string;
  followers: number;
  following?: number;
  popularRepos?: string;
}

export interface UserProps {
  items?: User[];
  user: {
    id?: string;
    name: string;
    email?: string;
    login: string;
    avatar_url: string;
    followers: number;
    following?: number;
    popularRepos?: string;
  };
  repos: Repo[];
}
