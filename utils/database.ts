import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in .env");
    }

    if (isConnected) {
        console.log('DB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'pizzeria',
        })

        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error);
    }
}