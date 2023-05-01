import { RepoProps } from "./Repos";

export interface UserProps {
  user: {
    id?: string;
    name: string;
    email?: string;
    avatar_url: string;
    login: string;
    followers: number;
    following?: number;
    popularRepos?: string;
  };
  repo: RepoProps;
}
