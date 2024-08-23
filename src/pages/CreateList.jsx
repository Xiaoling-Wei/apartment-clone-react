import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'

export default function CreateList() {
 
  const [formData, setFormData] = useState({
    type:"rent",
    name:"",
    bedrooms:1,
    bathrooms:1,
    parking:false,
    furnished:false,
    address:"",
    description:"",
    offer:true,
    regularPrice:0,
    discountPrice:0,

  });
  const {type,name,bedrooms,bathrooms,parking,furnished,address,description,offer,regularPrice,discountPrice} = formData
  function onChange(){

  }
  return (
    <main className='max-w-md px-2 mx-auto'>
      <h1 className='text-3xl text-center mt-6 font-bold'>Create a list</h1>
      <form>
        <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex'>
          <button type='button' id='type' value="sale"
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${type === "rent" ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            Sell 
          </button>

          <button type='button' id='type' value="rent"
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${type === "sale" ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            Rent 
          </button>

        </div>

        <p className='text-lg mt-6 font-semibold'>
          Name
        </p>
        <input type="text" id='name' value={name} onChange={onChange}
        placeholder='Name' maxLength="32" minLength="8" required
        className='w-full px-4 py-2 text-xl text-gray-700
        bg-white border border-gray-300 rounded transition
        duration-200 ease-in-out focus:text-gray-800 focus:bg-white
        focus:border-slate-600 mb-6'/>
        <div className='flex space-x-6 '>
          <div>
              <p className='text-lg font-semibold'>Beds</p>
              <input type="number" id='bedrooms' value={bedrooms}
              onChange={onChange} min="1" max="20" required
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white text-center
              border-gray-300 rounded transition duration-200 ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
          </div>
          <div>
              <p className='text-lg font-semibold'>Baths</p>
              <input type="number" id='bathrooms' value={bathrooms}
              onChange={onChange} min="1" max="20" required
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white text-center
              border-gray-300 rounded transition duration-200 ease-in-out
              focus:text-gray-700 focus:bg-white focus:border-slate-600'/>
          </div>
        </div>
        <p className='text-lg mt-6 font-semibold'>Parking spot</p>
        <div className='flex'>
          <button type='button' id='parking' value={true}
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${!parking ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            Yes
          </button>

          <button type='button' id='parking' value={false}
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${parking ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            No 
          </button>

        </div>
        <p className='text-lg mt-6 font-semibold'>Furnished</p>
        <div className='flex'>
          <button type='button' id='furnished' value={true}
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${!furnished ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            Yes
          </button>

          <button type='button' id='furnished' value={false}
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${furnished ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            No
          </button>

        </div>
        <p className='text-lg mt-6 font-semibold'>
          Address
        </p>
        <textarea type="text" id='address' value={address} onChange={onChange}
        placeholder='Address' required
        className='w-full px-4 py-2 text-xl text-gray-700
        bg-white border border-gray-300 rounded transition
        duration-200 ease-in-out focus:text-gray-800 focus:bg-white
        focus:border-slate-600 mb-6'/>
         <p className='text-lg font-semibold'>
          Description
        </p>
        <textarea type="text" id='description' value={description} onChange={onChange}
        placeholder='description' required
        className='w-full px-4 py-2 text-xl text-gray-700
        bg-white border border-gray-300 rounded transition
        duration-200 ease-in-out focus:text-gray-800 focus:bg-white
        focus:border-slate-600 mb-6'/>

<p className='text-lg font-semibold'>Offer</p>
        <div className='flex mb-6'>
          <button type='offer' id='offer' value={true}
          onClick={onChange}
          className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${!offer ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            Yes
          </button>

          <button type='button' id='offer' value={offer}
          onClick={onChange}
          className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md
          rounded hover:shadow-lg focus:shadow-lg active:shadow-lg
          transition duration-150 ease-in-out w-full
          ${offer ? "bg-white text-black" : "bg-blue-500 text-white"}`}>
            No
          </button>

        </div>

        <div className='flex items-center mb-6'>
          <div>
            <p className='text-lg font-semibold'>Regular Price</p>
            <div className='flex w-full justify-center items-center space-x-6'>
              <input type="number" id='regularPrice' value={regularPrice}
              onChange={onChange} min="100" required
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white
              border border-gray-300 rounded transition duration-200
              ease-in-out focus:text-gray-700 focus:bg-white
              focus:border-slate-600 text-center'/>
               {type === "rent" && (
              <div className=''>
                <p className='text-md w-full whitespace-nowrap'> $ / Month</p>
              </div>
            )}
            </div>
          </div>
        </div>
        {offer && (
            <div className='flex items-center mb-6'>
            <div>
              <p className='text-lg font-semibold'>DiscountPrice</p>
              <div className='flex w-full justify-center items-center space-x-6'>
                <input type="number" id='discountPrice' value={discountPrice}
                onChange={onChange} min="100" required={offer}
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white
                border border-gray-300 rounded transition duration-200
                ease-in-out focus:text-gray-700 focus:bg-white
                focus:border-slate-600 text-center'/>
                 {type === "rent" && (
                <div className=''>
                  <p className='text-md w-full whitespace-nowrap'> $ / Month</p>
                </div>
              )}
              </div>
            </div>
          </div>
        )}
        <div>
          <p className='text-lg font-semibold'>Images</p>
          <p className='text-yellow-600'>The first image will be cover (max 6)</p>
          <input type="file" id='images' onChange={onChange}
          accept='.jpg,.png,.jpeg' multiple required
          className='w-full px-3 py-1.5 text-gray-500 bg-white border border-gray-300
          rounded transition duration-150 ease-in-out
          focus:bg-white focus:border-slate-600'/>
        </div>
        <button type='submit' className='mt-8 mb-10 mb-6 w-full px-7 py-3
        bg-blue-600 text-white font-medium text-sm
        uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
        focus:bg-bl-7 focus:shadow-lg active:bg-blue-800
        active:shadow-lg transition duration-200 ease-in-out'>Create Listing</button>
      </form>
    </main>
  )
}
