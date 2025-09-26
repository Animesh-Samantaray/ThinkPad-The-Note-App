import express from 'express';
import NotesRoutes from './routes/NotesRoutes.js'
import { connectDb } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors'
dotenv.config();
const port = process.env.PORT || 5001;

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(rateLimiter);
connectDb().then(()=>{
    app.use('/api/notes' ,NotesRoutes );
app.listen(port,(req,res)=>{
    console.log('app started on \n http://localhost:5001');
});
}).catch((err)=>{
    console.log(err);
    
})


