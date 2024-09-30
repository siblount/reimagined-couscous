// backend/src/models/User.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'donor' | 'member' | 'admin' | 'owner';
  organizationId?: mongoose.Types.ObjectId;
  donorProfileId?: mongoose.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['donor', 'member', 'admin', 'owner'], default: 'donor' },
  organizationId: { type: Schema.Types.ObjectId, ref: 'Organization' },
  donorProfileId: { type: Schema.Types.ObjectId, ref: 'DonorProfile' },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);