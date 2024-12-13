import RepoList from '@/components/RepoList';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your GitHub Repositories</h1>
      <RepoList />
    </div>
  );
}