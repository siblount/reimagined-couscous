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
      <Link href={`/request/${post._id}`} className="flex-shrink-0 w-64">
        <div className="flashcard h-full rounded-lg overflow-hidden transition-all duration-300">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg h-full">
            <div className="relative h-32 w-full">
              <img
                src={imageUrl}
                alt={post.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-100 mb-2">{post.title}</h3>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`text-xs px-2 py-1 rounded-full ${
                      index === post.tags.length - 1
                        ? 'bg-orange-500 bg-opacity-20 text-orange-300 border border-orange-500'
                        : 'bg-gray-700 bg-opacity-50 text-gray-300'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

export default HomeRequestFlashcard;