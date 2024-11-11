import React from 'react'
import { IoMdCart } from "react-icons/io";
function HomePageProduct() {
  return (
    <div className='w-[70%] bg-slate-100 mx-auto p-12 flex flex-wrap gap-12'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      
    </div>
  )
}

const Product = () => {
  return <>
    <div className='w-[300px] flex flex-col justify-between h-[300px] bg-slate-200 shadow-md p-8 rounded-md'>
      <div>
        <h1 className='text-3xl '>Atomic habits</h1>

        <p>category:book</p>
        <p>price:$20</p>
      </div>
      <div className='flex gap-8'>
        <button className='flex  px-2 py-1 bg-white  rounded-md'>
          <IoMdCart className='text-2xl' />
          Add to cart
        </button>
        <button className='flex  px-2 py-1 bg-orange-400  rounded-md'>
          <IoMdCart className='text-2xl' />
          Buy
        </button>
      </div>
        
        
    </div>
  </>
}
export default HomePageProduct
