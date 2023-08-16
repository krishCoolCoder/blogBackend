import express from 'express';
import { getBlog, createBlog, updateBlog } from '../controllers/postController';

const router = express.Router();

router.post('/', createBlog);
router.patch('/', updateBlog);
router.get('/', getBlog);

export default router;