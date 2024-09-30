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
    <Link href={`/request/${post._id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-orange-800 mb-2">{post.title}</h3>
        <div className="relative h-48 w-full mb-2">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-orange-600 mb-2 line-clamp-2">{post.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-1">
          Posted on: {new Date(post.createdAt).toLocaleDateString()}
        </p>
        {post.eventDate && (
          <p className="text-xs text-gray-600 mb-1">
            Event Date: {new Date(post.eventDate).toLocaleDateString()}
          </p>
        )}
        {post.volunteersNeeded && (
          <p className="text-xs text-gray-600">
            Volunteers needed: {post.volunteersNeeded}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ExploreRequestFlashcard;