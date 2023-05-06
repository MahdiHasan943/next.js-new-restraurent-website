import Reservation from '@/Components/Reservation';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const menuDetails = () => {
    const router = useRouter();

    const menuId = router.query.menuId
    const menuCards = [
        {
            id: '1',
            name: 'Soup Meals',
            image: '../Msoup.png',
            bg:'../SoupMHero.png'
    
        },
        {
            id: '2',
            name: 'Breakfast',
            image: '../Breakfast.png',
            bg:'../BMHero.png'

    
        }
        ,
        {
            id: '3',
            name: 'Grill',
            image: '../Grill.png',
            bg:'../MGrill.png'

    
        }
        ,
        {
            id: '4',
            name: 'Rice Meal',
            image: '../RiceMeal.png',
            bg:'../MRiceMeal.png'

    
        }
        , {
            id: '5',
            name: 'Dessert',
            image: '../Dessert.png',
            bg:'../MDessert.png'

    
        }
        ,
    
        {
            id: '6',
            name: 'Starterts',
            image: '../Starterts.png',
            bg:'../MStarters.png'

    
        },
        {
            id: '7',
            name: 'Small Choap',
            image: '../SmallChoap.png',
            bg:'../MRiceMeal.png'

    
        },
        {
            id: '8',
            name: 'Salad',
            image: '../Salad.png',
            bg:'../MSalad.png'

    
        }
        
    ];
    const filtered = menuCards.filter(card => {
        return card.id === menuId;
      });
    const [loading, setLoading] = useState();
    
    return (
        <div className="">
              {loading?<h1>..lading</h1>:<><div className=' w-full ' >


      <div className="">
          {
             filtered.map(card=><div className='' key={card.id} >

                 <div className='h-[550px] bg-no-repeat  dark:opacity-[0.8] bg-cover bg-full bg-center w-full' style={{ backgroundImage: `url(${card.bg})` }} >
                 <div className=" flex justify-center h-full items-center">
          <h1 className='text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]'>MENU</h1>
          </div>
                  </div>

               
                 <p className='text-[#B5986D] text-center pt-10 pb-4 font-bold text-[32px]'>{card.name}</p>

                 <Reservation></Reservation>
                 
                      
         
           </div>) 
                    }
                   
                    

                       
                   

                </div>


   
  
    
            </div>
                           </>

            }
    </div>
      
  )
}

export default menuDetails