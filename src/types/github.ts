export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  language: string | null;
  visibility: string;
}

export interface RepoStats {
  languages: { [key: string]: number };
  commits: {
    total: number;
    history: { date: string; count: number }[];
  };
  contributors: {
    login: string;
    contributions: number;
    avatar_url: string;
  }[];
  pullRequests: {
    open: number;
    closed: number;
  };
  issues: {
    open: number;
    closed: number;
  };
}