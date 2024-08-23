// this function is allowed to sign in with google


import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import {db} from "../firebase";
import { useNavigate } from 'react-router-dom';

export default function OAuth() {

  const navigate = useNavigate()
  async function onGoogleClick(){
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      const user = result.user

      // confirm the user add the database

      const docRef = doc(db, "users",user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef,{
          name:user.displayName,
          email:user.email,
          timestamp:serverTimestamp(),
        })
      }
      navigate("/")
    } catch (error) {
      toast.error("Could not use Google")
    }
  }

  return (
    <button type='button'
    onClick={onGoogleClick}
    className='flex items-center justify-center w-full
    bg-red-600 text-white px-7 py-3 uppercase
    text-sm font-medium hover:bg-red-900 active:bg-red-950
    hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded'>
        <FaGoogle 
        className='text-2xl mr-2 rounded-full'/> Continue with Google
    </button>
  )
}
