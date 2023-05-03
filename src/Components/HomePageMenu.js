import React from 'react'

const HomePageMenu = () => {
  return (
      <div className='sm:flex py-20 '>
          <div className="sm:w-[30%]">
              
              <h1 className='text-[60px] leading-3 text-end mr-4 dark:text-white text-black font-bold'>Our Menu</h1>
          </div>
          <div className="sm:w-[70%]">
              <img className='w-full' src="./HomePageMenu.png" alt="" />
          </div>
    </div>
  )
}

export default HomePageMenu