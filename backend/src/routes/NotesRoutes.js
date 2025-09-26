import express from 'express';
import { getAllNotes  ,createNote, deleteNote, updateNote, getSingleNote } from '../controllers/notesController.js';
const router = express.Router();


router.get('/',getAllNotes);
router.post('/',createNote);
router.put('/:id',updateNote);
router.delete('/:id',deleteNote);
router.get('/:id',getSingleNote);
export default router;
