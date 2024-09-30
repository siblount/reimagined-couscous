// frontend/src/app/components/HomeRequestFlashcard.tsx
import React from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  images?: string[];
  tags: string[];
}

const HomeRequestFlashcard: React.FC<{ post: Post }> = ({ post }) => {
  const imageUrl = post.images && post.images.length > 0
    ? post.images[0]
    : `https://placehold.co/600x400?text=${encodeURIComponent(post.title)}`;

    return (
      <Link href={`/request/${post._id}`} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-32 w-full">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-orange-800 mb-2">{post.title}</h3>
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
};

export default HomeRequestFlashcard;