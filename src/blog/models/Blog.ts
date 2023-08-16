import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog = mongoose.model<IUser>('Blog', UserSchema);

export default Blog;