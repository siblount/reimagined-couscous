// backend/src/models/DonorProfile.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IDonorProfile extends Document {
  userId: mongoose.Types.ObjectId;
  bio?: string;
  interests: string[];
  donationHistory: {
    organizationId: mongoose.Types.ObjectId;
    amount: number;
    date: Date;
  }[];
  preferredCauses: string[];
  volunteerHistory?: {
    organizationId: mongoose.Types.ObjectId;
    hours: number;
    date: Date;
  }[];
}

const DonorProfileSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  bio: { type: String },
  interests: [{ type: String }],
  donationHistory: [{
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization' },
    amount: { type: Number },
    date: { type: Date },
  }],
  preferredCauses: [{ type: String }],
  volunteerHistory: [{
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization' },
    hours: { type: Number },
    date: { type: Date },
  }],
}, { timestamps: true });

export default mongoose.model<IDonorProfile>('DonorProfile', DonorProfileSchema);