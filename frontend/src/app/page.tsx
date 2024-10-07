// page.tsx
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import PostList from './components/PostList';

function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center text-shadow">Welcome to GiveApp</h1>
      <section className="mb-8 bubble-effect p-6">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Recommended Requests</h2>
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