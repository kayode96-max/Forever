import React from 'react'

function Discount() {
  return (
    <div className='mt-4'>
      <div className='relative bg-black text-white text-xs text-center px-4 py-2 font-sans h-8 flex items-center justify-center'>
        <p>Summer Sales for All Swim Suits And Free Express Delivery - 50% OFF!<span className='text-sm font-bold'>  Shop Now</span></p>
        <div className="language absolute right-32 flex items-center">
          <select className='bg-black text-white text-xs outline-none  border-0 m-0 rounded-2xl'>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Discount