// backend/src/models/Post.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  organizationId: mongoose.Types.ObjectId;
  itemsNeeded?: { item: string; quantity: number }[];
  volunteersNeeded?: number;
  eventDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  tags: [{ type: String }],
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
  itemsNeeded: [{ item: String, quantity: Number }],
  volunteersNeeded: { type: Number },
  eventDate: { type: Date },
}, { timestamps: true });

export default mongoose.model<IPost>('Post', PostSchema);