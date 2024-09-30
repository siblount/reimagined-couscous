// backend/src/controllers/postController.ts
import { Request, Response } from 'express';
import Post, { IPost } from '../models/Post';
import Organization from '../models/Organization';
import User, { IUser } from '../models/User';
import { DEMO_USER_ID } from '../constants';

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, images, tags, organizationId, itemsNeeded, volunteersNeeded, eventDate } = req.body;
    const userId = DEMO_USER_ID; // Using the demo user ID

    // Check if the user is an admin or owner of the organization
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    const organization = await Organization.findById(organizationId);
    if (!organization) {
      res.status(404).json({ message: 'Organization not found' });
      return;
    }

    if (user.role !== 'admin' && user.role !== 'owner' || user.organizationId?.toString() !== organizationId) {
      res.status(403).json({ message: 'Not authorized to create posts for this organization' });
      return;
    }

    const newPost = new Post({
      title,
      description,
      images,
      tags,
      organizationId,
      itemsNeeded,
      volunteersNeeded,
      eventDate
    });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res.status(500).json({ message: 'Error creating post', error });
  }
};


export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const { limit, search } = req.query;
    let query = Post.find();

    if (search) {
      query = query.or([
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(String(search), 'i')] } },
      ]);
    }

    if (limit) {
      const parsedLimit = parseInt(limit as string);
      if (isNaN(parsedLimit)) {
        res.status(400).json({ message: 'Invalid limit parameter. Must be a number.' });
        return;
      }
      query = query.limit(parsedLimit);
    }

    const posts = await query.sort({ createdAt: -1 }).populate('organizationId');
    res.json(posts);
    console.log("Successfuly sent posts: ", posts);
  } catch (error) {
    console.error('Error fetching posts from database: ', error);
    console.log('Error fetching posts from database: ', error);
    res.status(500).json({ message: 'Error fetching posts from backend', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};

// Add this export if it doesn't exist
export const getPostById = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("got a bullshit request");
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post by id?', error });
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, images, tags, itemsNeeded, volunteersNeeded, eventDate } = req.body;
    const userId = DEMO_USER_ID; // Using the demo user ID

    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (user.role !== 'admin' && user.role !== 'owner' || user.organizationId?.toString() !== post.organizationId.toString()) {
      res.status(403).json({ message: 'Not authorized to update this post' });
      return;
    }

    post.title = title || post.title;
    post.description = description || post.description;
    post.images = images || post.images;
    post.tags = tags || post.tags;
    post.itemsNeeded = itemsNeeded || post.itemsNeeded;
    post.volunteersNeeded = volunteersNeeded || post.volunteersNeeded;
    post.eventDate = eventDate || post.eventDate;

    await post.save();

    res.json({ message: 'Post updated successfully', post });
  } catch (error) {
    res.status(500).json({ message: 'Error updating post', error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = DEMO_USER_ID; // Using the demo user ID

    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.role !== 'admin' && user.role !== 'owner' || user.organizationId?.toString() !== post.organizationId.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await Post.findByIdAndDelete(id);

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
};