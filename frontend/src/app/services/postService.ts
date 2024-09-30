// frontend/src/app/services/postService.ts
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface PostData {
  title: string;
  description: string;
  images?: string[];
  tags?: string[];
  organizationId: string;
  itemsNeeded?: { item: string; quantity: number }[];
  volunteersNeeded?: number;
  eventDate?: Date;
}

export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

export const getPostById = async (id: string) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

export const createPost = async (postData: PostData) => {
  const response = await axios.post(`${API_URL}/posts`, postData);
  return response.data;
};