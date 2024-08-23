import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function SignIn() {
    const [email,setEmail] = useState("");
  
    function onChange(e){
        setEmail(e.target.value);
    }

    async function onSubmit(e){
        e.preventDefault();
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth,email)
            toast.success("Email is sent")
        } catch (error) {
            toast.error(`send email is defeat: ${error.message}`)
        }
    }

  return (
    <section>
        <h1 className='text-3xl text-center mt-auto font-bold'>Forgot Password</h1>
        <div className='flex justify-center flex-wrap items-center px-1 py-12 max-w-6x mx-auto '>
            <div className="md:w-[67%]  lg:w-[45%] mb-12 md:mb-6">
                <img src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D" 
                alt="house" 
                className='w-full rounded-2xl'
                />
            </div>
            <div className='md:w-[33%] lg:-w[40%] lg:ml-20'>
                <form onSubmit={onSubmit}> 
                    <input type="email" id="email" 
                    value={email} onChange={onChange} placeholder='Email address'
                    className="mb-6 w-full px-4 py-2 text-xl text-gray-900 bg-white
                    border-gray-300 rounded transition ease-in-out"/>
                    <div className='relative mb-6'>
           
                  
            </div>
            <div className='flex justify-between whitespace-nowrap
            text-sm sm:text-lg'>
                <p>
                    <Link to="/sign-in" className='text-yellow-600 hover:text-yellow-800 transition duration-200
                    ease-in-out ml-1'>Sign in?</Link>
                </p>
            </div>
            <button className='w-full bg-blue-400 text-white px-7 py-3 font-bold uppercase
            rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg
            active:bg-blue-800'  type='submit'>send reset password</button>
            <div className='flex my-4 items-center
            before:border-t 
            before:flex-1 
             before:border-gray-300
             after:border-t 
            after:flex-1 
             after:border-gray-300'>
                <p className='text-center font-bold mx-4'>OR</p>
            </div>
            <OAuth />
            </form>
            </div>
          
        </div>
    </section>
  )
}
