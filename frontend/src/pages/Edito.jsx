import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Edito = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
const navigate = useNavigate();
  useEffect(() => {
    const getter = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes/' + id);
        setData(res.data.data);
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      } catch (error) {
        console.error(error);
      }
    };
    getter();
  }, [id]);

  const handleEdit = async (e) => {
    // e.preventDefault();
    try {
      const res = await axios.put('http://localhost:5001/api/notes/' + id, { title, content });
      setData(res.data.data);
      toast.success('Updated!');
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-10 px-4">

<span
  onClick={() => navigate('/')}
  className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
>
  ← Back to Home
</span>

      <div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-3 text-white">{data?.title}</h1>
        <p className="text-gray-300">{data?.content}</p>
      </div>

      <form onSubmit={handleEdit} className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Edit title"
          className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Edit content"
          rows={5}
          className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Edito;
