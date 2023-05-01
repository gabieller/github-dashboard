export interface Repo {
  id?: string;
  name?: string;
  description?: string;
  html_url?: string;
  stargazers_count?: number
 
}

export interface RepoProps {
  id?: number  | undefined;
  items?: Repo[];
  repo: Repo;
}

