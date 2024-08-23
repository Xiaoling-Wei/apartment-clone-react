import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

export default function Header() {
    const [pageState, setPageState] = useState("sign in")
    const location = useLocation();
    const navigate = useNavigate()
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setPageState("Profile")
            }else{
                setPageState("Sign in")
            }
        })
    },[auth])
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true
        }
    }
    
  return (
    <div className='bg-white border-b shadow-sm sticky top-0
    z-40'> 
        <header className='flex justify-between items-center
        px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://www.apartments.com/a/4d9af0/content/images/apartments-for-rent-logo.png" 
                alt="logo" 
                className='h-5 cursor-pointer'
                onClick={()=>navigate("/")}
                />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 test-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMatchRoute("/") && "text-green-600 border-b-red-900    "}`} onClick={()=>navigate("/")}>Apartment</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMatchRoute("/offers") && "text-green-600 border-b-red-900"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                        ${(pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && "text-green-600 border-b-red-900"}`} onClick={()=>navigate("/profile")}>{pageState}</li>
                </ul>
            </div>
        </header>

    </div>
  )
}
