import React from 'react'
import { FaGoogle } from "react-icons/fa";

export default function OAuth() {
  return (
    <button
    className='flex items-center justify-center w-full
    bg-red-600 text-white px-7 py-3 uppercase
    text-sm font-medium hover:bg-red-900 active:bg-red-950
    hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded'>
        <FaGoogle 
        className='text-2xl mr-2 rounded-full'/> Continue with Google
    </button>
  )
}
