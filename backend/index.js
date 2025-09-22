import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.use('/api/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.BE_PORT;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));
