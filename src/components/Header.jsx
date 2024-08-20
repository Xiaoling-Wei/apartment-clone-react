import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate()
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    }
    
  return (
    <div className='bg-white border-b shadow-sm sticky top-0
    z-50'> 
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
                        ${pathMathRoute("/") && "text-green-600 border-b-red-900    "}`} onClick={()=>navigate("/")}>Apartment</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMathRoute("/offers") && "text-green-600 border-b-red-900"}`} onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 font-semibold text-gray-400 border-b-[3px] border-b-transparent
                        ${pathMathRoute("/sign-in") && "text-green-600 border-b-red-900"}`} onClick={()=>navigate("/sign-in")}>Sign in</li>
                </ul>
            </div>
        </header>

    </div>
  )
}
