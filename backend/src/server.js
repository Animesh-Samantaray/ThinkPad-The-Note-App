// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimiter from './middleware/rateLimiter.js';
import NotesRoutes from './routes/NotesRoutes.js';
import { connectDb } from './config/db.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5001;

// JSON Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware (for dev)
if (process.env.NODE_ENV !== 'production') {
  app.use(cors({
    origin: "http://localhost:5173", // frontend dev server
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
}

// Rate limiter
app.use(rateLimiter);

// API routes
app.use('/api/notes', NotesRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const frontendDistPath = path.join(__dirname, '../../frontend/dist');
  app.use(express.static(frontendDistPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
}

// Connect to MongoDB and start server
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ App started on: http://localhost:${port}`);
    });
  })
  .catch(err => console.error('DB connection failed:', err));
