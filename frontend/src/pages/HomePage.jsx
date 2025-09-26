import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimited from '../components/RateLimited';
import axios from 'axios';
import NoteShower from '../components/NoteShower';
const HomePage = () => {
  const [isRateLimited , setIsRateLimited] = useState(false);
  const [notes,setNotes] = useState([]);
  const[loading,setLoading]=useState(true);


useEffect(()=>{
   const fetchData = async()=>{
  try {
    const d =  await axios.get('http://localhost:5001/api/notes/');
  setNotes(d.data.data);
   console.log(d.data.data);
   setIsRateLimited(false);
  } catch (error) {
    if(error.response?.status==429){
      setIsRateLimited(true);
    }
    else toast.error('Failed to load data')
  }
  finally{
    setLoading(false)
  }
   }
   fetchData();
   
  },[])

  return (
    <div>
      <Navbar />
      {isRateLimited && <RateLimited />}
    {loading && (
 <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <span className="mt-4 text-gray-700 font-medium text-lg">Loading...</span>
  </div>
</div>
)}

{!isRateLimited && notes.length>0 && <NoteShower notes={notes} setNotes={setNotes}/>}
    </div>
  )
}

export default HomePage
