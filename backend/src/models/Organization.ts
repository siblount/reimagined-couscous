// backend/src/models/Organization.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IOrganization extends Document {
  name: string;
  description: string;
  longBio: string;
  bannerImage: string;
  profileImage: string;
  ownerId: mongoose.Types.ObjectId;
  adminIds: mongoose.Types.ObjectId[];
  memberIds: mongoose.Types.ObjectId[];
  website: string;
  contactEmail: string;
  contactPhone: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  causes: string[];
  foundedYear: number;
}

const OrganizationSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  longBio: { type: String, required: true },
  bannerImage: { type: String, required: true },
  profileImage: { type: String, required: true },
  ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  adminIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  website: { type: String },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String },
  socialMedia: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
  },
  causes: [{ type: String }],
  foundedYear: { type: Number },
}, { timestamps: true });

export default mongoose.model<IOrganization>('Organization', OrganizationSchema);