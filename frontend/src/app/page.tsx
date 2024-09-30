import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import PostList from './components/PostList';

function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-800 mb-8">Welcome to GiveApp</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">Recommended Requests</h2>
        <PostList cardType="home" limit={5} />
      </section>
      {/* Add other sections as needed */}
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