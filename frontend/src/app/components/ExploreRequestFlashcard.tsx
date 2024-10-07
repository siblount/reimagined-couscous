// ExploreRequestFlashcard.tsx
import React from 'react';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  description: string;
  images?: string[];
  createdAt: string;
  tags: string[];
  eventDate?: string;
  volunteersNeeded?: number;
}

const ExploreRequestFlashcard: React.FC<{ post: Post }> = ({ post }) => {
  const imageUrl = post.images && post.images.length > 0
    ? post.images[0]
    : `https://placehold.co/600x400?text=${encodeURIComponent(post.title)}`;

  return (
    <Link href={`/request/${post._id}`} className="block">
      <div className="bubble-effect overflow-hidden hover:orange-glow transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <h3 className="absolute bottom-2 left-2 text-xl font-semibold text-white text-shadow">{post.title}</h3>
        </div>
        <div className="p-4">
          <p className="text-white mb-2 line-clamp-2">{post.description}</p>
          <div className="flex flex-wrap gap-1 mb-2">
            {post.tags.map((tag, index) => (
              <span key={index} className="bg-orange-500 bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-sm text-white">
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            {post.eventDate && (
              <span>Event: {new Date(post.eventDate).toLocaleDateString()}</span>
            )}
            {post.volunteersNeeded && (
              <span>Volunteers needed: {post.volunteersNeeded}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreRequestFlashcard;