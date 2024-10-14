// page.tsx or your home page component file
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import PostList from './components/PostList';
import CreatePostButton from './components/CreatePostButton';

function HomeContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center text-shadow-lg">Welcome to GiveApp</h1>
      
      {/* Recommended Requests Section */}
      <section className="mb-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)] transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-white mb-4">Recommended Requests</h2>
        <div className="h-72 overflow-hidden"> {/* Adjust height as needed */}
          <PostList cardType="home" limit={5} />
        </div>
      </section>
      
      {/* Explore More Section */}
      <section className="mb-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.57)] transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-white mb-4">Explore More</h2>
        <PostList cardType="explore" limit={6} />
      </section>
      
      <CreatePostButton />
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