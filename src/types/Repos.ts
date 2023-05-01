export interface Repo {
  id?: string;
  name?: string;
  description?: string;
  html_url?: string;
  stargazers_count?: number
 
}

export interface RepoProps {
  items?: Repo[];
  repo: Repo;
}

