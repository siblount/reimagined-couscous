// backend/src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/giveapp';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});