// app/components/CreatePostButton.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@/app/hooks/useUser'; // You'll need to create this hook

const CreatePostButton = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Link href="/request/create" className="fixed bottom-20 right-4 z-20">
      <button className="bubble-effect text-orange-500 rounded-full w-14 h-14 flex items-center justify-center hover:orange-glow transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </Link>
  );
};

export default CreatePostButton;
