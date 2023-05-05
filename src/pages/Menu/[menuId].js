import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const menuDetails = () => {
    const router = useRouter();

    const menuId = router.query.menuId
    const menuCards = [
        {
            id: '1',
            name: 'Soup Meals',
            image: '../Msoup.png'
    
        },
        {
            id: '2',
            name: 'Breakfast',
            image: '../Breakfast.png'
    
        }
        ,
        {
            id: '3',
            name: 'Grill',
            image: '../Grill.png'
    
        }
        ,
        {
            id: '4',
            name: 'Rice Meal',
            image: '../RiceMeal.png'
    
        }
        , {
            id: '5',
            name: 'Dessert',
            image: '../Dessert.png'
    
        }
        ,
    
        {
            id: '6',
            name: 'Starterts',
            image: '../Starterts.png'
    
        },
        {
            id: '7',
            name: 'Small Choap',
            image: '../SmallChoap.png'
    
        },
        {
            id: '8',
            name: 'Salad',
            image: '../Salad.png'
    
        }
        
    ];
    const filtered = menuCards.filter(card => {
        return card.id === menuId;
      });

    
    return (
      
      <div className='heroBg h-[100vh] flex justify-center items-center'>
            <h1 className='text-[red] text-5xl'>Details about product {menuId}</h1>


            <div className="">
                {
                   filtered.map(card=><div className='px-10 ' key={card.id} >

                   <div className="px-8 py-8 sm:py-20 sm:px-20 border border-[#B5986D]">
                   <img className='w-full h-[80%]' src={card.image} alt="" />
               
                    </div>
                   <p className='text-[#B5986D] text-center pt-10 pb-4 font-bold text-[32px]'>{card.name}</p>
                   <div className="text-center">
                   <Link href={`Menu/${card.id}`} className='dark:text-white py-4 px-8 text-black text-[20px] font-semibold'>View menu</Link>
               
                   </div>             
               
                 </div>) 
                }

                </div>
  
  
         
        
          
    </div>
  )
}

export default menuDetails