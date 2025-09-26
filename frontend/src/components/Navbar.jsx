import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="h-[80px] w-full flex flex-row justify-between items-center px-4 sm:px-6 md:px-10 bg-gray-900 text-gray-100 shadow-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-blue-400">
                ThinkPad
            </div>
            <button
                className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-md transition text-sm sm:text-base"
                onClick={() => navigate('/create')}
            >
                Add Note <span className="ml-1">📝</span>
            </button>
        </nav>
    )
}

export default Navbar
