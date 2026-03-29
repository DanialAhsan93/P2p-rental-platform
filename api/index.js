import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import userRoutes from "./routes/user.routes.js";
import cors from "cors"
dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true, // only if you're using cookies or sessions
}));

app.use(cookieParser());


// app.listen(3000, () => {
//     console.log("Server is running on port 3000 !!");
// });

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal sever error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
});

export default app;
