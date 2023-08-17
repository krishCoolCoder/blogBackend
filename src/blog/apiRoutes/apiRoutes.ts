import express from 'express';
import { getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/postController';

const router = express.Router();

router.post('/', createBlog);
router.patch('/', updateBlog);
router.get('/', getBlog);
router.delete('/', deleteBlog);

export default router;