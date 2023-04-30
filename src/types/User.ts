export interface UserProps {
  id?: string;
  name: string;
  email?: string;
  avatar_url: string;
  login: string;
  followers: number;
  following?: number;
  popularRepos?: string;
}
