import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error in getAllNotes controller");
    return res.status(500).json({ success: false });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const obj = new Note({ title, content });
    await obj.save();
    return res.status(201).json({ success: true });
  } catch (err) {
    console.error("Error in createNote controller");
    return res.status(500).json({ success: false });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const n = await Note.findByIdAndDelete(id);
    if (!n) {
      return res.status(404).json({ success: false });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in deleteNote controller");
    return res.status(500).json({ success: false });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const n = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!n) {
      return res.status(404).json({ success: false });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in updateNote controller");
    return res.status(500).json({ success: false });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ success: false });
    }
    return res.status(200).json({ success: true, data: note });
  } catch (err) {
    console.error("Error in getNoteById controller");
    return res.status(500).json({ success: false });
  }
};


export const getSingleNote = async(req,res)=>{
  try{
    const {id} = req.params;
    const note = await Note.findById(id);
     if (!note) {
      return res.status(404).json({ success: false });
    }
    return res.status(200).json({ success: true, data: note });

  }
  catch(error){
     console.error("Error in getNoteById controller");
    return res.status(500).json({ success: false });
  }
}