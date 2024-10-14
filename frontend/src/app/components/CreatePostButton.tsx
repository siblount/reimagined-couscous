// app/components/CreatePostButton.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@/app/hooks/useUser'; // You'll need to create this hook

const CreatePostButton: React.FC = () => {
  const { user } = useUser();
  if (!user) return null;
  
  return (
    <Link href="/create-post" className="fixed bottom-6 right-6 z-10">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200 flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span>Create Post</span>
      </button>
    </Link>
  );
};
export default CreatePostButton;
