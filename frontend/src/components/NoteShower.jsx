import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import ShowPage from "../pages/Edito";
import toast from "react-hot-toast";
import axios from "axios";
const NoteShower = ({ notes,setNotes }) => {
  const navigate = useNavigate();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("You wanna Delete ? ")) return;
    try {
      const d = await axios.delete('http://localhost:5001/api/notes/'+id);

setNotes((prev)=>prev.filter(note=>note._id !==id))

      toast.success('deleted');
    } catch (error) {
      toast.error(error.message);
    }
  };



  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-900 min-h-screen">
  {notes.map((note) => (
    <div
      key={note._id}
      className="bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-between h-48 overflow-hidden"
    >
      <div>
        <h2 className="text-md font-semibold text-white mb-1 truncate">
          {note.title}
        </h2>
        <p className="text-gray-300 text-sm line-clamp-3">
          {note.content}
        </p>
        <span className="text-xs text-gray-400">
          {new Date(note.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        <Link
          className="px-2 py-1 bg-blue-600 text-white text-xs rounded-md hover:bg-blue-500 flex items-center gap-1 transition"
          to={'/notes/' + note._id}
        >
          <Edit2 size={12} /> Edit
        </Link>
        <button
          onClick={(e) => handleDelete(e, note._id)}
          className="px-2 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-500 flex items-center gap-1 transition"
        >
          <Trash2 size={12} /> Delete
        </button>
      </div>
    </div>
  ))}
</div>




  );
};

export default NoteShower;
