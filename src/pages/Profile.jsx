import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { MdMapsHomeWork } from "react-icons/md";

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:auth.currentUser.displayName,
    email:auth.currentUser.email,
  });
  const {name, email} = formData
  const [changeDetail, setChangeDetail] = useState(false)
  function onLogout(){
      auth.signOut()
      navigate("/")
  }
  function onChange(e){
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }
  async function onSubmit(){// update display in db
    try {
      if(auth.currentUser.displayName !== name){
        
        await updateProfile(auth.currentUser,{
          displayName: name,
        });

        const docRef = doc(db,"users",auth.currentUser.uid)
        await updateDoc(docRef,{
          name,
        })
      }
      toast.success("Profile details update")
    } catch (error) {
      toast.error(`edit is defeat: ${error.message}`)
    }
  }
  return (
    <>
    <section className='max-w-6xl mx-auto flex 
    justify-center items-center flex-col'>
      <h1 className='text-center text-3xl mt-6 font-bold'>My Profile</h1>
      <div className='w-full md:w-[50%] mt-6 px-3'> 
        <form>
          <input type='text' id='name' value={name} 
          disabled={!changeDetail} 
          onChange={onChange}
          className={`mb-6 w-full px-4 py-2 text-xl 
          text-red-700 bg-white border border-red-400
          rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
          />

          <input type='email' id='email' value={email} 
          disabled className='mb-6 w-full px-4 py-2 text-xl 
          text-red-700 bg-white border border-red-400
          rounded transition ease-in-out'/>

          <div className='flex justify-between whitespace-nowrap
          text-sm sm:text-lg mg-6'>
            <p className='text-blue-500 flex items-center'>Do you want to change your name?
              <span 
              onClick={() => {
                changeDetail && onSubmit();
                setChangeDetail((prevState) => !prevState);
              }}
                
              className='text-red-500 hover:text-red-800 *:transition ease-in-out duration-200 ml-1 cursor-pointer'>
                {changeDetail ? "Apply Change" : "Edit"}
                </span></p>
            <p onClick={onLogout} className='text-yellow-500 hover:text-yellow-800 transition duration-150 *:ease-in-out cursor-pointer'>Sign out</p>
          </div>

        </form>

        <button type="submit"
        className='w-full bg-yellow-500
        text-white uppercase px-7 py-3 text-sm font-medium
         rounded shadow-md hover:bg-yellow-700
          duration-200 ease-in-out hover:shadow-lg active:bg-yellow-900'>
          <Link to="/create-listing" className='flex justify-center items-center'>
        <MdMapsHomeWork className='mr-2 text-3xl rounded-full p-1 border-2'/>
          Sell or rent your house
          </Link>
        </button>
      </div>
    </section>
    </>
  )
}
