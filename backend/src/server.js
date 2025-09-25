import express from 'express';
import NotesRoutes from './routes/NotesRoutes.js'
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();
const port = process.env.PORT || 5001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter)
connectDb();
app.use('/api/notes' ,NotesRoutes );
app.listen(port,(req,res)=>{
    console.log('app started on \n http://localhost:5001');
});

