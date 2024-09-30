import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import PostList from './components/PostList';

function HomeContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-orange-800">Welcome to GiveApp</h1>
      <section>
        <h2 className="text-xl font-semibold text-orange-700 mb-4">Recent Requests</h2>
        <PostList />
      </section>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent />
    </Suspense>
  );
}