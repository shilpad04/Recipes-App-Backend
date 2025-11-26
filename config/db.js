const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;

    if (!url) {
      throw new Error("MONGO_URL is missing in .env file");
    }

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
