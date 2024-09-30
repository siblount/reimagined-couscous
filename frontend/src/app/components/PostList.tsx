// frontend/src/app/components/PostList.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/postService';

interface Post {
  _id: string;
  title: string;
  description: string;
  organizationId: string;
  createdAt: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-orange-800">{post.title}</h3>
            <p className="text-orange-600">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Created at: {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;