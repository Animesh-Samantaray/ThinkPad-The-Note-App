import Note from "../models/Note.js"

export  const getAllNotes=async(req,res)=>{
    try{
        const data = await Note.find().sort({createdAt:-1});
        res.status(200).json(data);
    }
    catch(err){
        console.error('Error in getAllNotes controller');
        res.status(500).json({message:err.message})

    }
}

export  const createNote=async(req,res)=>{
    try{
        const {title , content} = req.body;
        const obj = new Note({title:title,content:content});
        await obj.save();
        console.log('added new Note');
        res.status(201).json({message:'Note created successfully' , note:obj})
    }
    catch(err){
        console.error('Error in createNote controller');
        res.status(500).json({message:err.message})
    }
}


export  const deleteNote=async(req,res)=>{
    try{
        const {id} = req.params;
        const n=await Note.findByIdAndDelete(id);
        if(!n){
            res.status(404).json({message:' Note not found'});
        }
        res.status(200).json({message:'Note deleted Successfully'})
    }
    catch(err){
        console.error('Error in deleteNote controller');
        res.status(500).json({message:err.message});
    }
}


export const updateNote=async(req,res)=>{
    try{
        const {title,content} = req.body;
        const {id} = req.params;
        const n =await Note.findByIdAndUpdate(id,{title,content},{new:true});
        if(!n){
            res.status(404).json({message:' Note not found'});
        }
        res.status(200).json({message:'Updated successfully' , note:n});
    }
    catch(err){
        console.error('Error in updateNote controller');
        res.status(500).json({message:err.message});
    }
}

export const getNoteById=async(req,res)=>{
    try{
        const {id}=req.params;
        const note = await Note.findById({id})[0];
        if(!note){
             res.status(404).json({message:' Note not found'});
        }
    }
    catch(err){
        console.error('Error in getNoteBYId controller');
        res.status(500).json({message:err.message});     
    }
}