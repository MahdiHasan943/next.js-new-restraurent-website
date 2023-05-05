import React from 'react'
import style from '../../styles/WineAndCoctail.module.css'
import Reservation from '@/Components/Reservation'
const WineAndCoctail = () => {
  return (
    <>
    <div className={`${style.MwineBg} dark:opacity-[0.5] h-[70vh]`}>
      <div className=" flex justify-center h-full items-center">
        <h1 className='text-white text-center text-[45px]  sm:text-[68px] sm:leading-[84px]'>Wine & Cocktail Bar</h1>
        </div>

      </div>
      
      {/* reservation */}
      <Reservation></Reservation>
    
  </>
  )
}

export default WineAndCoctail