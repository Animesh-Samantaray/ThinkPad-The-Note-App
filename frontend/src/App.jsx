import React from 'react'
import {Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
import Edito from './pages/Edito'
const App = () => {
  return (
    <>
      {/* <button onClick={()=>{toast.error("Animesh got error")}}  className='h-[50px] w-[100px] bg-red-400 hover:bg-red-600  font-extrabold'>click me</button> */}
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/home/:id' element={<NoteDetailPage/>} />
         <Route path='/notes/:id' element={<Edito/>} />
      </Routes>
    </>
  )
}

export default App
