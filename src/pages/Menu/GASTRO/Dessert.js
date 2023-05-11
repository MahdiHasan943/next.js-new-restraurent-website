import React from 'react'
import style from '../../../styles/Menu.module.css'

const Dessert = () => {
  return (
    <div className={`${style.dessert} h-[550px]`}>
    <div className=" flex justify-center h-full items-center">
      <h1 className="text-white text-center  text-[45px]  sm:text-[90px] sm:leading-[100px]">
      GASTRO MENU
      </h1>
    </div>
  </div>
  )
}

export default Dessert