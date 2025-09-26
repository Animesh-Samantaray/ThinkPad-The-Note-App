import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const CreatePage = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit =async (e) => {
   e.preventDefault();
if(!title.trim() || !content.trim()) {toast.error('Give all data');return;}
  setLoading(true)
try {
  await axios.post('http://localhost:5001/api/notes/',{title,content});
  toast.success('Added')
  navigate('/');
} catch (error) {
  if(error.response?.status===429){
    toast.error('Stop , You are creating notes too fast',{
      icon:'🫨',
      duration:4000
    })
  }
  else toast.error(error.message)
}
finally{
setLoading(false)
}

  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
     
      <div className="w-full max-w-lg mb-6">
        <Link
          to="/"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg shadow transition"
        >
          ← Go Back Home
        </Link>
      </div>

      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a Note 📝</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter note title"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          
          <textarea
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your note..."
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg font-semibold text-white shadow transition 
              ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {loading ? "Saving..." : "Save Note"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
