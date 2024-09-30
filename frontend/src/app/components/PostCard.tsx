// frontend/src/app/components/PostList.tsx
import Link from 'next/link';
import { IPost } from '@shared/types';

interface PostListProps {
  posts: IPost[];
  cardType: 'home' | 'explore';
}

const PostList: React.FC<PostListProps> = ({ posts, cardType }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden">
          {post.images && post.images.length > 0 && (
            <img src={post.images[0]} alt={post.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description.substring(0, 100)}...</p>
            <Link href={`/organization/${post.organizationId}`}>
              <span className="text-blue-500 hover:underline">
                {post.organizationId.name}
              </span>
            </Link>
            {cardType === 'explore' && (
              <div className="mt-4">
                <Link href={`/request/${post._id}`}>
                  <span className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                    Learn More
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;