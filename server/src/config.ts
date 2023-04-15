import dotenv from "dotenv";
dotenv.config();

export default {
  PORT: process.env.PORT,
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_DATABASE_NAME: process.env.MONGODB_DATABASE_NAME,
  MONGODB_USER: process.env.MONGODB_USER,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
};
