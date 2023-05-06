import React from 'react'

import style from '../../styles/Menu.module.css'
import Reservation from '@/Components/Reservation'
import Link from 'next/link'
const Menu = () => {

  const menuCards = [
    {
      id:'1',
      name: 'Soup Meals',
      image:'../Msoup.png',
      bg:'../SoupMHero.png'

    },
    {
      id:'2',
      name: 'Breakfast',
      image: '../Breakfast.png',
      bg:'..SoupMHero.png'


    }
    ,
    {
      id:'3',
      name: 'Grill',
      image:'../Grill.png'

    } 
    ,
    {
      id:'4',
      name: 'Rice Meal',
      image:'../RiceMeal.png'

    } 
    ,{
      id:'5',
      name: 'Dessert',
      image:'../Dessert.png'

    }
    ,

    {
      id:'6',
      name: 'Starterts',
      image:'../Starterts.png'

    },
    {
      id:'7',
      name: 'Small Choap',
      image:'../SmallChoap.png'

    },
    {
      id:'8',
      name: 'Salad',
      image:'../Salad.png'

    }
    
]
console.log(menuCards);

  return (
    <>
    
      <div className={`${style.MmenuBg} dark:opacity-[0.9] h-[550px]`}>
        <div className=" flex justify-center h-full items-center">
          <h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>MENU</h1>
          </div>

      </div>
      <div className="w-full lg:w-[85%] 2xl:w-[70%] py-20 mx-auto">
      <h2 className='text-[#B5986D] px-8  py-16 font-bold sm:pl-[40px] 2xl:pl-[100px] text-[50px] leading-[80px] '>Menu</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 mx-auto ">

{
  menuCards.map(card => <div className='px-10 ' key={card.id} >

    <div className="px-8 py-12  sm:w-[450px] mx-auto sm:h-[657px] sm:py-20 sm:px-20 border border-[#B5986D]">
    <img className=' w-[348px] mx-auto h-[547px] ' src={card.image} alt="" />

     </div>
    <p className='text-[#B5986D] text-center pt-10 pb-4 font-bold text-[25px]'>{card.name}</p>
    <div className="text-center">
      <Link href={`/Menu/${card.id}`}  className='dark:text-white py-4 px-8 text-black text-[20px] font-semibold'>
        View menu</Link>

    </div>             

  </div>)
  
 }
</div>
      </div>


      {/* reservation */}
      <Reservation></Reservation>

      
    </>
  )
}


export default Menu
