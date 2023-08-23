import { Request, Response } from 'express';
import Blog from '../models/Blog';

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const user = new Blog({ title, content });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const {id, title, content } = req.body;
    let data = await Blog.findOneAndUpdate({_id: id},{title: title, content: content}, {new : true});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const users = await Blog.find().sort({createdAt: -1});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error });
  }
};                                                                                                                                                                        

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const users = await Blog.deleteOne(
      {
        _id : req.query.id
      }
    );
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error getting users', error });
  }
};                                                                                                                                                                        