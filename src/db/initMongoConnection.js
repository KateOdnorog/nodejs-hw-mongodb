import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar';

export const initMongoDbConnection = async () => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const password = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');
    const uri = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log('You successfully connected to MongoDB!');
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }
};
