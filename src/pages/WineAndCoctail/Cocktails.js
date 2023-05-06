import React from 'react'
import Reservation from '@/Components/Reservation'

const Cocktails = () => {
  return (
    <div className=''>

    <div className='h-[550px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full' style={{ backgroundImage: `url("../wineList.png")` }} >
    <div className=" flex justify-center h-full items-center">
<h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>Wine & Cocktail List</h1>
</div>
     </div>

  

    <Reservation></Reservation>
    
         

</div>
  )
}

export default Cocktails