// frontend/src/app/explore/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getPosts } from '../services/postService';
import SearchBar from '../components/SearchBar';
import { IPost, OrganizationPreview } from '@shared/types';
import { Types } from 'mongoose';

function isOrganizationPreview(org: Types.ObjectId | OrganizationPreview): org is OrganizationPreview {
  return (org as OrganizationPreview).name !== undefined;
}

export default function ExplorePage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts(undefined, searchQuery);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-800 mb-4">Explore Donation Requests and Events</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {post.images && post.images.length > 0 && (
              <img src={post.images[0]} alt={post.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description.substring(0, 100)}...</p>
              {isOrganizationPreview(post.organization) && (
                <Link href={`/organization/${post.organization._id}`}>
                  <span className="text-blue-500 hover:underline">
                    {post.organization.name}
                  </span>
                </Link>
              )}
              <div className="mt-4">
                <Link href={`/request/${post._id}`}>
                  <span className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}