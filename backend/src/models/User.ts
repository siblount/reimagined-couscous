// backend/src/models/User.ts
import mongoose, { Schema } from 'mongoose';
import { IUser } from '@shared/types';

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['donor', 'member', 'admin', 'owner'], default: 'donor' },
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization' },
  donorProfileId: { type: Schema.Types.ObjectId, ref: 'DonorProfile' },
  profilePicture: { type: String, required: false }
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);