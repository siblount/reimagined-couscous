// backend/src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/postRoutes';
import organizationRoutes from './routes/organizationRoutes';
import profileRoutes from './routes/profilesRoutes';
import seedData from './seedData';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);
app.use('/api/organizations', organizationRoutes)
app.use('/api/profiles/public', profileRoutes)

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
    return seedData();
  })
  .then(() => {
    console.log("Seed data inserted");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });