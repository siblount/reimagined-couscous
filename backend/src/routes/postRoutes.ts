// backend/src/routes/postRoutes.ts
import express from 'express';
import { getPosts, createPost, getPostById } from '../controllers/postController';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPostById);

export default router;