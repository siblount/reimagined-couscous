// app/components/CreatePostButton.tsx
'use client';

import Link from 'next/link';
import { useUser } from '@/app/hooks/useUser'; // You'll need to create this hook

/**
 * Creates a post button if the user is a nonprofit member.
 * @returns A button to create a post if the user is a nonprofit member, otherwise null.
 */
const CreatePostButton = () => {
  const { user } = useUser();

  if (!user || !user.isNonprofitMember) {
    return null;
  }

  return (
    <Link href="/create" className="fixed right-4 bottom-20 bg-orange-500 text-white rounded-full p-4 shadow-lg">
      <span className="text-2xl">➕</span>
    </Link>
  );
};

export default CreatePostButton;